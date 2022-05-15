import { useQuiz } from "../../contexts";

export const Rules = ({ quizId, rulesAccepted }) => {
  const { getQuizQuestions } = useQuiz();

  return (
    <div className="list-container">
      <div className="list-heading">Accept the rules to continue</div>
      <ul className="list">
        <li className="list-item">
          There will be 4 questions with 4 options each
        </li>
        <li className="list-item">You will have to answer all questions</li>
        <li className="list-item">
          Each correct answer will fetch you 5 points
        </li>
        <li className="list-item">Quitting the quiz will reset the quiz</li>
      </ul>
      <button
        className="btn btn-secondary"
        onClick={() => {
          getQuizQuestions(quizId);
          rulesAccepted(true);
        }}
      >
        Accept & Continue
      </button>
    </div>
  );
};
