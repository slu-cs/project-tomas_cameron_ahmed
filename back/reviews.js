// REST API for the opinions collection
const express = require('express');
const router = express.Router();

  // Connect to the collection
  let db = null;
  const mongodb = require('mongodb');
  mongodb.MongoClient.connect('mongodb://localhost:27017', function(error, client) {
    if (error) throw error;
    db = client.db('pub56');
    db.reviews = db.collection('reviews');
  });

  // Get all the reviews
  router.get('/', function(request, response, next) {
    db.reviews.find().toArray(function(error, reviews) {
      if (error) return next(error);
      response.json(reviews);
    });
  });

  // Get all the reviews for a specific item
  router.get('/', function(request, response, next) {
    const review = {item_id: new mongodb.ObjectId(request.query.item_id)};

    db.reviews.find(review).toArray(function(error, reviews) {
      if (error) return next(error);
      response.json(reviews);
    });
  });

  // Post a new review
  router.post('/', function(request, response, next) {
    if (!request.user) return next(new Error('Forbidden'));

    const review = {
      author: request.user,
      item_id: new mongodb.ObjectId(request.body.item_id),
      review: request.body.review,
    };

    db.reviews.insertOne(review, function(error) {
      if (error) return next(error);
      response.json(review);
    });
  });

  // Delete a review (user must be logged in and match the review author)
  router.delete('/:id', function(request, response, next) {
    const review = {
      author: request.user,
      item_id: new mongodb.ObjectId(request.body.item_id),
      review: request.body.review,
    };

    db.reviews.deleteOne(review, function(error, report) {
      if (error) return next(error);
      if (!report.deletedCount) return next(new Error('Forbidden'));
      response.end();
    });
  });

  module.exports = router;
