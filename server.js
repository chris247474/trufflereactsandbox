//server.js
'use strict'

//first we import our dependencies...
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./model/user');
var Tx = require('./model/tx');
var Material = require('./model/material');

//and create our instances
var app = express();
var router = express.Router();

//set our port to either a predetermined port number if you have set it up, or 3001
var port = process.env.API_PORT || 5000;

//db config -- REPLACE USERNAME/PASSWORD/DATABASE WITH YOUR OWN FROM MLAB!
var mongoDB = 'mongodb://ctverceles:lifemesh123@ds127506.mlab.com:27506/lifemesh-prealpha';
mongoose.connect(mongoDB, { useMongoClient: true })
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//now we should configure the APi to use bodyParser and look for JSON data in the body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//To prevent errors from Cross Origin Resource Sharing, we will set our headers to allow CORS with middleware like so:
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

//now  we can set the route path & initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'Lifemesh mongo server API Initialized!'});
});

//adding the /users route to our /api router
router.route('/users')
//retrieve all users from the database
.get(function(req, res) {
//looks at our Comment Schema
User.find(function(err, users) {
    if (err)
    res.send(err);
    //responds with a json object of our users database.
    res.json(users)
});
})

//post new user to the database
.post(function(req, res) {
var user = new User();
(req.body.name) ? user.name = req.body.name : null;
(req.body.location) ? user.location = req.body.location : null;
(req.body.type) ? user.type = req.body.type : null;

user.save(function(err) {
    if (err)
    res.send(err);
    res.json({ message: 'New User successfully added!' });
});
});

//adding the /tx route to our /api router
router.route('/tx')
//retrieve all tx from the database
.get(function(req, res) {
    //looks at our Tx Schema
    Tx.find(function(err, txs) {
        if (err)
        res.send(err);
        //responds with a json object of our tx database.
        res.json(txs)
    });
})

//post new tx to the database
.post(function(req, res) {
    var _tx = new Tx();
    (req.body.provider) ? _tx.provider = req.body.provider : null;
    (req.body.recipient) ? _tx.recipient = req.body.recipient : null;
    (req.body.originLoc) ? _tx.originLoc = req.body.originLoc : null;
    (req.body.destLoc) ?_tx.destLoc = req.body.destLoc : null;

    _tx.save(function(err) {
        if (err)
        res.send(err);
        res.json({ message: 'New tx successfully added!' });
    });
});

//adding the /tx route to our /api router
router.route('/material')
//retrieve all tx from the database
.get(function(req, res) {
    //looks at our Tx Schema
    Material.find(function(err, materials) {
        if (err)
        res.send(err);
        //responds with a json object of our tx database.
        res.json(materials)
    });
})

//post new tx to the database
.post(function(req, res) {
    var _material = new Material();
    (req.body.ownerid) ? _material.ownerid = req.body.ownerid : null;
    (req.body.ownername) ? _material.ownername = req.body.ownername : null;
    (req.body.materialType) ? _material.materialType = req.body.materialType : null;
    (req.body.quantity) ? _material.quantity = req.body.quantity : null;
    (req.body.size) ? _material.size = req.body.size : null;

    _material.save(function(err) {
        if (err)
        res.send(err);
        res.json({ message: 'New material successfully added!' });
    });
});

//Use our router configuration when we call /api
app.use('/api', router);

//starts the server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
