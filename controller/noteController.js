var controller = require('./baseController');
var {
    note
} = require('../model');

async function create(data) {
    let doc = await controller.create(data, note);
    return doc;
}

async function retrive(filter, sort) {
    let doc = await controller.retrive(filter, sort,  "" , note);
    return doc;
}

async function update(filter, data) {
    let doc = await controller.update(filter, data, note);
    return doc;
}

async function remove(filter) {
    let doc = await controller.remove(filter, note);
    return doc;
}

module.exports = {
    create: create,
    retrive: retrive,
    update: update,
    remove: remove
};