const express = require('express');
const session = require('express-session');
const path = require('path');

const plantsRouter = require('./router/plants');
const speciesRouter = require('./router/species');
const commonRouter = require('./router/common');
const userRouter = require('./router/users');

const database = require('./utils/database');

const Plant = require('./models/Plant');
const Species = require('./models/Species');

Plant.belongsTo(Species, {foreignKey: 'species_id'});
Species.hasMany(Plant, {foreignKey: 'species_id'});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'templates'));

app.use(session({
    secret: '680f69e462164d09501786067ffbe7b3',
    saveUninitialized: true,
    cookie: {secure: false},
    resave: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', commonRouter);
app.use('/plant', plantsRouter);
app.use('/species', speciesRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server running : http://localhost:3000');
});