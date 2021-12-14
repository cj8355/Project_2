/*const router = require('express').Router();
const { Product } = require('../models');

// GET one product
router.get('/product/:id', async (req, res) => {
  // If the user is not logged in, redirect the user to the login page
      console.log('hello');
    try {
      const dbProductData = await Product.findByPk(req.params.id);

      const product = dbProductData.get({ plain: true });
      console.log('hi');
      res.render('product', { product});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    
  }
});

//GET About
router.get('/about', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('about');
});

//GET Login
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});


//GET Blog
router.get('/blog', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('blog');
});


  


module.exports = router;*/
