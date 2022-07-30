const { VERSION } = require('ejs');
const Species = require('../models/Species');

const updateOrCreate = async (req) => {
    let species = null;
    if (!req.params.id) {
        species = new Species();
    } else {
        species = await Species.findByPk(req.params.id);
    }
    species.name = req.body.name;
    species.scientificName = req.body.scientificName;
    species.description = req.body.description;
    species.waterNeeded = req.body.waterNeeded;
    species.lightNeeded = req.body.lightNeeded;
    await species.save();

    return species;
};

module.exports = {
    // show list
    list: async (req, res) => {
        const species = await Species.findAll();
        res.render('species/list', {title: "Espèces", species});
    },
    // show single
    show: async (req, res) => {
        const species = await Species.findByPk(req.params.id);
        res.render('species/single', {title: species.name, species});
    },
    // display creation form
    create: (req, res) => {
        res.render('species/create', {title: "Nouvelle espèce"});
    },
    // handle creation action
    insert: async (req, res) => {
        updateOrCreate(req);
        res.redirect('/species');
    },
    edit: async (req, res) => {
        const species = await Species.findByPk(req.params.id);
        res.render('species/edit', {title: species.name, species});
    },
    // handle update action
    update: async (req, res) => {
        updateOrCreate(req);
        res.redirect('/species/' + req.params.id);
    },
    // handle delete action
    delete: async (req, res) => {
        await Species.destroy({where: {id: req.params.id}});
        res.redirect('/species');
    }
};