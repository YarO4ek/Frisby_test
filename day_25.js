const frisby = require('frisby');
const Joi = frisby.Joi
hexColor = '989494a'

describe('day_25', () => {
    it('get color', async () => {

        const result = await frisby
            .get(`https://www.thecolorapi.com/id?hex=${hexColor}&format=json`)
            .expect('status', 200)
        const body = await result.json;
        const { hex, rgb, name } = body; //destructuring
        const fullColor = JSON.stringify({
            hex: hex.value,
            rgb: rgb.value,
            name: name.value
        });
        console.log(fullColor);
        const { post } = frisby;
        post('https://postman-echo.com/post', { 'payload': fullColor })
            .expect('status', 200)
            .expect("json", "data", { payload: fullColor })

    })
})
