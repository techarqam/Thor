var controller = require('./baseController');
var {
    user
} = require('../model');

async function create(data) {
    let doc = await controller.create(data, user);
    return doc;
}

async function retrive(filter, sort) {
    let doc = await controller.retrive(filter, sort, "contact" , user);
    return doc;
}

async function update(filter, data) {
    let doc = await controller.update(filter, data, user);
    return doc;
}

async function remove(filter) {
    let doc = await controller.remove(filter, user);
    return doc;
}

module.exports = {
    create: create,
    retrive: retrive,
    update: update,
    remove: remove
};