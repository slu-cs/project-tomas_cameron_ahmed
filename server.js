// Web server for Pub56 food ordering system
const express = require('express');
const server = express();

// Parse request bodies
server.use(express.urlencoded({extended: true}));

// Ignore icon requests
server.get('/favicon.ico', function(request, response) {
  response.sendStatus(204);
});

// Logging
server.use(function(request, response, next) {
  console.log(request.method, request.url, request.body);
  next();
});

// Error handling
server.use(function(error, request, response, next) {
  console.log(error.stack);

  switch(error.message) {
    case 'Bad request':
    case 'Document failed validation':
      response.sendStatus(400);
      break;
    case 'Forbidden':
      response.sendStatus(403);
      break;
    case 'Not found':
    case 'Argument passed in must be a single String of 12 bytes or a string of 24 hex characters':
      response.sendStatus(404);
      break;
    default:
      response.sendStatus(500);
  }
});

// Server is up
server.listen(3000);
