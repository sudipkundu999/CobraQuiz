import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts";
import { useDocumentTitle } from "../../utils";
import "./homepage.css";

export const Homepage = () => {
  useDocumentTitle("Home");
  const { quizNamesFromDB, resetCurrentQuiz } = useQuiz();
  const navigate = useNavigate();

  return (
    <main className="homepage-main">
      <div className="category-wrapper">
        {quizNamesFromDB.map((categoryObj, index) => (
          <div
            className="category-card"
            key={index}
            onClick={() => {
              navigate(`/${categoryObj._id}`);
              resetCurrentQuiz();
            }}
          >
            {categoryObj.title}
          </div>
        ))}
      </div>
    </main>
  );
};
