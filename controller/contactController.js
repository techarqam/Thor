var controller = require('./baseController');
var {
    contact
} = require('../model');

async function create(data) {
    let doc = await controller.create(data, contact);
    return doc;
}

async function retrive(filter, sort) {
    let doc = await controller.retrive(filter, sort,  "" , contact);
    return doc;
}

async function update(filter, data) {
    let doc = await controller.update(filter, data, contact);
    return doc;
}

async function remove(filter) {
    let doc = await controller.remove(filter, contact);
    return doc;
}

module.exports = {
    create: create,
    retrive: retrive,
    update: update,
    remove: remove
};