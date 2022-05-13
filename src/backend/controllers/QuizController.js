import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

export const getAllQuizNameHandler = function () {
  return new Response(200, {}, { quizName: this.db.quiz.map((q) => q.title) });
};

export const getSingleQuizQuestionsHandler = function (schema, request) {
  const quizId = request.params.quizId;
  try {
    const quizToPlay = schema.quiz.findBy({ _id: quizId });
    return new Response(200, {}, { quizQuestions: quizToPlay.questions });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

export const postQuizResultHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      return new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const quizId = request.params.quizId;
    const quizPlayedAnswers = schema.quiz.findBy({ _id: quizId }).answers;
    let userTotalScore = schema.users.findBy({ _id: userId }).totalScore;
    const { answer } = JSON.parse(request.requestBody);
    let currentQuizScore = quizPlayedAnswers.reduce(
      (acc, curr, index) => (acc += curr[index] === answer[index] ? 5 : 0),
      0
    );
    userTotalScore += currentQuizScore;
    this.db.users.update({ _id: userId }, { totalScore: userTotalScore });
    return new Response(201, {}, { quizResult: currentQuizScore });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};
