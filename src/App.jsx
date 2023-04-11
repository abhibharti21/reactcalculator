import React, { useState } from "react";
import { RiDeleteBack2Line } from "react-icons/all";
import "./App.css";

function App() {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };
  const clear = () => {
    setResult("");
  };
  const calculate = () => {
    setResult(eval(result).toString());
  };

  const clearLast = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input
        type="text"
        placeholder="Varify your calculation..."
        id="result"
        value={result}
      />
      <div className="box">
        <input type="button" value="9" onClick={clickHandler} />
        <input type="button" value="8" onClick={clickHandler} />
        <input type="button" value="7" onClick={clickHandler} />
        <input type="button" value="+" onClick={clickHandler} />
      </div>
      <div className="box">
        <input type="button" value="6" onClick={clickHandler} />
        <input type="button" value="5" onClick={clickHandler} />
        <input type="button" value="4" onClick={clickHandler} />
        <input type="button" value="-" onClick={clickHandler} />
      </div>
      <div className="box">
        <input type="button" value="3" onClick={clickHandler} />
        <input type="button" value="2" onClick={clickHandler} />
        <input type="button" value="1" onClick={clickHandler} />
        <input type="button" value="*" onClick={clickHandler} />
      </div>
      <div className="box">
        <input type="button" value="0" onClick={clickHandler} />
        <input type="button" value="." onClick={clickHandler} />
        <input type="button" value="/" onClick={clickHandler} />
        <input type="button" value="%" onClick={clickHandler} />
      </div>
      <div className="box1">
        <button onClick={clear}>Clear</button>
        <button onClick={calculate}>=</button>
        <button onClick={clearLast} className="backspace">
          <RiDeleteBack2Line />
        </button>
      </div>
    </div>
  );
}

export default App;
