// Set up the Pub56 database
const db = new Mongo().getDB('pub56');
db.dropDatabase();

db.createCollection('students', {validator: {$and: [
  {balance: {$type: 'float', $ne: ''}},
  {student_id: {$type: 'string', $ne: ''}},
  {'student.name': {$type: 'string', $ne: ''}},
  {_id: type: 'string', $ne: ''},
]}});

db.createCollection('items', {validator: {$and: [
  {item_id: {$type: 'objectId', $ne: ''}},
  {price: {$type: 'float', $ne: ''}},
  {'item.name': {$type: 'string', $ne: ''}},
  {'item.description': {$type: 'string', $ne: ''}},
]}});

db.students.insertMany([
  {
    balance:1000.00,
    student: {id: '11234650', name: 'Cameron Pilarski'},
    _id: 112913515548615287015,
  },
  {
    balance:750.00,
    student: {id: '11234651', name: 'Tomas Cespedes'},
    _id: 113900384673070663488,
  },
  {
    balance:500.00,
    student: {id: '11234652', name: 'Ahmed Bahyoumy'},
    _id: "1",
  },
  {
    balance:250.00,
    student: {id: '11234653', name: 'Lisa Torrey'},
    _id: "2",
  },

]);

db.items.insertMany([
  {
    item: {name: 'Chicken Sandwhich', description: 'A tasty chicken sandwhich'},
    price: 12.50,
    id: '1',
    url: "https://assets.marthastewart.com/styles/video-preview-1280x720-highdpi/d35/EDFSC6021-Buffalo%20Chicken%20Sandwich%20/EDFSC6021-Buffalo%20Chicken%20Sandwich%20.jpg?itok=pFfni9QR",
  },
  {
    item: {name: 'Buffalo Chicken Sandwhich', description: 'A better tasting chicken sandwhich' },
    price: 13.50,
    id: '2',
    url: "https://www.perdue.com/recipeimages/1024x768_thighs_buffalo_chicken_sandwich_tada.jpg",
  },
  {
    item: {name: 'Pub 56 Salad', description: 'Best damn salad youll ever taste' },
    price: 14.50,
    id: '3',
    url: "https://hips.hearstapps.com/del.h-cdn.co/assets/16/21/1464036871-delish-summer-salads-chicken-fajita.jpg",
  },
  {
    item: {name: 'Tuna Salad Sandwhich', description: 'Who even likes tuna salad?' },
    price: 15.50,
    id: '4',
    url: "https://8zxa3etwpf-flywheel.netdna-ssl.com/wp-content/uploads/30-minute-Chickpea-Sunflower-Salad-Sandwich-Soft-Crunchy-savory-and-SO-simple-vegan-glutenfree-healthy-1.jpg",
  },
  {
    item: {name: 'Omelette', description: 'Tasty omelette' },
    price: 11.00,
    id: '5',
    url: "https://www.recipetineats.com/wp-content/uploads/2017/09/Ultra-Lazy-Zucchini-Ham-Omelette-3.jpg",
  },

]);


// Make it fast to look up all studentId's
db.users.createIndex({student_id: 1});
db.items.createIndex({item_id: 1});
