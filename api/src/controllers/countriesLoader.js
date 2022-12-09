const {Country} = require('../db.js');

const loader = async() => {
    await fetch('https://restcountries.com/v3/all')
    .then(data => data.json())
    .then(data => data.map(e => {
        Country.create({
            id: e.cca3,
            name: e.name.common,
            continent: e.region,
            capital: e.capital ? e.capital[0] : undefined,
            region: e.subregion || e.region,
            area: e.area,
            population: e.population,
            flag: e.flags[1] || e.flags[0]
        })
    }))
}

module.exports = loader;