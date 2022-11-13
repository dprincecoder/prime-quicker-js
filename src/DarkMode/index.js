const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const toggleTheme = (e) => {
  const { checked } = e.target;
  if (checked) {
    setDark();
  } else {
    setLight();
  }
};

const storedTheme = localStorage.getItem("theme");
const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

const DarkMode = ({ children }) => {
  return (
    <div className="toggle-theme-container">
      <div className="toggle-theme-wrapper">
        <label htmlFor="checkbox" className="toggle-theme">
          <input
            type="checkbox"
            onChange={toggleTheme}
            defaultChecked={defaultDark}
            id="checkbox"
          />
          <div className="slider round"></div>
        </label>
      </div>
      {children}
    </div>
  );
};

export default DarkMode;
