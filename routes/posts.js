var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  //display all posts
  res.send(req.url);
});

router.post('/', function(req, res){
  //new blog post
  res.send(req.url);
});

router.get('/new', function(req, res){
  //return html for new post
  res.send(req.url);
});

router.get('/:id', function(req, res){
  //display a specific post
  var id = req.params.id;
  res.send(req.url + " " + id);
});

router.put('/:id', function(req, res){
  //modify a specific post
  var id = req.params.id;
  res.send(req.url + " " + id);
});

router.delete('/:id', function(req, res){
  //delete a specific post
  var id = req.params.id;
  res.send(req.url + " " + id);
});

router.get('/:id/edit', function(req, res){
  //return html to edit a specific post
  var id = req.params.id;
  res.send(req.url + " " + "sending " + req.params.id);
});

router.get('/:id/comments', function(req, res){
  //display all comments for a specific post
  var id = req.params.id;
  res.send(req.url + " " +  "sending comments " + req.params.id);
});

router.get('/:id/comments/new', function(req, res){
  //return an HTML form for creating a new comment for a post
  var id = req.params.id;
  res.send(req.url + " " +  "sending comments " + req.params.id);
});

router.post('/:id/comments', function(req, res){
  //create a new comment for a post
  var id = req.params.id;
  res.send(req.url + " " +  "sending comments " + req.params.id);
});

router.get('/:id/comments/:cid', function(req, res){
  //display a specific comment for a post
  var id = req.params.id;
  var cid= req.params.cid;
  res.send(req.url + " " +  "sending comments " + req.params.id + req.params.cid);
});

router.get('/:id/comments/:cid/edit', function(req, res){
  //return an HTML form for editing a comment for a post
  var id = req.params.id;
  var cid= req.params.cid;
  res.send(req.url + " " +  "editing comments " + req.params.id + req.params.cid);
});

router.put('/:id/comments/:cid', function(req, res){
  //update a specific comment for a post
  var id = req.params.id;
  var cid= req.params.cid;
  res.send(req.url + " " +  "updating comments " + req.params.id + req.params.cid);
});

router.delete('/:id/comments/:cid', function(req, res){
  //delete a specific comment for a post
  var id = req.params.id;
  var cid= req.params.cid;
  res.send(req.url + " " + "deleting comments " + req.params.id + req.params.cid);
});

module.exports = router;