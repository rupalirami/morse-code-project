export const divide = (numberOne, numberTwo) => {
    if (numberTwo === 0) {
        // return ("Cannot divide by 0");
        throw new Error("Cannot divide by 0");
    }

    if (typeof numberOne !== "number" || typeof numberTwo !== "number") {
        throw new Error("Both parameters must be numbers");
    }
    return (numberOne / numberTwo);
}
// const result = multiply(5, 7);
// console.log(result);