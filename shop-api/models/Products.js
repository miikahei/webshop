var mongoose = require('mongoose');

var ProductSchema = new mongoose.Schema({
  id: String,
  name: String,
  text: String,
  image: String,
  available: Number,
});

// Create a model based on the schema
module.exports = mongoose.model('Product', ProductSchema);
