const frisby = require('frisby');
const collectionID = '649c3792b8e38d5db3a03dbf'

describe('day_21', () => {
    it('Checks the CollectionID', async function () {
        const result = await frisby
            .get(`https://postman-echo.com/get?collectionUid=${collectionID}`)
            .expect('status', 200)
            .expect('json', 'args', { collectionUid: collectionID })
        console.log(`Collection ID is: ${result._json.args.collectionUid}`)
    })
})