var http = require('http');
var server = http.createServer();

server.on('request',require('./middleware'))

var startserver =  function (){
 var PORT = process.env.PORT||1337;
 server.listen(PORT, function(){
   console.log("site ready at 1337")
 })
 }();
