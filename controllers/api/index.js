const router = require('express').Router();

const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const checkoutRoutes = require('./checkout-routes');
const userRoutes = require('./userRoutes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');


router.use('/categories', categoryRoutes);
// router.use('/checkout', checkoutRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;