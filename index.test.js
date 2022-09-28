import { divide } from "./index";
import{ it, expect } from "@jest/globals";

it("divides 10 and 2 to equal 5", () => {
    const result = divide(10, 2);
    expect(result).toBe(5);
});

it("divides 30 and -3 to equal -10", () => {
    const result = divide(30, -3);
    expect(result).toBe(-10);
});

it("divides -55 and -5 to equal 11", () => {
    const result = divide(-55, -5);
    expect(result).toBe(11);
});

// it("divides 125 and 7 to equal -17.86", () => {
//     const result = divide(125, 7);
//     expect(result).toBe(-17.86);
// });

it("divide throws an error if numbers aren't used" , () => {
    const error = new Error("Both parameters must be numbers")
    expect(() => divide("number one", 32)).toThrow(error);
});

it("divide throws an error if second number is 0" , () => {
    const error = new Error("Cannot divide by 0")
    expect(() => divide(32, 0)).toThrow(error);
});

// it("divides 5 and 0 to give error - Cannot divide by 0", () => {
//     const result = divide(5, 0);
//     expect(result).toBe("Cannot divide by 0");
// });
