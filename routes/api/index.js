const router = require('express').Router();
const pizzaRoutes = require('./pizza.route');
const commentRoutes = require('./comment-routes');

// add prefix pf `/pizzas` to routes created in `pizza-routes.js`
router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes);

module.exports = router;