import { CategoryCard } from "../../components";
import { useQuiz } from "../../contexts";
import { useDocumentTitle } from "../../utils";
import "./homepage.css";

export const Homepage = () => {
  useDocumentTitle("Home");
  const { quizNamesFromDB } = useQuiz();

  return (
    <main className="homepage-main">
      <div className="hero-image-wrapper">
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + "/images/hero.jpg"}
          alt="hero"
        />
      </div>
      <div className="category-wrapper">
        {quizNamesFromDB.map((categoryObj, index) => (
          <CategoryCard key={index} categoryObj={categoryObj} />
        ))}
      </div>
    </main>
  );
};
