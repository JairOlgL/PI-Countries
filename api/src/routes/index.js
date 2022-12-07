const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countries = require('./countries.js');
const activities= require('./activities.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries', countries);
router.use('/activities', activities)
/*router.post('/activities', async(req, res) => {
    const {name, difficulty, duration, season} = req.body;
    const auxName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    const [activity, created] = await Activity.findOrCreate({
        where: {
            name: auxName
        },
        defaults: {
            difficulty,
            duration,
            season
        }
    })
})*/

module.exports = router;
