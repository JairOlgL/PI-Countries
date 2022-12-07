const Router = require('express');
const countries = Router();
const {getCountries, getCountryByID} = require('./../controllers/countryController.js');

countries.get('/', async(req, res) => {
    try {
        console.log(req.query)
        res.status(200).json(await getCountries(req.query.name));
    } catch (error) {
        res.status(404).json({error: error});
    }
})
countries.get('/:idCountry', async(req, res) => {
    try {
        res.status(200).json(await getCountryByID(req.params.idCountry))
    } catch (error) {
        res.status(404).json({error: error})
    }
})

module.exports = countries;