var express = require('express');
var router = express.Router();

/* GET Landing page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MY FAVORITE PEOPLE' });
});

/* GET about page. */
router.get('/people', function(req, res, next) {
  res.render('people', { title: 'FAVORITE PLAYERS' });
});

/* GET contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'CONTACT ME' });
});




module.exports = router;
