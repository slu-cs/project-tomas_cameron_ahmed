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

  // get current student
  router.get('/:id', function(request, response, next){
    console.log(request.params.id);
    const student = {
      _id : request.params.id
    };

    console.log(student);
    db.students.findOne(student, function(error, student){
      if (error) return next(error);
      if (!student) return next(new Error("Not Found"));
      response.json(student);
    })

  });

  // add an order to the shopping cart
  router.patch('/:id/order', function(request, response, next){
    console.log(request.params.id);
    if (user.id === request.params.id) {
      const student = {
        _id : request.params.id
      };
       const insertedItem = {
             $push: {
               order: {name: decodeURI(request.query.name),
                      description: decodeURI(request.query.description)
               }
             }
       }
       db.students.updateOne(student, insertedItem, function(error, report){
         if (error) return next(error);
       })
     }
     else {
       console.log("You do not have access!!");
     }
  });

// db.books.updateOne({_id: 'B1'}, {$inc: {copies: 1}})

  router.patch('/:id/addfunds', function(request, response, next){
    if (user.id === request.params.id) {
      const student = {
        _id : request.params.id
      };
      const updatedBalance = {
            $inc: {
              balance: parseInt(request.query.funds),
              }
            }


      db.students.updateOne(student, updatedBalance, function(error, report){
        if (error) return next(error);
        db.students.findOne(student, function(error, student){
          if (error) return next(error);
          if (!student) return next(new Error("Not Found"));
          response.json(student);
        })
      })
    }
    else {
      Console.log("You do not have access!!");
    }
  });

  // Delete an item from shopping cart
  router.delete('/:id/order', function(request, response, next) {
    const order = {
      _id: new mongodb.ObjectId(request.params.id),
    };

    const removedItem = {
          $pull: {
            order: {name: decodeURI(request.query.name),
            }
          }
    }

    db.students.deleteOne(student, removedItem, function(error, report){
      if (error) return next(error);
      })
    });

module.exports = router;
