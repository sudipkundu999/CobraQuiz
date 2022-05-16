import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts";
import "./category-card.css";

export const CategoryCard = ({ categoryObj }) => {
  const { resetCurrentQuiz } = useQuiz();
  const navigate = useNavigate();

  return (
    <div className="category-card-wrapper">
      <div className="category-card">
        <img
          src={process.env.PUBLIC_URL + `/images/${categoryObj._id}.jpg`}
          className="img-fluid"
          alt={categoryObj.title}
        />
        <div
          className="category-hover"
          onClick={() => {
            navigate(`/${categoryObj._id}`);
            resetCurrentQuiz();
          }}
        >
          {categoryObj.title}
        </div>
      </div>
    </div>
  );
};
