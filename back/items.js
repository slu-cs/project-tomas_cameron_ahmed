// REST API for the opinions collection
const express = require('express');
const router = express.Router();

  // Connect to the collection
  let db = null;
  const mongodb = require('mongodb');
  mongodb.MongoClient.connect('mongodb://localhost:27017', function(error, client) {
    if (error) throw error;
    db = client.db('pub56');
    db.items = db.collection('items');
  });

  // Get all the items
  router.get('/', function(request, response, next) {
    db.items.find().toArray(function(error, items) {
      if (error) return next(error);
      response.json(items);
    });
  });

  // Get a specific item
  router.get('/:id/:name', function(request, response, next){ // REST convention: combine this with the get('/')
    const item = {
      "item": {
        "price": request.params.price,
      }
    };
    db.items.find(item).toArray(function(error, items){
      if (error) return next(error);
      response.json(items);
    });
  });


module.exports = router;
