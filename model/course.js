var db = require('../dataContext').dbInstance;
var schema = new db.Schema({
    'courseId':String,
    'name': String,
    'programType': String,
    'specialization':String,
    'credits':String, 
    'capacity': Number, 
    'season':String,
    'goal':Number,
    'goalDate':Date,
    'startDate':Date,
    'coordinator':[{ type: db.Schema.Types.ObjectId, ref: 'User' }]
}); 
module.exports = db.model('Course', schema);