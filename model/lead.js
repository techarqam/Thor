var db = require('../dataContext').dbInstance;

var schema = new db.Schema({
    leadId: String,
    score: Number,
    tags: [String],
    notes: [String],
    extra: Object,
    order: Number,
    date: { type: Date, default: Date.now },
    contact: { type: db.Schema.Types.ObjectId, ref: 'Contact' },
    courses: [{ type: db.Schema.Types.ObjectId, ref: 'Course' }],
    stage: { type: db.Schema.Types.ObjectId, ref: 'Stage' },
    activities: [{ type: db.Schema.Types.ObjectId, ref: 'Activity' }],
});

module.exports = db.model('Lead', schema);