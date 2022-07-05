const router = require('express').Router();
const pizzaRoutes = require('./pizza.route');

// add prefix pf `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);

module.exports = router;