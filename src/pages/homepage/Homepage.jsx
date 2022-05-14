import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts";
import { useDocumentTitle } from "../../utils";
import "./homepage.css";

export const Homepage = () => {
  useDocumentTitle("Home");
  const { quizNamesFromDB } = useQuiz();
  const navigate = useNavigate();
  return (
    <main className="homepage-main">
      <div className="category-wrapper">
        {quizNamesFromDB.map((category, index) => (
          <div
            className="category-card"
            key={index}
            onClick={() => navigate(`/${category}`)}
          >
            {category}
          </div>
        ))}
      </div>
    </main>
  );
};
