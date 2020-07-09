import React, { useState } from "react";
import "./App.css";
import { Button } from "./components/Button";
import { InputResult } from "./components/Input-result";
import { operationSum } from "./operationSum";
import { changeSimbol } from "./change-simbol";
import { cualculateHistoric } from "./calculate-historic";
import { saveCurrentToHistoric } from "./save-current-to-historic";
import { HistoricDiv } from "./components/HistoricDiv";
const params = [];
let clearInput = false;
let operator = "";
const historic = [];
const currentHistoric = [];

function App() {
  const [inputText, setInputText] = useState("");
  const [historicOp, setHistoricOp] = useState([]);
  function handleClickHistoric(event) {
    event.target.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[0].classList.toggle(
      "historic"
    );
  }

  function handleClick(event) {
    const data = event.target.value;
    if (data === "+/-") {
      setInputText(changeSimbol(inputText, params));
      return;
    }
    if (data === "C" || data === "CE") {
      if (data === "C") {
        console.log("fdsafaf");
        operator = "";
        params.splice(0);
        clearInput = false;
        currentHistoric.splice(0);
      }
      setInputText("");
      return;
    }
    if (clearInput === true) {
      if (!isNaN(parseInt(data))) {
        setInputText(data);
        clearInput = false;
        return;
      } else {
        operator = data;
      }
    }

    if (
      data === "+" ||
      data === "-" ||
      data === "/" ||
      data === "*" ||
      data === "="
    ) {
      console.log(params.length);
      if (params.length > 0) {
        const result = operationSum(params[0], Number(inputText), operator);
        currentHistoric.push(operator);
        currentHistoric.push(Number(inputText));

        params.splice(0);
        setInputText(result);
        params.push(result);
        clearInput = true;
        operator = data;
      } else {
        params.push(Number(inputText));
        console.log(inputText);
        clearInput = true;
        operator = data;
        currentHistoric.push(Number(inputText));
        // currentHistoric.push(operator);
      }
      if (data === "=") {
        operator = "";
        clearInput = true;
        currentHistoric.push(data);
        currentHistoric.push(Number(params[0]));
        params.splice(0);
        const current = cualculateHistoric(currentHistoric);
        saveCurrentToHistoric(current, setHistoricOp, historicOp);
        currentHistoric.splice(0);
        // setHistoricOp([...historicOp, historic]);
      }
      return;
    }
    setInputText(inputText + data);
    clearInput = false;
  }

  return (
    <div className="App">
      <div className="historic pb-3">
        <label>Últimas 5 operaciones</label>
        <HistoricDiv value={historicOp} />
      </div>
      <InputResult value={inputText} />
      <table>
        <tbody>
          <tr>
            <Button value="H" text="H" handleClick={handleClickHistoric} />
            <Button value="C" text="C" handleClick={handleClick} />
            <Button value="CE" text="CE" handleClick={handleClick} />
            <Button value="/" text="/" handleClick={handleClick} />
          </tr>
          <tr>
            <Button value="9" text="9" handleClick={handleClick} />
            <Button value="8" text="8" handleClick={handleClick} />
            <Button value="7" text="7" handleClick={handleClick} />
            <Button value="+" text="+" handleClick={handleClick} />
          </tr>
          <tr>
            <Button value="6" text="6" handleClick={handleClick} />
            <Button value="5" text="5" handleClick={handleClick} />
            <Button value="4" text="4" handleClick={handleClick} />
            <Button value="-" text="-" handleClick={handleClick} />
          </tr>
          <tr>
            <Button value="3" text="3" handleClick={handleClick} />
            <Button value="2" text="2" handleClick={handleClick} />
            <Button value="1" text="1" handleClick={handleClick} />
            <Button value="*" text="X" handleClick={handleClick} />
          </tr>
          <tr>
            <Button value="+/-" text="+/-" handleClick={handleClick} />
            <Button value="0" text="0" handleClick={handleClick} />
            <Button value="." text="." handleClick={handleClick} />
            <Button value="=" text="=" handleClick={handleClick} />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
