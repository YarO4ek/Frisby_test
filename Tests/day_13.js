const frisby = require('frisby');
const Joi = frisby.Joi;


describe("day_13", () => {
    it("Planets", async () => {
        const result = await frisby
            .get("https://swapi.dev/api/planets/")
            .expect("status", 200)
            .expect("jsonTypes", "count", Joi.number())
            .expect("bodyContains", "Tatooine");
        console.log(result.json);
    });

    it("Species", async () => {
        const response = await frisby
            .get("https://swapi.dev/api/species/")
            .expect("status", 200)
            .expect("bodyContains", "Ewokese");
    });
})