const {handleOnClick} = require("../../src/client/js/eventsHelper");

describe("validate handle on click function", () => {
    test("check if is handle on click defined", () => {
        expect(handleOnClick).toBeDefined();
    });
});
