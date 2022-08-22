import React, { createContext, useState } from "react";

interface IContext {
    theme: string,
    toggleTheme: () => void
}
const ThemeContext = createContext<IContext>({
    theme: "light",
    toggleTheme: () => {},
});
 
function ThemeProvider({ children }: any) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
  

  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>{children}</ThemeContext.Provider>
  );
}

export { ThemeContext, ThemeProvider };
