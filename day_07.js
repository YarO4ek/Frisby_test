const frisby = require('frisby')
const apikey = 'DEMO_KEY'
const count = 10
const baseURL = 'https://api.nasa.gov/planetary'
jest.setTimeout(15000);

describe('Day_07', () => {
    it('Using warn, info and log console statments for debugging', function () {

        return frisby
            .get(`${baseURL}/apod?api_key=${apikey}&count=${count}`)
            .expect('status', 200)
            .expect('header', 'Content-Type', 'application/json')
            .then((result) => {
                let pics = result.json
                pics.forEach((pic) => {console.warn(pic.date), console.log(pic.title, pic.url)})
            })
    });
});