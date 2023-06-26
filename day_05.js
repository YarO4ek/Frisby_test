const frisby = require("frisby");
describe('day_05', () => {
    const coindeskBaseUrl = "https://api.coindesk.com";
    const currency = ["btc", "usd"];

    it('Request with coindesk and get status 200', function () {
        return frisby.get(`${coindeskBaseUrl}/v1/bpi/currentprice/btc.json`)
            .expect('status', 200);
    });
    it('Request with coindesk and get status 200', function () {
        return frisby.get(`${coindeskBaseUrl}/v1/bpi/currentprice/${currency}.json`)
            .expect('status', 200)

    });
});
