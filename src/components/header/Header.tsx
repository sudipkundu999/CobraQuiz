import { Link, useNavigate } from "react-router-dom";
import { useAuth, useQuiz } from "../../contexts";
import Select from "react-select";
import "./header.css";

export const Header = () => {
  const { isUserLoggedIn, userName, logoutHandler } = useAuth();
  const navigate = useNavigate();
  const { quizNamesFromDB } = useQuiz();
  const searchOptions = quizNamesFromDB.map((item) => ({
    ...item,
    label: item.name,
  }));

  return (
    <header>
      <div className="navigation-container">
        <Link to="/">
          <h2>CobraQuiz</h2>
        </Link>
        <div className="nav-search search-wrapper">
          <Select
            options={searchOptions}
            isClearable={true}
            placeholder="Search"
            onChange={(opt) =>
              opt &&
              navigate(`/${opt?.category}/${opt?._id}`, { replace: true })
            }
          />
        </div>

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
