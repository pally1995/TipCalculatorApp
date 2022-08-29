let billAmount = document.querySelector("#amountInput");
const percent = Array.from(document.getElementsByClassName("percent"));
const customPerc = document.querySelector("#customPercent");
const numberOfPeopleValue = document.querySelector(".numberOfPeopleValue");

const tipPerPerson = document.querySelector(".tipPerPerson");
const totalTip = document.querySelector(".totalTip");
const reset = document.querySelector(".reset");

let tipVal = 25;
let billVal;
let numberOfPeopleVal = 1;

tipPerPerson.innerHTML = "$00.00";
totalTip.innerHTML = "$00.00";

percent.forEach((button) => {
  button.addEventListener("click", () => {
    if (billVal != null && numberOfPeopleVal != null) {
      tipVal = button.innerHTML.replace("%", "");
      updateTotalTip();
      updateTipPerPerson();
    }
  });
});

percent.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});

function handleClick(event) {
  percent.forEach((btn) => {
    btn.classList.remove("active");
    if (event.target.innerHTML === btn.innerHTML) {
      btn.classList.add("active");
    }
  });
}

billAmount.addEventListener("input", () => {
  billVal = billAmount.value;
  updateTipPerPerson();
  updateTotalTip();
});

numberOfPeopleValue.addEventListener("input", () => {
  if (numberOfPeopleValue.value <= 1) {
    numberOfPeopleVal = 1;
  } else {
    numberOfPeopleVal = numberOfPeopleValue.value;
  }
  updateTipPerPerson();
  updateTotalTip();
});

customPerc.addEventListener("input", () => {
  tipVal = customPerc.value;
  percent.forEach((btn) => {
    btn.classList.remove("active");
  });
  if (customPerc.value !== 0) {
    updateTipPerPerson();
    updateTotalTip();
  }
  console.log(tipVal);
});

function updateTipPerPerson() {
  let tipEach = ((billVal / 100) * tipVal) / numberOfPeopleVal; 
  tipPerPerson.innerHTML = "$" + tipEach.toFixed(2)
  
}

function updateTotalTip() {
  let fullTip = (billVal / 100) * tipVal;
  totalTip.innerHTML = "$" + fullTip.toFixed(2);
  
}

reset.addEventListener('click', () => {
  location.reload(true)
})