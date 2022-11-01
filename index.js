export const checkValidInput = (inputString) => {

    const isValid = /^[A-Za-z0-9 ]*$/.test(inputString);
    console.log(isValid);
    if (!isValid) {
        return isValid;
        throw new Error("Cannot have special characters in your input string");
    } else {
        return isValid;
    };
};

export const morseCode = (inputString) => {
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

    console.log(`inputstr=${inputString}`);
    inputString = inputString.toUpperCase();
    console.log(`upper case inputstr=${inputString}`);
    //     inputString = inputString.split(" ").join("");
    // console.log(`no spaces inputstr=${inputString}`);
    const newStringArray = inputString.split("");
    console.table(`array=${newStringArray}`);

    let morsecodeString = "";
    for (let str=0; str < newStringArray.length; str++) {
        const stringChar = newStringArray[str];
    console.log(`index str=${str} value=${stringChar}`);
        let morsecodeValueArray = "";
        for (let i=0; i < morseCodeAlphabet.length; i++) {
            if (morseCodeAlphabet[i].startsWith(stringChar)) {
                morsecodeValueArray = morseCodeAlphabet[i].split(":");
    console.log(`morseValueArray=${morsecodeValueArray}`);
                morsecodeString = morsecodeString + morsecodeValueArray[1];
    console.log(`morse output str=${morsecodeString}`);
            };
        };
    };
    return morsecodeString.trim();
}