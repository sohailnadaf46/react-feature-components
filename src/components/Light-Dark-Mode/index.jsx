import React from "react";
import useLocalStorage from "./useLocalStorage";
import "./theme.css"

//we have to create a custom hook and pass the theme in that from that hook it will fetch the localstorage whether it will take keya and default value and come revise the code again if confused  

const LightDark = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="light-dark-mode" data-theme={theme}>
      <div className="container">
        <p>Hello there!</p>
        <button onClick={handleToggleTheme}>Change Theme</button>
      </div>
    </div>
  );
};

export default LightDark;
