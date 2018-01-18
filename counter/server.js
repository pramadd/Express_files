//require express
var express = require("express");
var path = require("path");
var app = express();
var ejs = require('ejs')

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var session = require('express-session');
app.use(session({secret: 'codingdojorocks'}));  

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');


var count =0;

app.get('/', function(req, res) {
    //update views
    count++;
    req.session.counts = count;
    console.log('number of counts :', req.session.counts);

 res.render("index",{number: req.session.counts});
})


// tell the express app to listen on port 8000
app.listen(8000, function() {
 console.log("listening on port 8000");
});
