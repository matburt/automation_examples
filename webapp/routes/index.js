var express = require('express');
var fs = require('fs');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  fs.readFile('/opt/webapp/config', function(err, data) {
    if (err) {
      res.render('index', { title: err.toString() });
    } else {
      res.render('index', { title: data.toString() });
    }
  });
})

module.exports = router;
