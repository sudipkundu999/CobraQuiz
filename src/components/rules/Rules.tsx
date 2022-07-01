import { useLocation, useNavigate } from "react-router-dom";
import { useAuth, useQuiz } from "../../contexts";

interface RuleProps {
  quizId: string;
  rulesAccepted: Function;
}

export const Rules = ({ quizId, rulesAccepted }: RuleProps) => {
  const { getQuizQuestions } = useQuiz();
  const { isUserLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const acceptRulesHandler = () => {
    if (isUserLoggedIn) {
      getQuizQuestions(quizId);
      rulesAccepted(true);
    } else {
      navigate("/login", { state: { from: location }, replace: true });
    }
  };

  return (
    <div className="list-container">
      <div className="list-heading">Accept the rules to continue</div>
      <ul className="list">
        <li className="list-item">
          1. There will be 4 questions with 4 options each
        </li>
        <li className="list-item">
          2. To submit the quiz answer all questions
        </li>
        <li className="list-item">
          3. Each correct answer will be awarded
          <span className="positive-marking"> +5 </span> points
        </li>
        <li className="list-item">
          4. Each wrong answer will be awarded
          <span className="negative-marking"> -1 </span> points
        </li>
        <li className="list-item">
          5. Quitting the quiz in between will reset the quiz
        </li>
      </ul>
      <button
        className="btn btn-secondary"
        onClick={() => acceptRulesHandler()}
      >
        Accept & Continue
      </button>
    </div>
  );
};
