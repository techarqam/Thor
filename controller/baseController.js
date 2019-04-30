async function create(data, Model) {
    let doc = await Model.insertMany(data);

    return doc;
}

async function update(filter, data, Model) {
    let doc = await Model.updateMany(filter, data);

    return doc;
}

async function retrive(filter, sortField, populate, Model) {
    let doc = await Model.find(filter).sort(sortField).populate(populate);

    return doc;
}

async function remove(filter, Model) {
    return Model.deleteMany(filter);
}

module.exports = {
    create: create,
    retrive: retrive,
    update, update,
    remove: remove
};