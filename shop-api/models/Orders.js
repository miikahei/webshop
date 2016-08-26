var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
  cardId: String,
  products: Array,
  paid: Boolean,
  //items: [{id: Number, amount: Number}]
});

// Create a model based on the schema
module.exports = mongoose.model('Order', OrderSchema);
