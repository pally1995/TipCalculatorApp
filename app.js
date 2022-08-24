const billAmount = document.querySelector("input[type="number"]");
const 5perc = document.querySelector(".5 percent");
const 10perc = document.querySelector(".10 percent");
const 15perc = document.querySelector(".15 percent");
const 25perc = document.querySelector(".25 percent");
const 50perc = document.querySelector(".50 percent");
const customPerc = document.querySelector("#customPercent");
const numberOfPeopleValue = document.querySelector(".numberOfPeopleValue");
 
const tipPerPerson = document.querySelector(".tipPerPerson");
const totalPerPerson = document.querySelector(".totalPerPerson");
const reset = document.querySelector(".reset");
 
5perc.addEventListener () => {
                let 5percTip = (billAmount.value / 100) * 5
                console.log(5percTip)
}
 
10perc.addEventListener () => {
                let 10percTip = (billAmount.value / 100) * 10
                console.log(10percTip)
}
 
15perc.addEventListener () => {
                let 15percTip = (billAmount.value / 100) * 15
                console.log(15percTip)
}
 
25perc.addEventListener () => {
                let 25percTip = (billAmount.value / 100) * 25
                console.log(25percTip)
}
 
50perc.addEventListener () => {
                let 50percTip = (billAmount.value / 100) * 50
                console.log(50percTip)
}
 
let customPercentTip = (billAmount.value / 100) * customPerc.value
console.log(customPercTip)
