import "./App.css";
import { useState } from "react";

function App() {
  let valid = "true";
  let valid2 = "";
  let select_text = "";

  function update() {
    var select = document.getElementById("calc");
    var text = select.options[select.selectedIndex].text;
    select_text = text;
    calcu();
  }

  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const fib = (num, count = 1, last = 0) => {
    if (count < num) {
      return fib(num, count + last, count);
    }
    if (count === num) {
      valid = "true";
      return true;
    }
    valid = "false";
    return false;
  };
  const prime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) {
        valid = "false";
        return false;
      }
    valid = "true";
    return num > 1;
  };

  function calcu() {
    if (select_text == "isPrime") {
      valid = prime(parseInt(value));
    }
    if (select_text == "isFibbonacci") {
      valid = fib(parseInt(value));
    }

    document.getElementById("tf").innerHTML = valid.toString();
  }

  return (
    <div className="App">
      <section class="container">
        <div class="item-a">
          <input
            className="input"
            type="number"
            placeholder="0"
            value={value}
            onChange={handleChange}
          />
        </div>
        <div class="item-b">
          <select name="calc" id="calc" onChange={update}>
            <option value="isPrime">isPrime</option>
            <option value="isFibbonacci">isFibbonacci</option>
          </select>
        </div>
        <div class="item-c" id="tf">
          {valid2}
        </div>
      </section>
    </div>
  );
}

export default App;
