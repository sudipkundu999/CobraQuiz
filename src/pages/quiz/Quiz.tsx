import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Rules } from "../../components/rules/Rules";
import { useQuiz } from "../../contexts";
import { notifySuccess, useDocumentTitle } from "../../utils";
import "./quiz.css";

export const Quiz = () => {
  const { quizId } = useParams();
  const { quizNamesFromDB, currentQuiz, postQuizAnswers, resetCurrentQuiz } =
    useQuiz();
  const quizName = quizNamesFromDB.find((quiz) => quiz._id === quizId)?.name;
  useDocumentTitle(quizName);

  const [isRulesAccepted, setIsRulesAccepted] = useState(false);
  const rulesAccepted = () => setIsRulesAccepted(true);

  const [currentAnswer, setCurrentAnswer] = useState([4, 4, 4, 4]);
  const selectOption = (indexOfCurrentAnswerArray: number, option: number) =>
    setCurrentAnswer((prev) =>
      prev.map((ans, key) => (key === indexOfCurrentAnswerArray ? option : ans))
    );

  const submitQuizHandler = () => {
    postQuizAnswers(quizId as string, currentAnswer);
    window.scrollTo(0, 0);
  };

  const isQuizSubmitted = currentQuiz.answers.length !== 0;

  const location = useLocation();
  useEffect(() => {
    resetCurrentQuiz();
    setIsRulesAccepted(false);
    setCurrentAnswer([4, 4, 4, 4]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const navigate = useNavigate();
  return (
    <main className="quiz-main">
      <div className="heading">
        {isQuizSubmitted
          ? "Quiz Results"
          : `You're going to play ${quizName} quiz`}
      </div>
      {isRulesAccepted && !isQuizSubmitted && (
        <button
          className="btn btn-danger quit-quiz"
          onClick={() => {
            resetCurrentQuiz();
            navigate("/");
            notifySuccess("Quiz quit successfully");
          }}
          title="Quitting the quiz will result in losing the saved answers"
        >
          Quit Quiz
        </button>
      )}
      {isQuizSubmitted && (
        <div className="quiz-score">YOU SCORED {currentQuiz.score}/20</div>
      )}
      {!isRulesAccepted && (
        <Rules quizId={quizId as string} rulesAccepted={rulesAccepted} />
      )}
      {isRulesAccepted && (
        <div className="quiz-player-wrapper">
          {currentQuiz.questions.map((q, index) => (
            <div className="list-container quiz-player" key={index}>
              <div className="list-heading quiz-question">
                {index + 1}. {q.question}
              </div>
              <ul className="list">
                {q.options.map((option: string, i: number) => (
                  <li
                    key={i}
                    className={`list-item quiz-answer ${
                      currentAnswer[index] === i && "quiz-answer-selected"
                    } 
                    ${
                      isQuizSubmitted &&
                      currentAnswer[index] !== currentQuiz.answers[index] &&
                      currentAnswer[index] === i &&
                      "quiz-answer-incorrect"
                    }
                    ${
                      currentQuiz.answers[index] === i && "quiz-answer-correct"
                    }`}
                    onClick={() => !isQuizSubmitted && selectOption(index, i)}
                  >
                    <span>{String.fromCharCode(65 + i)}.</span> {option}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {!currentAnswer.includes(4) && !isQuizSubmitted && (
            <button
              className="btn btn-success"
              onClick={() => submitQuizHandler()}
            >
              Submit
            </button>
          )}
        </div>
      )}
    </main>
  );
};
