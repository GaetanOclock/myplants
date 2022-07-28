const Plant = require('../models/Plant');

module.exports = {
    // show list
    list: async (req, res) => {
        const plants = await Plant.findAll();
        res.render('plant/list', {title: 'My Plants', plants});
    },
    // show single plant
    show: (req, res) => {

    },
    // display creation form
    create: (req, res) => {
        res.render('plant/create', {title: "Ajouter une plante"});
    },
    // handle creation action
    insert: async (req, res) => {

        const newPlant = new Plant();
        newPlant.name = req.body.name;
        newPlant.description = req.body.description;
        newPlant.picture = req.body.picture;
        await newPlant.save();
console.log(newPlant);
        res.redirect('/plant');
    },
    // handle update action
    update: (req, res) => {

    },
    // handle delete action
    delete: (req, res) => {
        
    }
};