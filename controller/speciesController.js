const { VERSION } = require('ejs');
const Species = require('../models/Species');

module.exports = {
    // show list
    list: async (req, res) => {
        const species = await Species.findAll();
        res.render('species/list', {title: "Espèces", species});
    },
    // show single plant
    show: (req, res) => {

    },
    // display creation form
    create: (req, res) => {
        res.render('species/create', {title: "Nouvelle espèce"});
    },
    // handle creation action
    insert: async (req, res) => {
        const newSpecies = new Species();
        newSpecies.name = req.body.name;
        newSpecies.scientificName = req.body.scientificName;
        newSpecies.description = req.body.description;
        newSpecies.waterNeeded = req.body.waterNeeded;
        newSpecies.lightNeeded = req.body.lightNeeded;
        await newSpecies.save();

        res.redirect('/species');
    },
    // handle update action
    update: (req, res) => {

    },
    // handle delete action
    delete: (req, res) => {
        
    }
};