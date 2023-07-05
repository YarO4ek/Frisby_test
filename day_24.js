const URL = `https://worldtimeapi.org/api/ip`;
const frisby = require("frisby");
const moment = require("moment");

describe("day_24", () => {
    it("Moment in time", async () => {
        const result = await frisby.get(`${URL}`).expect("status", 200);
        const twoDays = moment(result.day_of_week).add(2, "days");
        const formattedTwoDays = moment(twoDays).format("dddd");

        expect(twoDays).not.toBeNull();
        expect(typeof formattedTwoDays).toBe("string");

        console.log(formattedTwoDays);
    });
});