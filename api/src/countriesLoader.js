const {Country} = require('./db.js');

const loader = async() => {
    const countries = [];
    await fetch('https://restcountries.com/v3/all')
    .then(data => data.json())
    .then(data => data.map(e => {
        countries.push({
            id: e.cca3,
            name: e.name.common,
            continent: e.region,
            capital: e.capital ? e.capital[0] : undefined,
            subregion: e.subregion || e.region,
            area: e.area,
            population: e.population,
            flag: e.flags[1] || e.flags[0]
        })
    }))
    countries.map(e => {
        Country.create(e);
    })
}

module.exports = loader;