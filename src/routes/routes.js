const express = require('express');
const coffeeController = require('../controllers/coffee_controller');
const router = new express.Router();

router.get('/', (req, res) => res.send('Welcome to the Drinks API!'));
router.get('/coffeelover', (req, res) => res.send('I like coffee!'));
router.get('/coffee', coffeeController.getCoffee);
module.exports = router;