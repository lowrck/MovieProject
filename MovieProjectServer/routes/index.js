var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json({ type: 'application/*+json'});
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {



  res.render('form', { title: 'Movie Search' });
});
router.post('/', function(req, res, next) {

  var moviename = req.body.moviename;
  console.log(req.body);
  var url = "http://www.omdbapi.com/?r=json&tomatoes=true&t=" + encodeURIComponent(moviename);
  console.log(moviename);
  console.log(url);
  request(url, function(error, response, body) {

    console.log(body);
    var data = JSON.parse(body);
    var scoredata = data.tomatoMeter + "%";
    res.render('index', {score: scoredata});

  })

})

module.exports = router;
