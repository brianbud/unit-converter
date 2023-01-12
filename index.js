/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl = document.getElementById('convert-btn');
const feetEl = document.getElementById('feet');
const meteresEl = document.getElementById('meters');
const gallonsEl = document.getElementById('gallons');
const litersEl = document.getElementById('liters');
const poundsEl = document.getElementById('pounds');
const kilosEl = document.getElementById('kilos');
const inputEl = document.getElementById('input-el');
let inputNumEl = document.getElementsByClassName('input-num');

convertEl.addEventListener('click', convert);

function convert() {
  let input = Number(inputEl.value);

  for (let i = 0; i <= inputNumEl.length; i++) {
    inputNumEl[i].textContent = input;
    convertMeterToFeet(input);
    convertFeetToMeter(input);
    convertLitersToGallons(input);
    convertGallonsToLiters(input);
    convertKilosToPounds(input);
    convertPoundsToKilos(input);
  }
}

function convertMeterToFeet(input) {
  let feet = input * 3.281;
  feetEl.textContent = feet;
}

function convertFeetToMeter(input) {
  let meter = input * 0.3048;
  meteresEl.textContent = meter;
}

function convertLitersToGallons(input) {
  let gallons = input * 0.264172;
  gallonsEl.textContent = gallons;
}

function convertGallonsToLiters(input) {
  let liters = input * 3.78541;
  litersEl.textContent = liters;
}

function convertKilosToPounds(input) {
  let pounds = input * 2.20462;
  poundsEl.textContent = pounds;
}
function convertPoundsToKilos(input) {
  let kilos = input / 2.20462;
  kilosEl.textContent = kilos;
}
