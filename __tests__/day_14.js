const frisby = require("frisby");
const token = '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';

describe("Day 14", () => {
    it.skip("Get github repositories", async () => {
        const response = await frisby
            .fetch("https://api.github.com/user/repos", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .expect("status", 200);
        console.log(response.json.length);
    });
});