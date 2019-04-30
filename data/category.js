
const strings = require('../config/strings');

function get(type, forModel) {
    let records = [];
    for (let i = 0; i < strings.categories.length; i++) {
        var data = {
            'order': i,
            'name': strings.categories[i],
            'forModel': forModel,
            'type': type
        }
        records.push(data);
    }
    return records;

}
module.exports = {
    get: get
};