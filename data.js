// Set up the Pub56 database
const db = new Mongo().getDB('pub56');
db.dropDatabase();

db.createCollection('students', {validator: {$and: [
  {balance: {$type: 'float', $ne: ''}},
  {student_id: {$type: 'string', $ne: ''}},
  {'student.name': {$type: 'string', $ne: ''}},
  {_id: {type: 'string', $ne: ''}},
]}});

db.createCollection('items', {validator: {$and: [
  {item_id: {$type: 'objectId', $ne: ''}},
  {price: {$type: 'float', $ne: ''}},
  {'item.name': {$type: 'string', $ne: ''}},
  {'item.description': {$type: 'string', $ne: ''}},
  {url: {$type: 'string', $ne: ''}},
  {category: {$type: 'string', $ne: ''}},
]}});

db.createCollection('reviews', {validator: {$and: [
  {item_id: {$type: 'float', $ne: ''}},
  {review: {$type: 'string', $ne: ''}},
  {'author.id': {$type: 'string', $ne: ''}},
  {'author.name': {$type: 'string', $ne: ''}},
]}});

db.reviews.insertMany([
  {
    item_id: '101',
    review: 'Best appetizer!',
    author: {id: '112913515548615287015', name: 'Cameron Pilarski'},
  },
  {
    item_id: '102',
    review: 'Favorite appetizer on campus!',
    author: {id: '113900384673070663488', name: 'Tomas Cespedes'},
  },
]);

db.students.insertMany([
  {
    balance:1000.00,
    student: {id: '11234650', name: 'Cameron Pilarski'},
    _id: "112913515548615287015",
    order: [],
  },
  {
    balance:750.00,
    student: {id: '11234651', name: 'Tomas Cespedes'},
    _id: "113900384673070663488",
    order: [],
  },
  {
    balance:500.00,
    student: {id: '11234652', name: 'Ahmed Bahyoumy'},
    _id: "102325165854935062541",
    order: [],
  },
  {
    balance:250.00,
    student: {id: '11234653', name: 'Lisa Torrey'},
    _id: "114095023332102109087",
    order: [],
  },

]);

