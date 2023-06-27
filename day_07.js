const frisby = require('frisby')
const api_key = 'DEMO_KEY'
const count = 10

describe('Day_07', () => {
    it('Using warn, info and log console statments for debugging', function () {

        return frisby.get(`https://api.nasa.gov/planetary/apod?api_key=${api_key}&count=${count}`)
            .expect('status', 200)
            .expect('header', 'Content-Type', 'application/json')
            .then((result) => {
                let pics = result.json
                pics.forEach((pic) => {
                    console.log(pic.title, pic.url), console.info(pic.media_type)
                })
            })
    })
});