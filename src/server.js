import { Server, Model, RestSerializer } from "miragejs";
import {
  loginHandler,
  signupHandler,
  verifyUser,
} from "./backend/controllers/AuthController";
import {
  getAllQuizNameHandler,
  getSingleQuizQuestionsHandler,
  postQuizResultHandler,
} from "./backend/controllers/QuizController";

import { quiz } from "./backend/db/quiz";
import { users } from "./backend/db/users";

export function makeServer({ environment = "development" } = {}) {
  return new Server({
    serializers: {
      application: RestSerializer,
    },
    environment,
    models: {
      quiz: Model,
      user: Model,
      totalScore: Model,
    },

    // Runs on the start of the server
    seeds(server) {
      // disabling console logs from Mirage
      server.logging = false;
      quiz.forEach((item) => {
        server.create("quiz", item);
        // console.log(item);
      });

      users.forEach((item) =>
        server.create("user", {
          ...item,
          totalScore: 0,
        })
      );
    },

    routes() {
      this.namespace = "api";

      // auth routes (public)
      this.post("/auth/signup", signupHandler.bind(this));
      this.post("/auth/login", loginHandler.bind(this));
      this.post("/auth/verify", verifyUser.bind(this));

      // quiz routes (public)
      this.get("/quiz", getAllQuizNameHandler.bind(this));
      this.get("/quiz/:quizId", getSingleQuizQuestionsHandler.bind(this));

      // quiz routes (private)
      this.post("/quiz/result", postQuizResultHandler.bind(this));
    },
  });
}
