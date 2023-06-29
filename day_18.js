const { API_KEY_TEST } = "PMAK-649978d6388256002aa8a5d8-fd9daf3404dbfa44d687eebe2983f8efa4";
const API_ID = "9a9be353-81ad-4627-997b-04cdd4e75466";
const URL = "https://api.getpostman.com/apis";

const frisby = require("frisby");

describe("day_18", () => {
    it("Submit API", async () => {
        const result = await frisby
            .setup({
                request: {
                    headers: {
                        "x-api-key": API_KEY_TEST,
                    },
                },
            })
            .get(`${URL}/${API_ID}`)
            .expect("status", 200);

        expect(result.json.api.name).toEqual("Cosmos");
    });
});