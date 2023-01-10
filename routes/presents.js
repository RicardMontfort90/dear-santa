const express = require('express');
const Present = require('../models/Present');
const router = express.Router();

/* GET present list page. */
// ROUTE: /presents
router.get('/', async (req, res, next) => {
    try {
        const presents = await Present.find({});
        res.render('presents', {presents});
    } 
    catch (error) {
        next(error);
    }
});

/* GET search results */
// ROUTE: /presents/search
router.get('/search', async (req, res, next) => {
    const { name } = req.query;
    try {
        const present = await Present.findOne({ name });
        res.render('search', { query: name, present: present });
    } 
    catch (error) {
        next(error);
    }
})

/* GET new present page */
// ROUTE: /presents/new 
router.get('/new', (req, res, next) => {
    res.render('newPresent');
})

/* POST new present to db */
// ROUTE: /presents/new 
router.post('/new', async (req, res, next) => {
    const { name, image, price, recipient, description } = req.body;
    try {
        const createdPresent = await Present.create({ name, image, price, recipient, description });
        res.redirect(`/presents/${createdPresent._id}`);
    } 
    catch (error) {
        next(error);
    }
})

/* GET delete request */
// ROUTE: /presents/delete/:id
router.get('/delete/:id', async (req, res, next) => {
    const { id } = req.params
    try {
        await Present.findByIdAndDelete(id);
        res.redirect('/presents');   
    } 
    catch (error) {
        next(error);
    }
})

/* GET present details page */
// ROUTE: /presents/:id 
router.get('/:presentId', async (req, res, next) => {
    const { presentId } = req.params;
    try {
        const present = await Present.findById(presentId);
        res.render('detail', present);
    }     
    catch (error) {
        next(error);
    }
})
module.exports = router;