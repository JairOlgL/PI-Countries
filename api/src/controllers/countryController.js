const {Country, Activity} = require('./../db.js');
const {Op} = require('sequelize');

const getCountries = async(name) => {
    console.log('Enter')
    const countriesDB = name ? await Country.findAll({
        attributes: ['id', 'name', 'region', 'flag'],
        where: {
            name: {[Op.iLike]: `%${name}%`}
        }
    }) : await Country.findAll({
        attributes: ['id', 'name', 'region', 'flag']
    })
    if(!countriesDB.length) throw `No se ha encontrado un país con el nombre ${name}`
    else return countriesDB;
}

const getCountryByID = async(idCountry) => {
    const country = await Country.findOne({
        where: {id: idCountry},
        include: Activity
    });
    if(country) return country;
    else throw `No se ha encontrado ningún país con el ID ${idCountry}`
}

module.exports = {
    getCountries,
    getCountryByID
}