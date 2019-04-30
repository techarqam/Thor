var controller = require('./baseController');
var {
    activity
} = require('../model');

async function create(data) {
    let doc = await controller.create(data, activity);
    return doc;
}

async function retrive(filter, sort) {
    let doc = await controller.retrive(filter, sort,  "user" , activity);
    return doc;
}

async function update(filter, data) {
    let doc = await controller.update(filter, data, activity);
    return doc;
}

async function remove(filter) {
    let doc = await controller.remove(filter, activity);
    return doc;
}

module.exports = {
    create: create,
    retrive: retrive,
    update: update,
    remove: remove
};