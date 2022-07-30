const Plant = require('../models/Plant');
const Species = require('../models/Species');

const updateOrCreate = async (req, res) => {
    let plant = null;
    if (!req.params.id) {
        plant = new Plant();
    } else {
        plant = await Plant.findByPk(req.params.id);
    }

    plant.name = req.body.name;
    plant.description = req.body.description;
    plant.picture = req.body.picture;
    plant.species_id = req.body.species;
    await plant.save();
}

module.exports = {
    // show list
    list: async (req, res) => {
        const plants = await Plant.findAll({include: Species});
        res.render('plant/list', {title: 'My Plants', plants});
    },
    // show single plant
    show: async (req, res) => {
        const plant = await Plant.findByPk(req.params.id, {include: Species});
        res.render('plant/single', {title: plant.name, plant});
    },
    // display creation form
    create: async (req, res) => {
        const species = await Species.findAll();
        res.render('plant/create', {title: "Ajouter une plante", species});
    },
    // handle creation action
    insert: async (req, res) => {
        updateOrCreate(req);
        res.redirect('/plant');
    },
    edit: async (req, res) => {

        const species = await Species.findAll();
        const plant = await Plant.findByPk(req.params.id, {include: Species});
        res.render('plant/edit', {title: plant.name, plant, species});
    },
    // handle update action
    update: async (req, res) => {
        await updateOrCreate(req);
        res.redirect('/plant/' + req.params.id);
    },
    // handle delete action
    delete: async (req, res) => {
        await Plant.destroy({where: {id: req.params.id}});
        res.redirect('/plant');
    }
};