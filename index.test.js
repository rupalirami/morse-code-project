import { morseCode, checkValidInput } from "./index.js";
import{ it, expect } from "@jest/globals";

it("translates an input string with or without spaces to equivalent morse code>", () => {
    const result = morseCode("All our coaches are awesome");
    expect(result).toBe(".- .-.. .-.. / --- ..- .-. / -.-. --- .- -.-. .... . ... / .- .-. . / .- .-- . ... --- -- .");
});

it("translates an input string with or without spaces to equivalent morse code>", () => {
    const result = morseCode("thisisavalidinput");
    expect(result).toBe("- .... .. ... .. ... .- ...- .- .-.. .. -.. .. -. .--. ..- -");
});

it("translates an input string which can take any alphanumeric characters to equivalent morse code", () => {
    const result = morseCode("rupali joined deutsche bank in 1996");
    expect(result).toBe(".-. ..- .--. .- .-.. .. / .--- --- .. -. . -.. / -.. . ..- - ... -.-. .... . / -... .- -. -.- / .. -. / .---- ----. ----. -....");
});

it("throws an error if input has special characters!" , () => {
    const error = new Error("Input string should only be alphanumeric and should not have special characters")
    expect(() => checkValidInput("input string contains special characters!")).toThrow(error);
});

it("throws an error if input has special characters!" , () => {
    const error = new Error("Input string should only be alphanumeric and should not have special characters")
    expect(() =>checkValidInput("SOS @@@!! my code's not working!!!")).toThrow(error);
});
