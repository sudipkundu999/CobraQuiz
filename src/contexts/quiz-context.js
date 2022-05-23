import { doc, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { useAuth } from "./auth-context";

const QuizContext = createContext();

const useQuiz = () => useContext(QuizContext);

const QuizProvider = ({ children }) => {
  const { updateScore } = useAuth();
  const [quizNamesFromDB, setQuizNamesFromDB] = useState([]);
  const [quizCategoryFromDB, setQuizCategoryFromDB] = useState([]);
  useEffect(() => {
    (async () => {
      const categorySnapshot = await getDoc(doc(db, "quiz/category"));
      setQuizCategoryFromDB(categorySnapshot.data().quizCategory);

      const namesSnapshot = await getDoc(doc(db, "quiz/names"));
      setQuizNamesFromDB(namesSnapshot.data().quizNamesByCategory);
    })();
  }, []);

  const initialCurrentQuizState = {
    questions: [],
    answers: [],
    score: 0,
  };
  const [currentQuiz, setCurrentQuiz] = useState(initialCurrentQuizState);
  const resetCurrentQuiz = () => setCurrentQuiz(initialCurrentQuizState);
  const getQuizQuestions = async (quizId) => {
    const res = await getDoc(doc(db, `quiz/${quizId}-questions`));
    const questions = res.data().questions;
    setCurrentQuiz((prev) => ({
      ...prev,
      questions: questions,
    }));
  };

  const postQuizAnswers = async (quizId, answer) => {
    const res = await getDoc(doc(db, `quiz/${quizId}-answers`));
    const answers = res.data().answers;
    const score = answers.reduce(
      (acc, curr, index) => acc + (curr === answer[index] ? 5 : -1),
      0
    );
    setCurrentQuiz((prev) => ({
      ...prev,
      answers: answers,
      score: score,
    }));
    updateScore(score);
  };

  return (
    <QuizContext.Provider
      value={{
        quizNamesFromDB,
        quizCategoryFromDB,
        currentQuiz,
        getQuizQuestions,
        postQuizAnswers,
        resetCurrentQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export { useQuiz, QuizProvider };
