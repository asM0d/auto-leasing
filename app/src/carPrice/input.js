import { useState } from "react";

function Input() {
  const [pay, setPay] = useState("");
  const [sell, setSell] = useState("");
  const [leasing, setLeasing] = useState("");
  const [money, setMoney] = useState("");

  const changeMoney = (event) => {
    setMoney(event.target.value);
  };

  const changeLeasing = (event) => {
    setLeasing(event.target.value);
  };

  const changePay = (event) => {
    setPay(event.target.value);
  };

  const changeSell = (event) => {
    setSell(event.target.value);
  };

  for (let e of document.querySelectorAll(
    'input[type="range"].slider-progress'
  )) {
    e.style.setProperty("--value", e.value);
    e.style.setProperty("--min", e.min === "" ? "0" : e.min);
    e.style.setProperty("--max", e.max === "" ? "100" : e.max);
    e.addEventListener("input", () => e.style.setProperty("--value", e.value));
  }
  return (
    <div className="container">
      <h1 className="top">
        Рассчитайте стоимость
        <br /> автомобиля в лизинг
      </h1>
      <div className="top"></div>
      <div className="carPrice">
        <h2 className="car">Стоимость автомобиля</h2>
        <input
          type="range"
          id="input"
          className="in slider-progress"
          onChange={changePay}
          min={1000000}
          max={6000000}
          step={100000}
          value={pay}
        />
        <span className="rub">₽</span>
        <div>
          <input
            type="number"
            id="outInput"
            className="out"
            value={pay}
            onChange={changePay}
          />
        </div>
      </div>
      <div className="cumContract">
        <h2 className="car">Первоначальный взнос</h2>
        <input
          type="range"
          id="input"
          className="in slider-progress"
          min={10}
          max={60}
          step={1}
          value={money}
          onChange={changeMoney}
        />
        <span className="rub1">
          <input
            type="number"
            className="pro"
            readonly
            value={money}
            onChange={changeMoney}
          />
        </span>
        <div>
          <input
            type="number"
            id="outInput"
            className="out"
            value={sell}
            onChange={changeSell}
          />
        </div>
      </div>
      <div className="initialCost">
        <h2 className="car">Срок лизинга</h2>
        <input
          type="range"
          id="input"
          className="in slider-progress"
          onChange={changeLeasing}
          min={10}
          max={60}
          step={1}
          value={leasing}
        />
        <span className="mes">мес.</span>
        <div>
          <input
            type="number"
            id="outInput"
            className="out"
            value={leasing}
            onChange={changeLeasing}
          />
        </div>
      </div>
      <div className="leaseTerm">
        <h2 className="car">Сумма договора лизинга</h2>
        <input
          type="number"
          className="out1"
          value={pay}
          onChange={changePay}
        />
      </div>
      <div className="monthPay">
        <h2 className="car">Ежемесячный платеж</h2>
        <input
          type="number"
          className="out1"
          value={pay}
          onChange={changePay}
        />
      </div>
      <div className="button">
        <button className="but"> оставить заявку</button>
      </div>
    </div>

    // {/* /* <div className='main'>
    // //     <div className='subMain'>
    // //         <h1 className="top">Рассчитайте стоимость<br/> автомобиля в лизинг</h1>
    // //     </div>
    // //     <div className="container">
    // //         <h2 className='car'>Стоимость автомобиля</h2>
    // //         <div className='dop'>
    // //             <input
    // //                 type="range"
    // //                 id="input"
    // //                 className="in slider-progress"
    // //                 onChange={changePay}
    // //                 min={1000000}
    // //                 max={6000000}
    // //                 step={100000}
    // //                 value={pay}
    // //             />

    // //             <div>
    // //                 <input
    // //                     type="number"
    // //                     id="outInput"
    // //                     className="out"
    // //                     value={pay}
    // //                     onChange={changePay}
    // //                     placeholder='                                                ₽'
    // //                     // placeholder='1000000                                  ₽'
    // //                 />
    // //             </div>
    // //         </div>
    // //     </div>
    // // </div>/* */}
  );
}
export default Input;
