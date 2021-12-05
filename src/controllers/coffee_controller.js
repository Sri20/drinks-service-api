const coffeeService = require('../services/coffee_service');

const getCoffee = async (req, res) => {
    const coffeename = req.query.coffeeName
    const coffee = coffeeService.getCoffee(coffeename);
    res.json(coffee).status(200);
    };

module.exports = {
    getCoffee,
    };