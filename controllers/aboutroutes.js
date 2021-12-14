const router = require('express').Router();
const sequelize = require('../config/connection');

router.get('/about', (req, res) => {
    // if (req.session.loggedIn) {
    //   res.redirect('/');
    //   return;
    // }
  
    res.render('about');
  });

  module.exports = router;