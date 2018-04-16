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

  // Get all the menu items
  router.get('/', function(request, response, next) {
    db.items.find().toArray(function(error, items) {
      if (error) return next(error);
      response.json(items);
    });
  });

  // Get a specific menu item: TRYING TO GET TO WORK
   router.get('/:id', function(request, response, next) {
     const item = {
       "id": request.params.id,
     };

     db.items.findOne(item, function(error, item) {
       if (error) return next(error);
       if (!item) return next(new Error('Not found'));
       response.json(item);
     });
   });



module.exports = router;
