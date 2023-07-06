const frisby = require("frisby");

const COLLECTIONU_UID = "18762667-aa094c6b-a6a3-4bb1-8e70-baffe2f8a7b3";
const BASE_URL = "https://api.getpostman.com/collections";


it("Documentation", async () => {
    return frisby.setup({
        request: {
            headers: {
                "x-api-key": "PMAK-649978d6388256002aa8a5d8-fd9daf3404dbfa44d687eebe2983f8efa4",
            },
        },
    })
        .get(`${BASE_URL}/${COLLECTIONU_UID}`)
        .expect("status", 200)
        .then((res) => {
            const collection = res.json.collection;
            const request = collection.item[0].item[0];

            expect(collection.info.name).toEqual("Day 20: Documentation");
            expect(request.request.description).not.toEqual("");
            expect(request.request.url.query).not.toEqual("");
            expect(request.request.header).not.toEqual("");
        })

});