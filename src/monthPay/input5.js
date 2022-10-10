import { useState } from "react";

function Input5() {
  const [pay5, setPay] = useState("");
  const changePay = (event) => {
    setPay(event.target.value);
  };
  for (let b of document.querySelectorAll('input[type="range"].range-slider-progress5')) {
    b.style.setProperty('--value', b.value);
    b.style.setProperty('--min', b.min === '' ? '0' : b.min);
    b.style.setProperty('--max', b.max === '' ? '100' : b.max);
    b.addEventListener('input', () => b.style.setProperty('--value', b.value));
  }
  return (
    <div className="container5 ">
      <h2>Стоимость автомобиля</h2>

      <input
        type="number"
        id="outInput5"
        className="range5"
        value={pay5}
        onChange={changePay}
      />

      <input
        type="range"
        id="input5"
        className="range5"
        onChange={changePay}
        min={1000000}
        max={6000000}
        step={100000}
        value={pay5}
      />
      
    </div>
    
  );
}
export default Input5;
