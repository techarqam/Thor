 var stage = require('./stageController');
 var category = require('./categoryController');
 var contact = require('./contactController');
 var activity = require('./activityController');
 var campaign = require('./campaignController');
 var note = require('./noteController');
 var course = require('./courseController');
 var user = require('./userController');
 var lead = require('./leadController');
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