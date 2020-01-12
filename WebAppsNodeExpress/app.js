var express = require('express');
var chalk = require('chalk'); //sets colours on our console messages.
var debug = require('debug')('app'); //better way to send out error messages, easier to keep track of what goin on.
var morgan = require('morgan');// morgan gives you http request info
var path = require('path');

var app = express();

app.use(morgan('tiny'));//combined gives more info, tiny gives less

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));  //__dirname is where the app.js exectuble lies.
});

app.listen(3000, function() {
    debug(`listening on port ${chalk.green('3000')}`);
}); 