const mongoose = require('mongoose');
mongoose.set('stricQuery', true);
// data for seed
const data = require('./data');
// model for Present
const Present = require('../models/Present');
// db URL
const MONGO_URL = 'mongodb://localhost:27017/dear-santa';

mongoose.connect(MONGO_URL)
    .then(response => console.log(`Connected to the database ${response.connection.name}`))
    .then(() => {
        // Clean database
        return Present.deleteMany();
    })
    .then(() => {
        return Present.insertMany(data);
    })
    .then((insertedItems => {
        insertedItems.forEach(present => console.log(present.name));
    }))
    .then(() => mongoose.connection.close())
    .catch(err => console.error(err));