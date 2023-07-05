const frisby = require("frisby");
const Joi = frisby.Joi;

const BASE_URL = "https://postman-echo.com";
const params = new URLSearchParams;
const collectionUid = "649c3792b8e38d5db3a03dbf"

describe("Day 21", () => {
    it("Submit your solution", async () => {
        const response = await frisby
            .setup({
                request: {
                    headers: {
                        "x-api-key": "API_KEY_TEST"
                    },
                },
            })
            .get(`${BASE_URL}/get?${params}`)
            .expect("status", 200);
        expect(response.json.args.collectionUid.length).toEqual(24);
    });
});