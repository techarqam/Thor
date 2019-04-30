var db = require('../dataContext').dbInstance;
var schema = new db.Schema({
    'campaignId': String,
    'name': String,
    'forModel': String,
    'content': Object,
    'type': String
});

module.exports = db.model('Campaign', schema);