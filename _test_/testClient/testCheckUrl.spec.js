const {isValidURL} = require("../../src/client/js/checkURL");

describe("validate url function", () => {
    test("valid url 1", () => {

        const input = "http://www.validurl1.com"

        const output = true
        expect(isValidURL(input)).toEqual(output);
    });

    test("valid url 2", () => {

        const input = "https://www.validurl2.com"

        const output = true
        expect(isValidURL(input)).toEqual(output);
    });

    test("not valid url 1", () => {

        const input = "https://www.notvalidurl"

        const output = false
        expect(isValidURL(input)).toEqual(output);
    });
});
