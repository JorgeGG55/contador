import React, { useState } from "react";
import ShowCount from "./components/ShowCount";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <ShowCount clicks={count} />
      <button className="restarButton" onClick={handleDecrement}>
        Restar
      </button>
      <button className="sumarButton" onClick={handleIncrement}>
        Sumar
      </button>
    </div>
  );
};

export default App;
