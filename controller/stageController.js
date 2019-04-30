var controller = require('./baseController');
var {
    stage
} = require('../model');

async function create(data) {
    let doc = await controller.create(data, stage);
    return doc;
}

async function retrive(filter, sort) {
    let doc = await controller.retrive(filter, sort,  "" , stage);
    return doc;
}

async function update(filter, data) {
    let doc = await controller.update(filter, data, stage);
    return doc;
}

async function remove(filter) {
    let doc = await controller.remove(filter, stage);
    return doc;
}

module.exports = {
    create: create,
    retrive: retrive,
    update: update,
    remove: remove
};