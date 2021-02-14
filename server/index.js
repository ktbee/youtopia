require('dotenv').config()

var express = require('express');
var app = express();
var api = require('./api');

app.use('/api', api);

//var listener = app.listen(process.env.PORT || 8888, function() {
var listener = app.listen(8888, function() {
    console.log('Your app is listening on port ' + listener.address().port);
});
