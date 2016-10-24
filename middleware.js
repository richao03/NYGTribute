var express = require('express');
var app = express();
var path = require('path');

var browserPath = path.join(__dirname, './browser');
var CSSPath = path.join(__dirname, './styles');
var JSPath = path.join(__dirname,'./js');



app.use(express.static(browserPath));
app.use(express.static(CSSPath));
app.use(express.static(JSPath));



app.use(function (err, req, res, next){
  console.error(err.stack);
  res.status(500).send(err.message);
});

module.exports = app;
