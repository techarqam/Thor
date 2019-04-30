var controller = require('./baseController');
var {
    category
} = require('../model');

async function create(data) {
    let doc = await controller.create(data, category);
    return doc;
}

async function retrive(filter, sort) {
    let doc = await controller.retrive(filter, sort,  "" , category);
    return doc;
}

async function update(filter, data) {
    let doc = await controller.update(filter, data, category);
    return doc;
}

async function remove(filter) {
    let doc = await controller.remove(filter, category);
    return doc;
}

module.exports = {
    create: create,
    retrive: retrive,
    update: update,
    remove: remove
};