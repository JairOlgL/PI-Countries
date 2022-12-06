const Router = require('express');
const countries = Router();
const {Country} = require('./../db.js')
const {Op} = require('sequelize')

countries.get('/', async(req, res) => {
    try {
        console.log(req.query)
        const countriesDB = req.query.name ? await Country.findAll({
            attributes: ['id', 'name', 'flag'],
            where: {
                name: {[Op.iLike]: `%${req.query.name}%`}
            }
        }) : await Country.findAll({
            attributes: ['name', 'flag']
        })
        if(!countriesDB.length) throw `No se ha encontrado un país con el nombre ${req.query.name}`
        else res.status(200).json(countriesDB)
    } catch (error) {
        res.status(404).json({error: error})
    }
})
countries.get('/:idCountry', async(req, res) => {
    try {
        const {idCountry} = req.params;
        const country = await Country.findOne({where: {id: idCountry}});
        if(country) res.status(200).json(country)
        else throw `No se ha encontrado ningún país con el ID ${idCountry}`
    } catch (error) {
        res.status(404).json({error: error})
    }
})

module.exports = countries;