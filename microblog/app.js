
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var url = require("url");
var path = require('path');
var partials = require('express-partials');
var mongoose = require('mongoose');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(partials());
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);

app.get('/v1', routes.hello1);
app.get('/v2', routes.hello2);
app.get('/v3', routes.hello3);
app.get('/v4', routes.hello4);
//app.get('/:v5', routes.hello5);
app.get('/v6', routes.hello6);
app.post('/v6', routes.hello67);
/*app.get('/u/:user',routes.user);
app.get('/post1',routes.post);
app.get('/reg',routes.reg);
app.post('/reg',routes.doreg);
app.get('/login',routes.login);
app.post('/login',routes.doLogin);
app.get('/logout',routes.logout);*/


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
