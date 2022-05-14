import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastify.css";
import { AuthRoutes, Header, RequiresAuth } from "./components";
import { Homepage, Login, Signup, Page404, User, Quiz } from "./pages";

function App() {
  return (
    <div>
      <Header />
      <ToastContainer />

      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/" element={<Mock />} /> */}

          <Route element={<AuthRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route element={<RequiresAuth />}>
            <Route path="/user" element={<User />} />
          </Route>

          <Route path="/:quizId" element={<Quiz />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
