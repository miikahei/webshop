console.log("test1");
// Load mongoose package
var mongoose = require('mongoose');
// Connect to MongoDB and create/use database called shopAppTest
mongoose.connect('mongodb://localhost/shopAppTest');
// Create a schema
// var ProductSchema = new mongoose.Schema({
//   id: String,
//   name: String,
//   text: String,
//   image: String,
//   available: Number,
// });
// // Create a model based on the schema
// var Product = mongoose.model('Product', ProductSchema);
// console.log("test2");



// Product.create({id: 10, name: 'test product', text: "Some test text", image: 'this is one', available: 4}, function(err, todo){
//   if(err) console.log(err);
//   else console.log(todo);
// });

  // Find all data in the Todo collection
// Product.find(function (err, products) {
//   if (err) return console.error(err);
//   console.log(products);
// });





var products = [
    {
      "id": 0,
      "name": "A notebook",
      "text": "This is the first description",
      "image": "https://unsplash.it/500?image=1",
      "available": 1
    },
    {
      "id": 1,
      "name": "Rocks from the beach",
      "text": "This is the second description",
      "image": "https://unsplash.it/500?image=12",
      "available": 2
    },
    {
      "id": 2,
      "name": "Creepy forks",
      "text": "This is the third description",
      "image": "https://unsplash.it/500?image=23",
      "available": 3
    },
    {
      "id": 3,
      "name": "Nuclear waste",
      "text": "This is the fourth description",
      "image": "https://unsplash.it/500?image=34",
      "available": 10
    },
    {
      "id": 4,
      "name": "An unsafe car",
      "text": "This is the fifth description",
      "image": "https://unsplash.it/500?image=45",
      "available": 20
    },
    {
      "id": 5,
      "name": "A broken lens",
      "text": "This is the sixth description",
      "image": "https://unsplash.it/500?image=56",
      "available": 30
    },
    {
      "id": 6,
      "name": "A panoramic view",
      "text": "This is the seventh description",
      "image": "https://unsplash.it/500?image=67",
      "available": 100
    },
    {
      "id": 7,
      "name": "An old door",
      "text": "This is the eighth description",
      "image": "https://unsplash.it/500?image=78",
      "available": 200
    },
    {
      "id": 8,
      "name": "Grass",
      "text": "This is the ninth description",
      "image": "https://unsplash.it/500?image=89",
      "available": 300
    }
  ]

  Product.collection.insert(products, function(err, todo){
  if(err) console.log(err);
  else console.log(todo);
});

  // Find all data in the Todo collection
Product.find(function (err, products) {
  if (err) return console.error(err);
  console.log(products);
});

