const repeat = 2; 
const faker = require('faker');
const mail = [
    'Hi {contact.name}, Hope you are fine, i am writing you to known about you interset in {course.name}.' +
    'please let us known time to contact you, Thanks {course.coordinator} ',
    'Hi buddy, how r you, call me at {course.coordinator}'
]

function get(type, forModel) {

    let records = [];
    for (let i = 0; i < repeat; i++) {
        var data = {
            'campaignId': faker.random.alphaNumeric(10),
            'name': faker.random.word(8),
            'forModel': forModel,
            'content': mail[i],
            'type': type
        }
        records.push(data);
    }


    return  records;
}
module.exports = {
    get: get
};