
/*
 * GET home page.
 */
var mongoose = require('mongoose');
var models = require('../models/user');  
var User = models.User;
mongoose.connect('mongodb://localhost/monkey');
var url = require("url");




exports.index = function(req, res){
  res.render('index', { title: 'myblog' });
};
exports.hello1=function(req,res){
  res.send('hello World');
};
exports.hello2=function(req,res){
  res.render('hello2', { title: 'Hello World' });
};
exports.hello3=function(req,res){
  res.render('hello3', { title: 'Hello World' });
};
exports.hello4=function(req,res){
 /* var user = new User({
        userid : "nowind_lee@qq.com",
        password: "Freewind"
    }); */
    //user.save();    
    User.find(function(err,docs){
    res.render('hello4', {
      title:'Express Demo Example',
      user:docs
    });
  });
  };
exports.hello5=function(req,res){
  console.log(req.query.q);
  res.render('hello5', { title1: req.query.q})
  next();
};
exports.hello6=function(req,res){
  res.render('hello6', { title: 'Hello World' });
};
exports.hello67=function(req,res){
    var user= new User({
    userid : req.body.userid,
    password: req.body.password,
  });
  
  console.log('create----'); 
  user.save(function(err,doc){
    console.log(doc);
    res.redirect('/v4');
  });
};







