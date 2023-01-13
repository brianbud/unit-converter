const metersFeet = document.getElementById('meters-feet');
const litersGallons = document.getElementById('liters-gallons');
const kilosPounds = document.getElementById('kilos-pounds');
const inputEl = document.getElementById('input-el');
const button = document.getElementById('convert-btn');

button.addEventListener('click', setCalc);

function setCalc() {
  let input = inputEl.value;
  metersFeet.innerHTML = `
      ${input} meters = ${(input * 3.281).toFixed(2)} feet | 
      ${input} feet = ${(input * 0.3048).toFixed(2)} meters
    `;

  litersGallons.innerHTML = `
      ${input} liters = ${(input * 0.264172).toFixed(2)} gallons |
      ${input} gallons = ${(input * 3.78541).toFixed(2)} liters
    `;

  kilosPounds.innerHTML = `
      ${input} kilos = ${(input * 2.20462).toFixed(2)} pounds | 
      ${input} pounds = ${(input / 2.20462).toFixed(2)} kilos
    `;
}
