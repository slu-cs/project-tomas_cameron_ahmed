// Set up the Pub56 database
const db = new Mongo().getDB('pub56');
db.dropDatabase();
