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