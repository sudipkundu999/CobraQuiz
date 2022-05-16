import { CategoryCard } from "../../components";
import { useQuiz } from "../../contexts";
import { useDocumentTitle } from "../../utils";
import "./homepage.css";

export const Homepage = () => {
  useDocumentTitle("Home");
  const { quizCategoryFromDB } = useQuiz();

  return (
    <main className="homepage-main">
      <div className="hero-image-wrapper">
        <img
          className="img-fluid"
          src={process.env.PUBLIC_URL + "/images/hero.jpg"}
          alt="hero"
        />
      </div>
      <h2>Quiz by Category</h2>
      <div className="category-wrapper">
        {quizCategoryFromDB.map((category, index) => (
          <CategoryCard
            key={index}
            img={category}
            url={category}
            name={category}
          />
        ))}
      </div>
    </main>
  );
};
