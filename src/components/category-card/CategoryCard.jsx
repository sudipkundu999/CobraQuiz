import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../contexts";
import "./category-card.css";

export const CategoryCard = ({ img, url, name }) => {
  const { resetCurrentQuiz } = useQuiz();
  const navigate = useNavigate();

  return (
    <div className="category-card-wrapper">
      <div className="category-card">
        <img
          src={process.env.PUBLIC_URL + `/images/${img}.jpg`}
          className="img-fluid"
          alt={img}
        />
        <div
          className="category-hover"
          onClick={() => {
            navigate(`/${url}`);
            resetCurrentQuiz();
          }}
        >
          {name}
        </div>
      </div>
    </div>
  );
};
