'use strict';

var mongoose = require('mongoose');
var Message = mongoose.model('Message');

exports.all = function(req, res) {
  Message.find(function(err, messages){
    console.log('hello')
    console.log(messages)
    res.jsonp(messages);
  })
};

exports.create = function(req, res){
  var m = new Message(req.body);
  m.save(function(err, m){
    res.jsonp(m)
  })
}
