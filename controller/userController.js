const hashPassword = require('../utils/hashPassword');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = {
    connection: (req, res) => {
        res.render('user/connection', {title: 'Connexion'});
    },
    connectionAction: async (req, res) => {
        if (!req.body.email) {
            throw new Error("Email not given.");
        }
        const user = await User.findOne({where: {email: req.body.email}});

        if (!user) {
            res.status(404);
            res.redirect('/user/connection');
        } else {
            const isValid = await bcrypt.compare(req.body.password, user.password);
            
            if (isValid) {
                req.session.user = user;
                res.redirect('/user/dashboard');
            } else {
                req.session.user = null;
                res.redirect('/user/connection');
            }
        }
    },
    disconnect: (req, res) => {
        req.session.user = null;
        res.redirect(req.query.redirectTo);
    },
    register: (req, res) => {
        res.render('user/register', {title: 'Créer un compte'});
    },
    registerAction: async (req, res) => {
        const newUser = new User();
        newUser.email = req.body.email;
        newUser.username = req.body.username;
        newUser.password = await hashPassword.hash(req.body.password, req.body.email);
        await newUser.save();

        res.redirect('/user/connection');
    },
    forgotPassword: (req, res) => {
        res.render('user/forgotPassword', {title: "Mot de passe oublié"});
    },
    forgotPasswordAction: (req, res) => {
        res.rediret('/user/connection');
    },
    dashboard: (req, res) => {
        const user = req.session.user;
        res.render('user/dashboard', {title: "Tableau de bord", user});
    }
};