import { useContext } from "react";
import "./App.css";
import { Content } from "./Content";
import { ThemeContext } from "./ThemeContext";

function App() {
  const context = useContext(ThemeContext);

  return (
    <div style={{padding: 20}}>
      <button onClick={context.toggleTheme}>Toggle Button</button>
      <Content />
    </div>
  );
}

export default App;
