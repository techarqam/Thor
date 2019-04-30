var express = require('express');
var router = express.Router();
var controller = require("../controller");

/* GET users listing. */
router.get('/:model', async function (req, res, next) {
    var { action, sort, id, ...filter } = req.query;
    if (id) {
        filter['_id'] = id;
    }
    if (action) {
        let records = await controller[req.params.model].runAction(action, filter, sort);
        res.send(records);
        return;
    }
    let records = await controller[req.params.model].retrive(filter, sort);
    res.send(records);
});


router.post('/:model', async function (req, res, next) {
    if (!req.query.filter) {
        next();
        return;
    }
    let data = req.body;
    let records = await controller[req.params.model].retrive(data);
    res.send(records);
});


router.post('/:model', async function (req, res, next) {
    if (!req.query.update) {
        next();
        return;
    }

    let body = req.body;
    let filter = body._id ? { _id: body._id } : {};
    let data = body;
    let records = await controller[req.params.model].update(filter, data);
    res.send(records);
});

router.post('/:model', async function (req, res, next) {
    res.send("not found");
});


router.put('/:model', async function (req, res, next) {
    let data = req.body;
    let records = await controller[req.params.model].create(data);
    res.send(records);
});

router.delete('/', async function (req, res, next) {
    let data = req.data;
    let records = await controller[req.params.model].remove(data);
    res.send(records);
});

module.exports = router;
