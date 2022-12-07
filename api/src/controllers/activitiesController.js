const {Activity, Country} = require('./../db.js');

const createActivity = async({name, difficulty, duration, season, countries}) => {
    if(!name) throw 'Name property is required';
    if(!difficulty) throw 'Difficulty property is required';
    if(!duration) throw 'Duration property is required';
    if(!season) throw 'Season property is required';
    if(!countries) throw 'Countries property is required';
    var auxValidator = true;
    for(var x = 0; x<name.length; x++){
        if(!(Number(name[x]))) auxValidator *= false
    }
    if(auxValidator) throw 'Name property can\'t be a number'
    const auxName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    const [activity, created] = await Activity.findOrCreate({
        where: {
            name: auxName
        },
        defaults: { difficulty, duration, season }
    })
    countries.map(async (e) => {
        console.log(e)
        const country = await Country.findOne({
            where: { id: e }
        })
        await country.addActivity(activity);
    })
    return activity.id;
}

module.exports = {
    createActivity
}