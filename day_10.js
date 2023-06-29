const frisby = require('frisby');
const Joi = frisby.Joi;


describe("Day 10", () => {
    it('Call the mock', function () {
        return frisby.get('https://17cb401d-6a90-41e3-97f9-afc4cfde8854.mock.pstmn.io')
            .expect('status', 200)
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')
            .expect('json', 'mockcall', {'message': 'mock call'})
            .then((result) => {
                console.info(result.json)
            })
    })

    it('Call the mock with params', function () {
        let goodbye = true
        return frisby.get(`https://17cb401d-6a90-41e3-97f9-afc4cfde8854.mock.pstmn.io/mockcall`)
            .expect('status', 200)
            .expect('header', 'Content-Type', 'application/json; charset=utf-8')
            .expect('json', 'mockcall', {'message': 'mock call'})
            .then((result) => {
                console.info(result.json)
            })
    })
})