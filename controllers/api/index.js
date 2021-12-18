const router = require('express').Router();
<<<<<<< HEAD
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const checkoutRoutes = require('./checkout-routes');


router.use('/categories', categoryRoutes);
// router.use('/checkout', checkoutRoutes);
router.use('/products', productRoutes);
=======

const userRoutes = require('./user-routes.js');
const emailRoutes = require('./email-routes.js');

router.use('/user', userRoutes);
router.use('/email', emailRoutes);
>>>>>>> main

module.exports = router;