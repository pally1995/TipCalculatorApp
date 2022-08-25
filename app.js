let billAmount = document.querySelector("#amountInput");
const percent = Array.from(document.getElementsByClassName("percent"));
const customPerc = document.querySelector("#customPercent").value;
const numberOfPeopleValue = document.querySelector(".numberOfPeopleValue");


const totalTip = document.querySelector(".totalTip");
const tipPerPerson = document.querySelector(".tipPerPerson");
const reset = document.querySelector(".reset");

let tipVal;
let billVal;
let numberOfPeopleVal;

billAmount.addEventListener("input", () => {
  billVal = billAmount.value;
  if (numberOfPeopleVal > 0) {
    updateTotalTip();
    updateTipPerPerson();
  }
});

numberOfPeopleValue.addEventListener("input", () => {
  numberOfPeopleVal = numberOfPeopleValue.value;
  if (numberOfPeopleVal > 0) {
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
  totalTip.innerHTML = ((billVal / 100) * tipVal) / numberOfPeopleVal;
}

function updateTotalTip() {
  tipPerPerson.innerHTML =  (billVal / 100) * tipVal;
}
