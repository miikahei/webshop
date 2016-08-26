var mongoose = require('mongoose');

var PaySchema = new mongoose.Schema({
  cardNumber: Number,
  orderId: String,
});

// Create a model based on the schema
module.exports = mongoose.model('Pay', PaySchema);
