const repeat = 100;
 
const faker = require('faker');

function get(forModel) {
    let records = [];
    for (let i = 0; i < repeat; i++) {
        var data = {
            'title': faker.lorem.words(5),
            'content': faker.lorem.sentence(20),
            'type': "info",
            'forModel': forModel,
            'date': faker.date.recent(10)
        }
        records.push(data);
    }
    return records;
}
module.exports = {
    get: get
};