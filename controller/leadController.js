const controller = require('./baseController');
const contactController = require('./contactController');
const stageController = require('./stageController');
const { lead } = require('../model');

async function create(data) {

    if (data.contact) {
        const { contact: contactData, ...leadData } = data;
        let contactRecord = await contactController.create([contactData]);
        leadData.contact = contactRecord[0]
        let doc = await controller.create(leadData, lead);
        return doc;
    }
    let doc = await controller.create(data, lead);
    return doc;
}

async function retrive(filter, sort) {
    let doc = await controller.retrive(filter, sort, ['contact', 'stage', 'category', {
        path: 'courses',
        select: 'coordinator',
        populate: {
            path: 'coordinator',
            populate: {
                path: 'contact',
                select: ['firstName', 'lastName', 'mobile']
            }
        }
    }], lead);
    return doc;
}

async function runAction(action, filter, sort) {
    switch (action) {
        case 'getLeadsAggregateCourse':
            return getLeadsAggregateCourse(filter, sort);

        default:
            return;
    }
}

// to do to convert to querry
async function getLeadsAggregateCourse(filter, sort) {
    let result = {};
    let leadData = await lead.aggregate([
        { $unwind: "$courses" },
        {
            $group: {
                _id: '$courses',
                score: { $addToSet: '$score' },
                count: { $sum: 1 }
            }
        }
    ]);

    result = leadData;
    return Promise.resolve(result);
}

async function update(filter, data) {
    if (data.contact) {
        const { contact: contactData, ...leadData } = data;
        await contactController.update({ _id: contactData._id }, contactData);
        leadData.contact = contactData._id;
        let doc = await controller.update(filter, leadData, lead);
        return doc;
    }
    let doc = await controller.update(filter, data, lead);
    return doc;
}

async function remove(filter) {
    let doc = await controller.remove(filter, lead);
    return doc;
}

module.exports = {
    create: create,
    retrive: retrive,
    update: update,
    remove: remove,
    runAction: runAction
};