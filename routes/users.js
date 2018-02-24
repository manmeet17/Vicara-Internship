var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  res.json([{
  	id: 1,
  	title: "samsepi0l"
  }, {
  	id: 2,
  	title: "D0loresH4ze"
  }]);
});

module.exports = router;
