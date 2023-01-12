/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl = document.getElementById('convert-btn');
const feetEl = document.getElementById('feet');
const inputEl = document.getElementById('input-el');
let inputNumEl = document.getElementsByClassName('input-num');

convertEl.addEventListener('click', convert);

function convert() {
  let input = Number(inputEl.value);

  for (let i = 0; i <= inputNumEl.length; i++) {
    inputNumEl[i].textContent = input;
    convertMeterToFeet(input);
  }
}

function convertMeterToFeet(input) {
  let feet = input * 3.281;
  feetEl.textContent = feet;
}
