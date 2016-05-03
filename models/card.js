'use strict';

var mongoose = require('mongoose');

var Card = mongoose.model('Card', {
  category: String,
  question: String,
  answer: String
});

module.exports = Card;
