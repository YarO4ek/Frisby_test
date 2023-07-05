

const frisby = require("frisby");

describe("Day 25", () => {
    it ("get random color" () => {
        module.exports = {};

        function getRandomColor() {
            return Math.random().toString(16).slice(2, 8).toUpperCase();
        };
    });
    const color = getRandomColor();
    let currentColor;

    it("get color", async () => {
        const response = await frisby.get(
            `https://www.thecolorapi.com/id?hex=${color}`
        );

        const body = response.json;
        currentColor = {
            hex: body.hex.clean,
            rgb: body.rgb.value,
            name: body.name.value,
        };

        expect(response.status).toBe(200);
        expect(currentColor.hex).toEqual(color);
    });
});