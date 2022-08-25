let billAmount = document.querySelector("#amountInput");
const percent = Array.from(document.getElementsByClassName("percent"));
const customPerc = document.querySelector("#customPercent").value;
const numberOfPeopleValue = document.querySelector(".numberOfPeopleValue");
const calc = document.querySelector(".calc");

const tipPerPerson = document.querySelector(".totalPerPerson");
const totalPerPerson = document.querySelector(".tipPerPerson");
const reset = document.querySelector(".reset");

let tipVal;
let billVal;
let numberOfPeopleVal;

billAmount.addEventListener("input", () => {
  billVal = billAmount.value;
  if (numberOfPeopleVal >= 0) {
    updateTotal();
    updateTipAmount();
  }
});

numberOfPeopleValue.addEventListener("click", () => {
  numberOfPeopleVal = numberOfPeopleValue.value;
  if (numberOfPeopleVal >= 0) {
    updateTotal();
    updateTipAmount();
  }
});
percent.forEach((button) => {
  button.addEventListener("click", () => {
    if (billVal != null && numberOfPeopleVal != null) {
      tipVal = button.innerHTML.replace("%", "");
      updateTipAmount();
    }
  });
});

function updateTotal() {
  totalPerPerson.innerHTML = (billVal / 100) * tipVal;
}

function updateTipAmount() {
  tipPerPerson.innerHTML =  ((billVal / 100) * tipVal) / numberOfPeopleVal;
}
