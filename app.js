var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

app.get('/posts', function(req, res){
  //display all posts
  res.send(req.url);
});

app.post('/posts', function(req, res){
  //new blog post
  res.send(req.url);
});

app.get('/posts/new', function(req, res){
  //return html for new post
  res.send(req.url);
});

app.get('/posts/:id', function(req, res){
  //display a specific post
  var id = req.params.id;
  res.send(id);
});

app.put('/posts/:id', function(req, res){
  //modify a specific post
  var id = req.params.id;
  res.send(id);
});

app.delete('/posts/:id', function(req, res){
  //delete a specific post
  var id = req.params.id;
  res.send(id);
});

app.get('/posts/:id/edit', function(req, res){
  //return html to edit a specific post
  var id = req.params.id;
  res.send("sending " + req.params.id);
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