// ID #'s
// appetizers - 100
// sandwhiches and burgers - 200
// soft drinks - 300
// flatbreads - 400
// salads - 500
// beer - 600
db.items.insertMany([
  {
    item: {name: 'Curly Fries', description: 'Our famous spicy, curly fries seasoned to perfection.'},
    price: 4.00,
    item_id: '101',
    url: "https://www.pizzahagerstown.com/wp-content/uploads/9bb51ec040f5ec79770f1e9836c4f866.jpg",
    category: 'Appetizer',
  },
  {
    item: {name: 'Sweet Potato Fries', description: 'Try our new sweet potato fries!'},
    price: 4.00,
    item_id: '102',
    url: "http://www.frompastatopaleo.com/wp-content/uploads/2013/06/sweetpotatofries.jpg",
    category: 'Appetizer',
  },
  {
    item: {name: 'Mozzarella Sticks', description: 'Stuffed with fresh mozzarella cheese, these mozzarella sticks will melt in your mouth!'},
    price: 7.00,
    item_id: '103',
    url: "http://www.frompastatopaleo.com/wp-content/uploads/2013/06/sweetpotatofries.jpg",
    category: 'Appetizer',
  },
  {
    item: {name: 'Chicken Wing Dip', description: 'One of our famous dips! Youll be coming back for more!'},
    price: 8.00,
    item_id: '104',
    url: "http://reckittbenckiser.calcmenuweb.com/picNormal/P123016135459_3.jpg",
    category: 'Appetizer',
  },
  {
    item: {name: 'Mac & Cheese Bites', description: 'Our cheeesy mac, fried and delicious'},
    price: 7.00,
    item_id: '105',
    url: "https://www.oldhousetonewhome.net/wp-content/uploads/2015/03/Mini-Macaroni-and-Cheese-Bites4.jpg",
    category: 'Appetizer',
  },
  {
    item: {name: 'Boneless Wings', description: '6 boneless wings, tossed in a sauce of your choice (Buffalo, BBQ, Teriyaki)'},
    price: 9.00,
    item_id: '106',
    url: "https://atmedia.imgix.net/bb045a15a642eb2def25c386c454f56cb4870d1d?auto=format&q=45&w=640.0&fit=max&cs=strip",
    category: 'Appetizer',
  },
  {
    item: {name: 'Garlic Parm Tots', description: 'Crispy potato tots tossed in garlic seasoning (can be served with cheese on top)'},
    price: 6.00,
    item_id: '107',
    url: "https://i.pinimg.com/474x/cd/60/ac/cd60ac4fdc9b04e3fc769ad8e29d5887--tater-tot-recipes-potato-recipes.jpg",
    category: 'Appetizer',
  },
  {
    item: {name: 'Bavarian Pretzel Bites', description: 'Not too big of an appetite? Try our pretzel bites. Buttery, salty, delicious!'},
    price: 4.00,
    item_id: '108',
    url: "https://www.twopeasandtheirpod.com/wp-content/uploads/2010/02/pretzel-bites-1.jpg",
    category: 'Appetizer',
  },
  {
    item: {name: 'Buffalo Corckscrew Shrimp', description: 'Shrimp fried and dipped in Buffalo sauce'},
    price: 6.00,
    item_id: '109',
    url: "http://dzj6qehhi7tia.cloudfront.net/wp-content/uploads/2015/02/Buffalo-Shrimp.jpg",
    category: 'Appetizer',
  },
  {
    item: {name: 'Chicken Sandwhich', description: 'A tasty chicken sandwhich served with lettuce, tomato, and mayonnaise.'},
    price: 8.00,
    item_id: '201',
    url: "https://assets.marthastewart.com/styles/video-preview-1280x720-highdpi/d35/EDFSC6021-Buffalo%20Chicken%20Sandwich%20/EDFSC6021-Buffalo%20Chicken%20Sandwich%20.jpg?itok=pFfni9QR",
    category: 'Sandwhich',
  },
  {
    item: {name: 'Buffalo Chicken Sandwhich', description: 'Try our delicious buffalo chicken sandwhich. Served with lettuce, tomato and a side or ranch or blue cheese.' },
    price: 8.00,
    item_id: '202',
    url: "https://www.perdue.com/recipeimages/1024x768_thighs_buffalo_chicken_sandwich_tada.jpg",
    category: 'Sandwhich',
  },
  {
    item: {name: 'Black Bean Burger', description: 'Our vegetarian, black bean burger is delicious and one youll enjoy!' },
    price: 8.00,
    item_id: '203',
    url: "https://pioneerwoman.files.wordpress.com/2014/09/blackbeanburger1.jpg?w=620&zoom=2",
    category: 'Sandwhich',
  },
  {
    item: {name: 'Turkey Avocado', description: 'Turkey Avocado sandwhich served with your choice of cheese, lettuce, tomato, and a pickle.' },
    price: 8.00,
    item_id: '204',
    url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2014/4/23/3/RX-Boarshead_Turkey-Avocado-Bacon-Sandwich_s4x3.jpg.rend.hgtvcom.616.462.suffix/1398288315945.jpeg",
    category: 'Sandwhich',
  },
  {
    item: {name: 'Chicken and Waffle Slider', description: 'Served with maple syrup and bacon' },
    price: 8.00,
    item_id: '205',
    url: "http://2.bp.blogspot.com/-yR64SB5JIt4/T0McD38G62I/AAAAAAAAE7o/MFqd2JdGzcU/s1600/Waffle+Sliders.jpg",
    category: 'Sandwhich',
  },
  {
    item: {name: 'Tuna Salad Sandwhich', description: 'Our delicious tuna salad sandwhich' },
    price: 7.50,
    item_id: '206',
    url: "https://8zxa3etwpf-flywheel.netdna-ssl.com/wp-content/uploads/30-minute-Chickpea-Sunflower-Salad-Sandwich-Soft-Crunchy-savory-and-SO-simple-vegan-glutenfree-healthy-1.jpg",
    category: 'Sandwhich',
  },
  {
    item: {name: 'Cobb Salad', description: 'The Pub 56 signature Cobb Salad, served with your choice of dressing.' },
    price: 7.50,
    item_id: '501',
    url: "https://images-gmi-pmc.edge-generalmills.com/d201d76d-3ec7-4f4b-bb9c-79f13d959b47.jpg",
    category: 'Salad',
  },
  {
    item: {name: 'Spinach Salad', description: 'Fresh spinach, tomatos, cucumber, and red peppers served with your choice of dressing.' },
    price: 7.00,
    item_id: '502',
    url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/28/4/FNM_040112-WE-Dinners-018_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371606105351.jpeg",
    category: 'Salad',
  },
  {
    item: {name: 'Ceasar Salad', description: 'Our signature Ceaser salad server with our crunchy croutons.' },
    price: 7.00,
    item_id: '503',
    url: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/2/28/4/FNM_040112-WE-Dinners-018_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371606105351.jpeg",
    category: 'Salad',
  },
  {
    item: {name: 'Soda', description: 'Root Beer, Coke, Sprite, Fanta, Birch Beer' },
    price: 2.50,
    item_id: '301',
    url: "http://www.todayifoundout.com/wp-content/uploads/2016/09/coke-640x427.png",
    category: 'Soft Drink',
  },
  {
    item: {name: 'Chocolate Milk', description: 'Chocolate Milk (2% milk)' },
    price: 3.50,
    item_id: '302',
    url: "http://deborahdurrant.com/wp-content/uploads/2015/03/Delicious-Chocolate-53884420-200x300.jpg",
    category: 'Soft Drink',
  },
  {
    item: {name: 'Lemonade', description: 'Refreshing Lemonade' },
    price: 3.50,
    item_id: '303',
    url: "https://www.chef-in-training.com/blog/wp-content/uploads/2016/04/Homemade-Lemonade-1.jpg",
    category: 'Soft Drink',
  },
  {
    item: {name: 'Busch Light', description: 'Busch Light beer, draft or bottle.' },
    price: 3.50,
    item_id: '601',
    url: "http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/TBS_Brand_Lockups_BUSCH_LT.jpg?itok=1qCx6QFu",
    category: 'Beer',
  },
  {
    item: {name: 'Budweiser', description: 'Budweiser beer, draft or bottle.' },
    price: 3.50,
    item_id: '602',
    url: "http://flask.com/wp-content/uploads/budweiser-bottles-271x300.jpg",
    category: 'Beer',
  },
  {
    item: {name: 'Bud Light', description: 'Bud Light beer, draft or bottle.' },
    price: 3.50,
    item_id: '603',
    url: "https://s.hdnux.com/photos/47/07/20/10253369/5/920x920.jpg",
    category: 'Beer',
  },
  {
    item: {name: 'Stella Artois', description: 'Stella Artois beer, bottle only.' },
    price: 4.50,
    item_id: '604',
    url: "http://kyrzayda.com/wp-content/uploads/2016/08/IMG_1769.jpg",
    category: 'Beer',
  },
  {
    item: {name: 'Heineken', description: 'Heineken beer, bottle only.' },
    price: 4.50,
    item_id: '605',
    url: "https://i0.wp.com/thecostaricanews.com/wp-content/uploads/2018/02/heineken.jpg?w=2000&ssl=1",
    category: 'Beer',
  },
  {
    item: {name: 'Buffalo Chicken Flatbread', description: 'Our tasty Buffalo Chicken Flatbread' },
    price: 8.00,
    item_id: '401',
    url: "https://media1.s-nbcnews.com/j/newscms/2016_09/1000426/buffalo-chicken-flatbread-today-20160304-tease_78db54e4eb86315cb84193a799a301ca.today-inline-large.jpg",
    category: 'Flatbread',
  },
  {
    item: {name: 'BBQ Chicken Flatbread', description: 'Our tasty BBQ Chicken Flatbread' },
    price: 8.00,
    item_id: '402',
    url: "http://www.publix.com/-/media/aprons/images/2017/08/r0003972_600x440.ashx?as=1&w=417&h=306&hash=91094582DA9C94FB89BF528316C54FA7746FB232",
    category: 'Flatbread',
  },
  {
    item: {name: 'Traditional Cheese Pizza Flatbread', description: 'Thick crust cheese pizza loaded with cheese.' },
    price: 8.00,
    item_id: '403',
    url: "https://www.gardeninthekitchen.com/wp-content/uploads/2016/05/cheese-pizza5.jpg",
    category: 'Flatbread',
  },
  {
    item: {name: 'Tomato, Mozzarella, and Basil Flatbread', description: 'Our tasty Tomato, Mozzarella, and Basil Flatbread' },
    price: 8.00,
    item_id: '404',
    url: "https://i.pinimg.com/736x/3a/c4/c5/3ac4c588ba9f726a811a8dba435dbf0c.jpg",
    category: 'Flatbread',
  },
  {
    item: {name: 'Spinach and Artichoke Flatbread', description: 'Our tasty Spinach and Artichoke Flatbread' },
    price: 8.00,
    item_id: '405',
    url: "https://iwashyoudry.com/wp-content/uploads/2012/08/DSC01029-700x498.jpg",
    category: 'Flatbread',
  },
  {
    item: {name: 'Shrimp Flatbread', description: 'Our tasty Shrimp Flatbread' },
    price: 8.00,
    item_id: '406',
    url: "https://images-gmi-pmc.edge-generalmills.com/d7d85e22-06d7-4a5e-a7b7-14ed5dc79813.jpg",
    category: 'Flatbread',
  },
]);


// Make it fast to look up all studentId's
db.users.createIndex({student_id: 1});
db.items.createIndex({item_id: 1});
db.items.createIndex({category: 1});
