// import function
import { morseCode } from "./index.js";

// get DOM variables
const textInput = document.getElementsByTagName("input");
console.log(textInput);
const textInputValue = textInput.value;
console.log(textInputValue);
const translateButton = document.getElementById("translate-btn");
console.log(translateButton);
const translatorOutput = document.getElementsByClassName("translator__output");
console.log(translatorOutput);

//initialize variables

addButton.addEventListener("click",(event) => {
console.log(`in btn listener input=${textInputValue}`)
    const morsecodeOutput = morseCode(textInputValue);
console.log(`after func output=${morsecodeOutput}`);
    translatorOutput.innerHTML = morsecodeOutput;
});
