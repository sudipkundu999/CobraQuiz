import { doc, DocumentData, getDoc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { CurrentQuizState, UseQuizContext } from "../interfaces";
import { useAuth } from "./auth-context";

const QuizContext = createContext({} as any);

const useQuiz: UseQuizContext = () => useContext(QuizContext);

const QuizProvider = ({ children }: any) => {
  const { updateScore } = useAuth();
  const [quizNamesFromDB, setQuizNamesFromDB] = useState([]);
  const [quizCategoryFromDB, setQuizCategoryFromDB] = useState([]);
  useEffect(() => {
    (async () => {
      const categorySnapshot = await getDoc(doc(db, "quiz/category"));
      const { quizCategory } = categorySnapshot.data() as DocumentData;
      setQuizCategoryFromDB(quizCategory);

      const namesSnapshot = await getDoc(doc(db, "quiz/names"));
      const { quizNamesByCategory } = namesSnapshot.data() as DocumentData;
      setQuizNamesFromDB(quizNamesByCategory);
    })();
  }, []);

  const initialCurrentQuizState: CurrentQuizState = {
    questions: [],
    answers: [],
    score: 0,
  };
  const [currentQuiz, setCurrentQuiz] = useState(initialCurrentQuizState);
  const resetCurrentQuiz = () => setCurrentQuiz(initialCurrentQuizState);
  const getQuizQuestions = async (quizId: string) => {
    const res = await getDoc(doc(db, `quiz/${quizId}-questions`));

    const { questions } = res.data() as DocumentData;
    setCurrentQuiz((prev) => ({
      ...prev,
      questions: questions,
    }));
  };

  const postQuizAnswers = async (quizId: string, answer: Array<number>) => {
    const res = await getDoc(doc(db, `quiz/${quizId}-answers`));
    const { answers } = res.data() as DocumentData;
    const score = answers.reduce(
      (acc: number, curr: number, index: number) =>
        acc + (curr === answer[index] ? 5 : -1),
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
