var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(express.static(__dirname + '/public'));

app.post('/add', urlencodedParser, function (req, res) {
    var result = req.body.a
    if (req.body.b == '240311' && req.body.a != '') {
        res.send('Hello' + result + `<html>
       <form action="/form.html">
       <input type="submit" value="Logout">
     </form></body></html>`);
    }
    else {
        res.send(`<html>
        <h1>Please login first.</h1>
        <form action="/form.html">
        <input type="submit" value="Login">
  </form></body></html>`);
    }

});

app.listen(8000);