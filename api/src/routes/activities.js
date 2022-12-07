const Router = require('express');
const activities = Router();
const {createActivity} = require('./../controllers/activitiesController.js')

activities.post('/', async(req, res) => {
    try {
        res.status(201).json(await createActivity(req.body));
    } catch (error) {
        res.status(404).json({error: error})
    }
})

module.exports = activities;