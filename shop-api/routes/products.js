var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Product = require('../models/Products.js');

/* GET /products listing. */
router.get('/', function(req, res, next) {
	console.log("get all: ", req.params);
  Product.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* POST /products */
router.post('/', function(req, res, next) {
	  console.log("product post: ",req.body);
  Product.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* GET /products/id */
router.get('/:id', function(req, res, next) {
	console.log("get by id: ", req.params);
  Product.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /products/:id */
router.put('/:id', function(req, res, next) {
	console.log("update: ", req.body);
  Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /products/:id */
router.delete('/:id', function(req, res, next) {
  Product.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;