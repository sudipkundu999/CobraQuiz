/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useContext, useEffect, useState } from "react";
import { useAxios } from "../utils";
import { useAuth } from "./auth-context";

const QuizContext = createContext();

const useQuiz = () => useContext(QuizContext);

const QuizProvider = ({ children }) => {
  //Initial Fetching of Quiz Names from DB
  const [quizNamesFromDB, setQuizNamesFromDB] = useState([]);
  const { response: responseQuizNames, operation: fetchQuizNames } = useAxios();
  useEffect(() => {
    fetchQuizNames({ method: "GET", url: "/api/quiz" });
  }, []);
  useEffect(() => {
    responseQuizNames !== undefined &&
      setQuizNamesFromDB(responseQuizNames.quizNames);
  }, [responseQuizNames]);

  //Total score from DB
  const [totalScore, setTotalScore] = useState(0);
  const { response: responseScore, operation: operationScore } = useAxios();
  const getTotalScore = () => {
    operationScore({
      method: "GET",
      url: `/api/user/score`,
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: {},
    });
  };
  useEffect(() => {
    responseScore !== undefined && setTotalScore(responseScore.totalScore);
  }, [responseScore]);

  const { isUserLoggedIn } = useAuth();
  useEffect(() => {
    isUserLoggedIn ? getTotalScore() : setTotalScore(0);
  }, [isUserLoggedIn]);

  //Current quiz from DB
  const initialCurrentQuizState = {
    questions: [],
    answers: [],
    score: 0,
  };
  const [currentQuiz, setCurrentQuiz] = useState(initialCurrentQuizState);
  const resetCurrentQuiz = () => setCurrentQuiz(initialCurrentQuizState);
  const { response: responseQuiz, operation: operationQuiz } = useAxios();
  const getQuizQuestions = (quizId) => {
    operationQuiz({
      method: "GET",
      url: `/api/quiz/questions/${quizId}`,
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: {},
    });
  };
  const postQuizAnswers = (quizId, answer) => {
    operationQuiz({
      method: "POST",
      url: `/api/quiz/results/${quizId}`,
      headers: {
        accept: "*/*",
        authorization: localStorage.getItem("cobraToken"),
      },
      data: { answer: answer },
    });
  };
  useEffect(() => {
    if (responseQuiz !== undefined) {
      if (responseQuiz.quizQuestions) {
        setCurrentQuiz((prev) => ({
          ...prev,
          questions: responseQuiz.quizQuestions,
        }));
      }
      if (responseQuiz.quizAnswers) {
        setCurrentQuiz((prev) => ({
          ...prev,
          answers: responseQuiz.quizAnswers,
          score: responseQuiz.quizResult,
        }));
        setTotalScore(responseQuiz.totalScore);
      }
    }
  }, [responseQuiz]);

  return (
    <QuizContext.Provider
      value={{
        quizNamesFromDB,
        currentQuiz,
        totalScore,
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
