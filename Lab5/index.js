// var express = require('express'),
//     app = express(),
//     bodyParser = require('body-parser');

// var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(express.static(__dirname + '/public'));

// app.post('/add', urlencodedParser, function (req, res) {
//     var result = req.body.a
//     if (req.body.b == '240311' && req.body.a != '') {
//         res.send('Hello' + result + `<html>
//        <form action="/form.html">
//        <input type="submit" value="Logout">
//      </form></body></html>`);
//     }
//     else {
//         res.send(`<html>
//         <h1>Please login first.</h1>
//         <form action="/form.html">
//         <input type="submit" value="Login">
//   </form></body></html>`);
//     }

// });

// app.listen(8000);

var express = require('express')
var app = express()
var session = require('express-session')
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
// app.use(express.static(__dirname + '/public'));

                         // sign cookie (for a session)
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 },
   resave : false, saveUninitialized: false }))
   // resave => Forces the session to be saved back to the session store, even if the session was never modified 
   // saveUninitialized => the cookie will not be set on a response with an uninitialized session

// app.use(function(req, res, next) {
//    var sess = req.session
//    if (sess.views) {
//        sess.views++
//    } else {
//        sess.views = 1
//    }
//    console.log(sess.views)
//    next();
// })


app.get('/',function(req, res) {
    if(req.session.xxx){
        res.send('hello:'+req.session.xxx+`<html>
        <body>
           
        <form action="/logout" method="get">
        <button>logout</button>
      </form></body></html>`)
    }
    else {
        res.send(`<html>
        <body>
        <form action="/" method="post">
        <input type="text" name="a" placeholder="ID"/><br/>
        <input type="text" name="b" placeholder="Password"/><br/>
        <button type="submit">login</button>
      </form></body></html>`)
    }
   
 }),

app.post('/', urlencodedParser, function(req, res){
    var result = req.body.a
    console.log(result);
    console.log(req.body.b);
    var sess = req.session
    sess.xxx = result
    
    if (req.body.b == '240311' && req.body.a != '') {
        res.send('Hello' + result + `<html>
       <body>
       <form action="/" method="get">
       <input type="submit" value="Logout">
     </form></body></html>`);
    }
    else {
        res.send(`<html>
        <body>
        <h1>Please login first.</h1>
        <form action="/" method="get">
        <input type="submit" value="Login">
  </form></body></html>`);
    }
});

// app.get('/admin' ,(req,res) => {
//     res.send(<html><body>hello</body></html>)

// })

app.get('/logout', (req,res) => {
    req.session.destroy((err) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
 });
 

app.listen(8000)