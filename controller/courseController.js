var controller = require('./baseController');
var {
    course
} = require('../model');

async function create(data) {
    let doc = await controller.create(data, course);
    return doc;
}

async function retrive(filter, sort) {
    let doc = await controller.retrive(filter, sort, {
        path: 'coordinator',
        select: 'contact',
        populate: {
            path: 'contact',
            select: ['firstName', 'lastName', 'mobile']
        }
    }, course);
    return doc;
}

async function update(filter, data) {
    let doc = await controller.update(filter, data, course);
    return doc;
}

async function remove(filter) {
    let doc = await controller.remove(filter, course);
    return doc;
}

module.exports = {
    create: create,
    retrive: retrive,
    update: update,
    remove: remove
};