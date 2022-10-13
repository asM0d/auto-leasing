// import { useState } from "react";
// function Input() {
//     const [pay, setPay] = useState("");
//     const changePay = (event) => {
//         setPay(event.target.value);
//     };
//     // @ts-ignore
//     for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
//         e.style.setProperty('--value', e.value);
//         e.style.setProperty('--min', e.min === '' ? '0' : e.min);
//         e.style.setProperty('--max', e.max === '' ? '100' : e.max);
//         e.addEventListener('input', () => e.style.setProperty('--value', e.value));
//     }
//     return (
//
//         <div className="container">
//         <h2 className='name'>Стоимость автомобиля</h2>
//             <div className='dop'>
//                 <input
//                     type="range"
//                     id="input"
//                     className="in"
//                     onChange={changePay}
//                     min={1000000}
//                     max={6000000}
//                     step={100000}
//                     value={pay}
//
//                 />
//
//                 <input
//                     type="number"
//                     id="outInput"
//                     className="out"
//                     value={pay}
//                     onChange={changePay}
//                 />
//             </div>
//
//     </div>
//
// );
// }
// export default Input;
