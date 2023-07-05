const frisby = require("frisby");
const Joi = frisby.Joi;
const URL = "https://postman-echo.com";

const fs = require("fs");
const path = require("path");

describe("day_23", () => {
    jest.setTimeout(10000);
    it("Geo Map file", async () => {
        const filePath = path.resolve('/Users/elenamangutova/Downloads', "geoMap.csv");
        const fileData = fs.readFileSync(filePath, "utf8");
        const table = fileData.split("\n");
        console.log(table);

        for (let i = 1; i < table.length; i++) {
            const [region, boba] = table[i].split(",");
            const response = await frisby.get(`${URL}/get?${region}=${boba}`);
        }
    });
});