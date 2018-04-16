// Set up the Pub56 database
const db = new Mongo().getDB('pub56');
db.dropDatabase();

db.createCollection('users', {validator: {$and: [
  {student_balance: {$type: 'float', $ne: ''}},
  {'student.id': {$type: 'string', $ne: ''}},
  {'student.name': {$type: 'string', $ne: ''}},
]}});

db.createCollection('items', {validator: {$and: [
  {item_id: {$type: 'objectId', $ne: ''}},
  {price: {$type: 'float', $ne: ''}},
  {'item.name': {$type: 'string', $ne: ''}},
  {'item.description': {$type: 'string', $ne: ''}},
]}});

db.users.insertMany([
  {
    student_balance:1000.00,
    student: {id: '11234650', name: 'Cameron Pilarski'},
  },
  {
    student_balance:750.00,
    student: {id: '11234651', name: 'Tomas Cespedes'},
  },
  {
    student_balance:500.00,
    student: {id: '11234652', name: 'Ahmed Bahyoumy'},
  },
  {
    student_balance:250.00,
    student: {id: '11234653', name: 'Lisa Torrey'},
  },

]);

db.items.insertMany([
  {
    item: {name: 'Chicken Sandwhich', description: 'A tasty chicken sandwhich'},
    price: 12.50,
    id: '1',
  },
  {
    item: {name: 'Buffalo Chicken Sandwhich', description: 'A better tasting chicken sandwhich' },
    price: 13.50,
    id: '2',
  },
  {
    item: {name: 'Pub 56 Salad', description: 'Best damn salad youll ever taste' },
    price: 14.50,
    id: '3'
  },
  {
    item: {name: 'Tuna Salad Sandwhich', description: 'Who even likes tuna salad?' },
    price: 15.50,
    id: '4'
  },
  {
    item: {name: 'Omelotte', description: 'Tasty omelotte' },
    price: 11.00,
    id: '5', 
  },


]);

// Make it fast to look up all studentId's
//db.users.createIndex({'student.id': 1});
db.items.createIndex({item_id: 1});
