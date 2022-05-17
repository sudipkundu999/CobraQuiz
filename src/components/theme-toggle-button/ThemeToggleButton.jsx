import { useTheme } from "../../contexts";
export const ThemeToggleButton = () => {
  const { toggleDarkMode } = useTheme();

  return (
    <button
      className="btn btn-floating dark-mode-toggle"
      onClick={() => toggleDarkMode()}
    >
      <i className="fas fa-adjust fa-3x"></i>
    </button>
  );
};
