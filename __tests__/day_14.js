const frisby = require("frisby");


describe("Day 14", () => {
    it("Get github repositories", async () => {
        const response = await frisby
            .fetch("https://api.github.com/user/repos", {
                headers: {
                    Authorization: "Bearer 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" ,
                },
            })
            .expect("status", 200);
        console.log(response.json.length);
    });
});