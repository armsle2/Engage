var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/users', function(req, res) {
  res.send('users')
});

module.exports = router;
