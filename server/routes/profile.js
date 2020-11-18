var express = require('express');
var app = express();

const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, client) => {
    if (err) {
        return
    }

    app.get('/', function(req, res) {
        res.json("Test Profile");
    });

    app.get('/profile/users', function(req, res) {
        //req.app.get('locals.client').db('bettDb').collection('userAccounts').find().toArray((err, items) => {
            res.json('hello');
        //})
    });

});


module.exports = app;