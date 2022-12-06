const Router = require('express');
const countries = Router();
const {Country} = require('./../db.js')
const {Op} = require('sequelize')

countries.get('/', async(req, res) => {
    try {
        console.log(req.query)
        const countriesDB = req.query.name ? await Country.findAll({
            attributes: ['name', 'flag'],
            where: {
                name: {[Op.iLike]: `%${req.query.name}%`}
            }
        }) : await Country.findAll({
            attributes: ['name', 'flag']
        })
        res.status(200).json(countriesDB)
    } catch (error) {
        res.status(404).json({error: error})
    }
})

module.exports = countries;