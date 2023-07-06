const URL = "https://google.com";
const frisby = require("frisby");

jest.setTimeout(10000);

describe("Day 28", () => {
    it('Checks the response time', async function () {
        const response = await frisby
            .get(`${URL}`)
            .expect('status', 200)
        // console.log(response)
        const responseTime = response._responseTimeMs
        console.log(`Response time is: ${responseTime}`)
        expect(response._responseTimeMs).toBeLessThan(10000)
    });

    it("Lighthouse", async function () {
        const result = await frisby.get(`https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${URL}`)
            .expect('status', 200)
        var score = result.json.lighthouseResult.categories.performance.score * 100
        expect(score >= 90)
    });
});