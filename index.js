export const checkValidInput = (inputString) => {
// const checkValidInput = (inputString) => {
    // not checking for errors right now
    // return error message
};
export const morseCode = (inputString) => {
// const morseCode = (inputString) => {

    const morseCodeAlphabet = [
        "A:.-",
        "B:-...",
        "C:-.-.",
        "D:-..",
        "E:.",
        "F:..-.",
        "G:--.",
        "H:....",
        "I:..",
        "J:.---",
        "K:-.-",
        "L:.-..",
        "M:--",
        "N:-.",
        "O:---",
        "P:.--.",
        "Q:--.-",
        "R:.-.",
        "S:...",
        "T:-",
        "U:..-",
        "W:.--",
        "X:-..-",
        "Y:-.--",
        "Z:--..",
        "0:-----",
        "1:.----",
        "2:..---",
        "3:...--",
        "4:....-",
        "5:.....",
        "6:-....",
        "7:--...",
        "8:---..",
        "9:----."
    ];

console.log(`inputstr=${inputString}`);
    inputString = inputString.toUpperCase();
console.log(`upper case inputstr=${inputString}`);
    inputString = inputString.split(" ").join("");
console.log(`no spaces inputstr=${inputString}`);
    const newStringArray = inputString.split("");
console.table(newStringArray);

    let morsecodeString = "";
    for (let str=0; str < newStringArray.length; str++) {
        const stringChar = newStringArray[str];
console.log(`index str=${str} value=${stringChar}`);
        let morsecodeValueArray = "";
        for (let i=0; i < morseCodeAlphabet.length; i++) {
            if (morseCodeAlphabet[i].startsWith(stringChar)) {
                morsecodeValueArray = morseCodeAlphabet[i].split(":");
console.log(`morseValueArray=${morsecodeValueArray}`);
                morsecodeString = morsecodeString + morsecodeValueArray[1] + " ";
console.log(`morse output str=${morsecodeString}`);
            };
        };
    };
    return morsecodeString;
};

// const result = morseCode("Rupali R");
// console.log(result);
// console.log(".-. ..- .--. .- .-.. .. .-.");