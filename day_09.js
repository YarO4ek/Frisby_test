const frisby = require("frisby")
describe("day_09", () => {
    it ("check status", function () {
        return frisby
            .post ("https://postman-echo.com/post", {
                name: "Dawn Ellis",
                email: "dawn.ellis@example.com",
                id: "334eecea-607d-4111-90ee-e57bea971654"
            })
            .expect("status", 200)
            .then((result) => {
                console.log(result.json);
            });
    });
});