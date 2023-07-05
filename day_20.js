const frisby = require("frisby");
const Joi = frisby.Joi;

const BASE_URL = "https://api.getpostman.com/collections/18762667-aa094c6b-a6a3-4bb1-8e70-baffe2f8a7b3";

describe("Day 20", () => {
    it("Submit", async () => {
        const response = await frisby
            .setup({
                request: {
                    headers: {
                        "x-api-key": "API_KEY_TEST"
                    },
                },
            })
            .get(`${BASE_URL}`)
            .expect("status", 200);
        const collection = response.json.collection;
        const firstRequest = collection.item[0].item[0];

        expect(collection.info.name).toEqual("Day 20: Documentation");
        expect(firstRequest.request.description).not.toBeNull();
        expect(firstRequest.request.url.query).not.toBeNull();
        expect(firstRequest.request.header).not.toBeNull();
    });
});