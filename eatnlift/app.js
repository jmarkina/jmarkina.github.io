var mongojs = require('mongojs');
var express = require('express');
var bodyParser = require('body-parser');

var uri = "mongodb://localhost/recipes",
    db = mongojs.connect(uri);
var app = express();

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  	extended: true
}));

var server = app.listen(3000, function () {
  	var host = server.address().address;
  	var port = server.address().port;
});

// routes

app.get('/', function (req, res) {
   	res.sendfile('./addrecipe.html');
});

app.post('/', function (req, res) {
    var collection = db.collection('recipes');

    // Submit to the DB
    collection.insert({
        "title" : req.body.title,
        "course" : req.body.course,
        "description" : req.body.description,
        "time" : req.body.cooktime,
        "servings" : req.body.servings
    }, function (err, doc) {
        if (err) {
            // TODO: write failure message into session
        }
        else {
            // TODO: write success message into session
        }
    });

	res.redirect('/');
});
