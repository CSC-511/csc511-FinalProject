const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const mongo = require('mongodb').MongoClient
const url = 'mongodb://localhost:27017';
mongo.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, client) => {
  if (err) {
    return
  }
  client.db('bettDb').dropDatabase();
  const db = client.db('bettDb');
  simpleTestCollection = db.collection('test');
  const db1 = client.db('bettDb');
  userAccountsCollection = db1.collection('userAccounts');
  const db2 = client.db('bettDb');
  friendsCollection = db2.collection('userFriends');
  const db3 = client.db('bettDb');
  activeBetsCollection = db3.collection('activeBets');
  const db4 = client.db('bettDb');
  userBetsCollection = db4.collection('userBets');
  simpleTestCollection.insertOne({name: 'ben', age:56}, (err, result) => {
})
userAccountsCollection.insertOne({UserName: 'Daniel', password: '12345',userBalance:1000 }, (err, result) => {
})
friendsCollection.insertOne({UserName: 'Daniel', friendsWith:'Jasper' }, (err, result) => {
})
activeBetsCollection.insertOne({BetCreator: 'Daniel', BetDescription:'Buffalo Bills will win the superbowl', BetAmount:20, BetPayout:100, BetStatus:'TBD', userAccountsID:'' }, (err, result) => {
})
userBetsCollection.insertOne({BetCreator: 'Daniel', BetDescription:'Buffalo Bills will win the superbowl', BetAmount:20, BetPayout:100, BetStatus:'TBD', userAccountsID:'' }, (err, result) => {
})
app.get('/testing', function(req, res) {
    simpleTestCollection.find().toArray((err, items) => {
        res.json(items);
      })
    });
    app.get('/user', function(req, res) {
      userAccountsCollection.find().toArray((err, items) => {
          res.json(items);
        })
      });
      app.get('/friends', function(req, res) {
        friendsCollection.find().toArray((err, items) => {
            res.json(items);
          })
          });
          app.get('/activeBets', function(req, res) {
            activeBetsCollection.find().toArray((err, items) => {
                res.json(items);
              })
              });
              app.get('/userBets', function(req, res) {
                userBetsCollection.find().toArray((err, items) => {
                    res.json(items);
                  })
                  });
})

//Routers for coinsiding requests
//Add if I missed yours
var homeRouter = require('./routes/home');
var signupRouter = require('./routes/signup');
// var memberRouter = require('./routes/member');
var betsRouter = require('./routes/bets');
var profileRouter = require('./routes/profile');
app.use('/', homeRouter);
app.use('/signup', signupRouter);
// app.use('/members', memberRouter);
app.use('/bets', betsRouter);
app.use('/profile', profileRouter);
app.listen('4500');
module.exports = app;