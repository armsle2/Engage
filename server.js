var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var rewards = require('./routes/rewards-api');
var users = require('./routes/users-api');
var surveys = require('./routes/surveys-api');

var app = express();


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './client/public')));

app.use('/api', rewards);
app.use('/api', users);
app.use('/api', surveys);




module.exports = app;
