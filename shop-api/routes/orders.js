var express = require('express');
var router = express.Router();
var _ = require('lodash');

var mongoose = require('mongoose');
var Order = require('../models/Orders.js');
var Product = require('../models/Products.js');
global.timerIds = [];

/* GET /Orders listing. */
router.get('/', function(req, res, next) {
  Order.find(function (err, Orders) {
    if (err) return next(err);
    res.json(Orders);
  });
});

/* POST /Orders */
router.post('/', function(req, res, next) {
    console.log("order post: ",req.body);
  Order.create(req.body, function (err, post) {
    if (err) return next(err);
      res.json(post);

      var order = post;


      // order removed and products available number set back to original after certain time
      var timerId = setTimeout(function() {

        for (var i = 0; i < order.products.length; i++) {
           Product.findByIdAndUpdate(order.products[i]._id, {$inc:{available:1}}, function (err, data) {
              if (err) return next(err);
              console.log("products returned!");
           });
        }

        // remove order
        Order.findByIdAndRemove(order._id, {}, function (err, post) {
          if (err) return next(err);
            console.log("Order removed!");
        });

        // remove item from timer id list
        // delete timerIds[{timerId: timerId, orderId: order._id}];
        delete timerIds[order._id];
        console.log("timer id removed: ", timerIds);

     }, 20000);

      // add timer and order ids into global array
      timerIds[order._id] = timerId;
      console.log("timer id added: ", timerIds);

  });
});


/* GET /Orders/id */
router.get('/:id', function(req, res, next) {
  Order.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Orders/:id */
router.put('/:id', function(req, res, next) {
  Order.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Orders/:id */
router.delete('/:id', function(req, res, next) {
  Order.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;