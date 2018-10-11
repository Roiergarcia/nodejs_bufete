var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.get('/',function(req,res){
 res.send('hola')
});

app.listen(PORT, function() {
 console.log('server running on http://localhost:' + PORT);
});
