import { Response } from "miragejs";
import { requiresAuth } from "../utils/authUtils";

export const getAllQuizNameHandler = function () {
  return new Response(
    200,
    {},
    { quizNames: this.db.quizzes.map((item) => item.title) }
  );
};

export const getQuizQuestionsHandler = function (schema, request) {
  const quizId = request.params.quizId;
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
    const quizToPlay = schema.quizzes.findBy({ _id: quizId }).attrs.questions;
    return new Response(200, {}, { quizQuestions: quizToPlay });
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
  const { answer } = JSON.parse(request.requestBody);
  const quizId = request.params.quizId;
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
    const quizAnswers = schema.quizzes.findBy({ _id: quizId }).attrs.answers;
    let currentQuizScore = quizAnswers.reduce(
      (acc, curr, index) => (acc += curr === answer[index] ? 5 : 0),
      0
    );
    let userTotalScore = schema.users.findBy({ _id: userId }).attrs.totalScore;
    userTotalScore += currentQuizScore;
    this.db.users.update({ _id: userId }, { totalScore: userTotalScore });
    return new Response(
      200,
      {},
      {
        quizResult: currentQuizScore,
        quizAnswers: quizAnswers,
        totalScore: userTotalScore,
      }
    );
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

export const getTotalScoreHandler = function (schema, request) {
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
    const totalScore = schema.users.findBy({ _id: userId }).attrs.totalScore;
    return new Response(200, {}, { totalScore: totalScore });
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
