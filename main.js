// import function
import { morseCode, checkValidInput } from "./index.js";

// get DOM variables
const textInput = document.getElementById("#input-area");
// console.log(`textinput=${textInput}`);
// const textInputValue = textInput.value;
// const textInputValue = document.getElementById("input-area").value;
// console.log(`textinputvalue=${textInputValue}`);
const translateButton = document.querySelector("#translate-button");
console.log(translateButton);
const translatedOutput = document.querySelector("#output-area");
console.log(translatedOutput);

//initialize variables

translateButton.addEventListener("click",(event) => {

    const textInputValue = document.getElementById("input-area").value;
console.log(`in btn listener input=${textInputValue}`)
    event.preventDefault(); 
    // const isValidString = checkValidInput(textInputValue);
    const isValidString = true;
console.log(`isvalid=${isValidString}`);
    if (isValidString) {
        const morsecodeOutput = morseCode(textInputValue);
console.log(`after func output=${morsecodeOutput}`);
        translatedOutput.innerHTML = morsecodeOutput;
    }

});
