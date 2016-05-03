var express = require('express');
var router = express.Router();

var Card = require('../models/card');

router.post('/', (req, res) => {
  var newCard = new Card(req.body);
  newCard.save((err, savedCard) => {
    if(err) return res.status(400).send(err);
    res.send(savedCard);
  })
});

router.get('/', (req, res) => {
  Card.find({}, (err, cards) => {
    if(err) return res.status(400).send(err);
    res.send(cards);
  });
});

router.put('/:id', (req, res) => {
  Card.findByIdAndUpdate(req.params.id, { $set: req.body }, {new: true}, (err, card) => {
    if(err) return res.status(400).send(err);
    res.send(card);
  });
});

router.delete('/:id', (req, res) => {
  Card.findByIdAndRemove(req.params.id, err => {
    if(err) return res.status(400).send(err);
    res.send();
  });
});

module.exports = router;
