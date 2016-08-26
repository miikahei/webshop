var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Pay = require('../models/Pays.js');

/* GET /Pays listing. */
router.get('/', function(req, res, next) {
  Pay.find(function (err, Pays) {
    if (err) return next(err);
    res.json(Pays);
  });
});

/* POST /Pays */
router.post('/', function(req, res, next) {
  Pay.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);

    // clearTimeout(timerIds[post.orderId]);
    // console.log("timer stopped: ");

  });
});


/* GET /Pays/id */
router.get('/:id', function(req, res, next) {
  Pay.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Pays/:id */
router.put('/:id', function(req, res, next) {
  Pay.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Pays/:id */
router.delete('/:id', function(req, res, next) {
  Pay.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;