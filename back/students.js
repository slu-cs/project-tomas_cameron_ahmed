// REST API for the opinions collection
const express = require('express');
const router = express.Router();

  // Connect to the collection
  let db = null;
  const mongodb = require('mongodb');
  mongodb.MongoClient.connect('mongodb://localhost:27017', function(error, client) {
    if (error) throw error;
    db = client.db('pub56');
    db.students = db.collection('students');
  });

  // Get all the students
  router.get('/', function(request, response, next) {
    db.students.find().toArray(function(error, students) {
      if (error) return next(error);
      response.json(students);
    });
  });

module.exports = router;
