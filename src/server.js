import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
  verifyUser,
} from "./backend/controllers/AuthController";
import {
  getAllQuizCategoryHandler,
  getAllQuizNameHandler,
  getQuizQuestionsHandler,
  getTotalScoreHandler,
  postQuizResultHandler,
} from "./backend/controllers/QuizController";

import { quizzes } from "./backend/db/quizzes";
import { users } from "./backend/db/users";
import { categories } from "./backend/db/categories";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      quiz: Model,
      category: Model,
      user: Model,
      totalScore: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disabling console logs from Mirage
      server.logging = false;
      quizzes.forEach((item) => {
        server.create("quiz", item);
      });

      users.forEach((item) =>
        server.create("user", {
          ...item,
          totalScore: 0,
        })
      );

      categories.forEach((item) => server.create("category", { ...item }));
    },

    routes() {
      this.namespace = "api";

      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));
      this.post("/auth/verify", verifyUser.bind(this));

      // quiz routes (public)
      this.get("/quiz/category", getAllQuizCategoryHandler.bind(this));

      // quiz routes (private)
      this.get("/quiz/questions/:quizId", getQuizQuestionsHandler.bind(this));
      this.post("/quiz/results/:quizId", postQuizResultHandler.bind(this));

      // score route (private)
      this.get("/user/score", getTotalScoreHandler.bind(this));
    },
  });
}
