let billAmount = document.querySelector("#amountInput");
const percent = document.getElementsByClassName("percent");
const customPerc = document.querySelector("#customPercent").value;
const numberOfPeopleValue = document.querySelector(".numberOfPeopleValue");
const calc = document.querySelector(".calc");

const tipPerPerson = document.querySelector(".totalPerPerson");
const totalPerPerson = document.querySelector(".tipPerPerson");
const reset = document.querySelector(".reset");

calc.addEventListener('click', () => {
    Array.from(percent).forEach((el) =>
    el.addEventListener(
      "click",
      function () {
        let buttonText = el.innerHTML;
        let trimmedText = buttonText.replace("%", "");
        let percentageSum = (billAmount.value / 100) * trimmedText;
        let personDivide = percentageSum / numberOfPeopleValue.value;
        tipPerPerson.innerHTML = percentageSum;
        totalPerPerson.innerHTML = personDivide;
        console.log(personDivide);
      },
      false
    )
  );
  
  
})


