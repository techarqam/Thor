var controller = require('./baseController');
var {
    campaign
} = require('../model');

async function create(data) {
    let doc = await controller.create(data, campaign);
    return doc;
}

async function retrive(filter, sort) {
    let doc = await controller.retrive(filter, sort,  "" , campaign);
    return doc;
}

async function update(filter, data) {
    let doc = await controller.update(filter, data, campaign);
    return doc;
}

async function remove(filter) {
    let doc = await controller.remove(filter, campaign);
    return doc;
}

module.exports = {
    create: create,
    retrive: retrive,
    update: update,
    remove: remove
};