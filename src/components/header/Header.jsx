import { Link } from "react-router-dom";
import { useAuth } from "../../contexts";
import "./header.css";

export const Header = () => {
  const { isUserLoggedIn, userName, logoutHandler } = useAuth();
  return (
    <header>
      <div className="navigation-container">
        <Link to="/">
          <h2>CobraQuiz</h2>
        </Link>
        <div className="nav-right">
          {isUserLoggedIn && (
            <button className="btn btn-secondary" onClick={logoutHandler}>
              Logout
            </button>
          )}
          <Link className="nav-links" to={isUserLoggedIn ? `/user` : `/login`}>
            <i className="fas fa-user fa-2x"></i>
            <span>{userName}</span>
          </Link>
        </div>
      </div>
    </header>
  );
};
