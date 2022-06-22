import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastify.css";
import {
  AuthRoutes,
  Header,
  RequiresAuth,
  ThemeToggleButton,
} from "./components";
import {
  Homepage,
  Login,
  Signup,
  Page404,
  User,
  Quiz,
  CategoryPage,
} from "./pages";
import { useTheme } from "./contexts";

function App(): JSX.Element {
  const { theme } = useTheme();

  return (
    <div className={theme === "dark" ? "dark-mode-class" : ""}>
      <Header />
      <ToastContainer />
      <ThemeToggleButton />

      <div className="app">
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route element={<AuthRoutes />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route element={<RequiresAuth />}>
            <Route path="/user" element={<User />} />
          </Route>

          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/:category/:quizId" element={<Quiz />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
