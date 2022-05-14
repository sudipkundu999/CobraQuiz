import { useParams } from "react-router-dom";

export const Quiz = () => {
  const { quizId } = useParams();

  return <main className="quiz-main">This is {quizId} quiz page</main>;
};
