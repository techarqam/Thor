const strings = require('../config/strings');

function get(type, forModel) {
    let records = [];
    for (let i = 0; i < strings.stages.length; i++) {
        var stageData = {
            'order': i,
            'name': strings.stages[i],
            'type': type,
            'forModel': forModel
        }
        records.push(stageData);
    }
    return records;
}

module.exports = {
    get: get
};