// src/App.jsx
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BMICalculatorComponent from "./BMICalculatorComponent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BMICalculatorComponent />
    </>
  );
}

export default App;
