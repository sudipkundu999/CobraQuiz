import { useParams } from "react-router-dom";
import { CategoryCard } from "../../components";
import { useQuiz } from "../../contexts";
import { useDocumentTitle } from "../../utils";
import "./category-page.css";

export const CategoryPage = () => {
  const { category } = useParams();
  useDocumentTitle(category);
  const { quizNamesFromDB } = useQuiz();
  const quizNamesByCategory = quizNamesFromDB.filter(
    (item) => item.category === category
  );

  return (
    <main className="category-main">
      <h2 className="heading">Showing only {category} quizzes</h2>
      <div className="quiz-names-by-category-wrapper">
        {quizNamesByCategory.map((item, i) => (
          <CategoryCard
            key={i}
            img={category}
            url={`${category}/${item._id}`}
            name={item.name}
          />
        ))}
      </div>
    </main>
  );
};
