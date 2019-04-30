var express = require('express');
var router = express.Router();
var controller = require('../controller');
var data = require('../data');
var db = require('../dataContext').dbInstance;
var constant = require('../config/constant')

router.get('/install', async function (req, res, next) {
    // stage  
    await db.connection.db.dropDatabase(constant.instanceId);

    let stages = await controller.stage.create(data.stage.get('nurturing', 'lead'));
    let categories = await controller.category.create(data.category.get('nurturing', 'lead'));
    let contacts = await controller.contact.create(data.contact.get());
    let users = await controller.user.create(data.user.get(contacts));
    let courses = await controller.course.create(data.course.get(users));
    let notes = await controller.note.create(data.note.get("lead"));
    let activities = await controller.activity.create(data.activity.get(users, "lead"));
    let campaign = await controller.campaign.create(data.campaign.get('nurturing', 'lead'));
    let leads = await controller.lead.create(data.lead.get(contacts, courses, stages, activities));

    res.send(leads);
});

module.exports = router;
