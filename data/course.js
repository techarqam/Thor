const repeat = 10;
const faker = require('faker');

function get(coordinator) {

    let records = [];

    for (let i = 0; i < repeat; i++) {

        var courseData = {
            'courseId': faker.random.alphaNumeric(5),
            'name': faker.commerce.productName(),
            'coordinator': coordinator.slice(faker.random.number(0, 3), faker.random.number(3, 5)),
            'programType': faker.commerce.department(),
            'specialization': faker.lorem.word(5),
            'credits': faker.random.number(5, 10),
            'capacity': faker.random.number(5, 10),
            'season': faker.lorem.word(5),
            'goal': faker.random.number(300),
            'goalDate': faker.date.recent(),
            'startDate': faker.date.recent()
        }
        records.push(courseData);
    }
    return records;
}

module.exports = {
    get: get
};
