const userInput = document.querySelector("#user-input")
const userNum = document.querySelectorAll(".user-num")
const conversionResult = document.querySelectorAll(".conversion-result")
const toggleCheckbox = document.querySelector("#toggle-checkbox")
const sectionConversionEl = document.querySelector("#section-conversion-el")

const baseUnits = [
    {unit: "meterToFoot", baseNumber: 3.28084}, 
    {unit: "footToMeter", baseNumber: 0.3048}, 
    {unit: "literToGallon", baseNumber: 0.264172}, 
    {unit: "gallonToLiter", baseNumber: 3.78541}, 
    {unit: "kilogramToPound", baseNumber: 2.20462}, 
    {unit: "poundToKilogram", baseNumber: 0.453592} 
]
//the baseUnits and elements should be in order

userInput.addEventListener('keyup', event => {
    const inputValue = event.target.value
    userNum.forEach(spanEL => {
        spanEL.textContent = inputValue
    }) 
    
    conversionResult.forEach((spanEL, index) => {
        spanEL.textContent = (inputValue * baseUnits[index].baseNumber).toFixed(3)
    })

})

toggleCheckbox.addEventListener("change", () => {
    sectionConversionEl.classList.toggle("dark-mode")
})

