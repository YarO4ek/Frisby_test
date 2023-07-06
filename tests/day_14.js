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