const morseCode = (inputString, switchValue) => {

    const morseCodeAlphabet = [
        "A:.- ",
        "B:-... ",
        "C:-.-. ",
        "D:-.. ",
        "E:. ",
        "F:..-. ",
        "G:--. ",
        "H:.... ",
        "I:.. ",
        "J:.--- ",
        "K:-.- ",
        "L:.-.. ",
        "M:-- ",
        "N:-. ",
        "O:--- ",
        "P:.--. ",
        "Q:--.- ",
        "R:.-. ",
        "S:... ",
        "T:- ",
        "U:..- ",
        "V:...-",
        "W:.-- ",
        "X:-..- ",
        "Y:-.-- ",
        "Z:--.. ",
        "0:----- ",
        "1:.---- ",
        "2:..--- ",
        "3:...-- ",
        "4:....- ",
        "5:..... ",
        "6:-.... ",
        "7:--... ",
        "8:---.. ",
        "9:----. ",
        " :/ "
    ];
let newStringArray = [];
let morsecodeValueArray = "";
let stringChar = "";

    if (switchValue === "on") {
console.log("in switch on")
console.log(`inputstr=${inputString}`);
        inputString = inputString.toUpperCase();
console.log(`upper case inputstr=${inputString}`);
        newStringArray = inputString.split("");
console.table(`array=${newStringArray}`);
        translatedString = "";
        for (let str=0; str < newStringArray.length; str++) {
            stringChar = newStringArray[str];
 console.log(`index str=${str} value=${stringChar}`);
            morsecodeValueArray = "";
            for (let i=0; i < morseCodeAlphabet.length; i++) {
                if (morseCodeAlphabet[i].startsWith(stringChar)) {
                    morsecodeValueArray = morseCodeAlphabet[i].split(":");
console.log(`morseValueArray=${morsecodeValueArray}`);
                    morsecodeString = morsecodeString + morsecodeValueArray[1];
 console.log(`morse output str=${morsecodeString}`);
                };
            };
        };
        return translatedString.trim();
    } else if (switchValue === "off") {
console.log("in switch off");
console.log(`inputstr=${inputString}`);
        newStringArray = inputString.split(" ");
console.table(`array=${newStringArray}`);
console.log(`length=${newStringArray.length}`);
        translatedString = "";
        for (let str=0; str < newStringArray.length; str++) {
            stringChar = newStringArray[str];
console.log(`index str=${str} value=${stringChar}`);

            morsecodeValueArray = "";
            for (let i=0; i < morseCodeAlphabet.length; i++) {
                const searchPosition = morseCodeAlphabet[i].search(stringChar);
                if (searchPosition !== -1) {
console.log(`string position=${searchPosition}`);
                    morsecodeValueArray = morseCodeAlphabet[i].split(":");
console.log(`morseValueArray=${morsecodeValueArray}`);
                    translatedString = translatedString + morseCodeAlphabet[0];
console.log(`morse output str=${translatedString}`);
                }
            };
        };
        return translatedString.trim();
    };
};

let input2=".-. ..- .--. .- .-.. .. / .-.";
// console.log(morseCode(input2,"off"));
