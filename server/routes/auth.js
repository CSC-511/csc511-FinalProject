var express = require('express');
// var session = require('express-session');
var app = express();

app.post('/login', function(req, res) {
    const username = req.param('username').toLowerCase();
    const password = req.param('password').toLowerCase();
    const cookie = req.param('cookie');
    
    req.app.get('locals.client').db('bettDb').collection('userAccounts').findOne({
        username,password
    }, (err, items) => {
        console.log(err, items, "debug for class")
        if(items){
            req.app.get('locals.client').db('bettDb').collection('userAccounts')
            .updateOne(  { username:username, password:password } , { $set: { isLoggedIn : "true" }}, (err, item) => {
                console.log(items, 'response for logout')
                if(item){
                    res.json({...items,isLoggedIn:true});
                } else {
                    res.json(null);
                }
            })
        } else {
            res.json(null);

        }
    })
});

app.get('/isloggedin', function(req, res) {
    const cookie = parseInt(req.query.cookie);

    console.log('checking if is logged in ', cookie);
    req.app.get('locals.client').db('bettDb').collection('userAccounts').findOne({
        cookie
    }, (err, items) => {
        console.log(err, items, "debug for class")
        if(items && items.isLoggedIn){
            res.json(items);
        } else {
            res.json(null);
        }
      })
});

/**
 * To create a new id when user logs out
 */
function uniqueCookie(){
    let _id = () =>{
        return Math.floor((1 +Math.random()) * 0X10000);
    }
    return _id() + _id()  + _id();
}

app.post('/logout', function(req, res) {
    const cookie = parseInt(req.param('cookie'));
    console.log('the cookie');
    req.app.get('locals.client').db('bettDb').collection('userAccounts')
    .updateOne(  { cookie:cookie } , { $set: { isLoggedIn : false,  cookie: ''} }, (err, items) => {
        // console.log(items, 'response for logout')
        //Need to update the session storage with new cookie
        if(items){
            res.json(true);
        } else {
            res.json(null);

        }

    });

});


app.post('/signOut', function(req, res) {
    const cookie = parseInt(req.param('cookie'));
    res.clearCookie('cookie');
    req.app.get('locals.client').db('bettDb').collection('userAccounts')
    .updateOne(  { cookie:cookie } , { $set: { isLoggedIn : false, cookie:uniqueCookie() } }, (err, items) => {
        // console.log(items, 'response for logout')
        if(items){
            res.json(true);
        } else {
            res.json(null);

        }

    });

});

app.post('/signup', function(req, res){
    const username = req.param('username').toLowerCase();
    const password = req.param('password').toLowerCase();
    let ranNum = Math.floor(Math.random() * 1000000)
    const db = req.app.get('locals.client').db('bettDb').collection('userAccounts');
    db.findOne({ username }, (err, items) => {
        console.log(err, items, username)
        if(items){
            console.log('User already exists')
            res.json(false)
        }

        if(!items){
            console.log("Can sign up!")
            db.insertOne({
                username: username,
                password: password,
                userBalance: 100,
                isLoggedIn: 'false',
                cookie: ranNum
            })
            res.json(true);
        }
    })
});


module.exports = app;