var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html', { title: 'Interactions Research' });
});
router.get('/interact', function(req, res, next) {
  res.render('interactions.html', {});
});

module.exports = router;
