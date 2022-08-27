let billAmount = document.querySelector("#amountInput");
const percent = Array.from(document.getElementsByClassName("percent"));
const customPerc = document.querySelector("#customPercent").value;
const numberOfPeopleValue = document.querySelector(".numberOfPeopleValue");


const tipPerPerson = document.querySelector(".tipPerPerson");
const totalTip = document.querySelector(".totalTip");
const reset = document.querySelector(".reset");

let tipVal;
let billVal;
let numberOfPeopleVal;

tipPerPerson.innerHTML = "$00.00"
totalTip.innerHTML = "$00.00"

billAmount.addEventListener("input", () => {
  billVal = billAmount.value;
  if (billAmount.value <= 0) {
    tipPerPerson.innerHTML = "$00.00"
    totalTip.innerHTML = "$00.00"
  } else {
    updateTotalTip();
    updateTipPerPerson();
  }
});

numberOfPeopleValue.addEventListener("input", () => {
  numberOfPeopleVal = numberOfPeopleValue.value;
  if (numberOfPeopleVal.value <= 0) {
    tipPerPerson.innerHTML = "$00.00"
    totalTip.innerHTML = "$00.00"
  }else {
    updateTotalTip();
    updateTipPerPerson();
  }
});

percent.forEach((button) => {
  button.addEventListener("click", () => {
    if (billVal != null && numberOfPeopleVal != null) {
      tipVal = button.innerHTML.replace("%", "");
      updateTotalTip();
      updateTipPerPerson();
    }
  });
});

function updateTipPerPerson() {
  tipPerPerson.innerHTML = "$" + ((billVal / 100) * tipVal) / numberOfPeopleVal.toFixed;

function updateTotalTip() {
  totalTip.innerHTML =  "$" + (billVal / 100) * tipVal;
}
