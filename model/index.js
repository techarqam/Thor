const stage = require('./stage');
const category = require('./category');
const contact =  require('./contact');
const activity = require('./activity');
const campaign = require('./campaign');
const note = require('./note');
const course = require('./course');
const user =  require('./user');
const lead = require('./lead');

module.exports = {
    course: course,
    stage: stage,
    category: category,
    activity: activity,
    contact: contact,
    campaign: campaign,
    note: note,
    user: user,
    lead: lead
}