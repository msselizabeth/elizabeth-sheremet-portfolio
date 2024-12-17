import { useTheme } from "../../providers/ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      {theme === "dark" ? "to light" : "to dark"}
    </button>
  );
};

export default ThemeToggle;
