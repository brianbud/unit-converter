/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl = document.getElementById('convert-btn');
const inputEl = document.getElementById('input-el');
let inputNumEl = document.getElementsByClassName('input-num');
console.log(inputNumEl.length);

convertEl.addEventListener('click', convert);

function convert() {
  for (let i = 0; i <= inputNumEl.length; i++) {
    inputNumEl[i].textContent = inputEl.value;
  }
}
