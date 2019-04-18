//WanderList Object and Methods -----//
function WanderList() {
  this.users = [],
  this.currentUserId = -1
}

var wanderList = new WanderList();

WanderList.prototype.addUser = function(user) {
  this.currentUserId ++;
  user.userId = this.currentUserId;
  for (var i = 0; i < this.users.length; i++) {
    if(this.users[i].isActive) {
      this.users[i].isActive = false;
    }
  };
  user.isActive = true;
  this.users.push(user);
};

WanderList.prototype.getActiveUser = function() {
  for(var i = 0; i < this.users.length; i++) {
    if(this.users[i].isActive) {
      return this.users[i].userId;
    }
  };
};

//User Object and Methods -----------//
function User(userName) {
  this.userName = userName,
  this.email,
  this.password,
  this.userId,
  this.currentListId = -1,
  this.currentItemId = -1,
  this.currentCamperId = -1,
  this.lists = [],
  this.active = false
}

var user = new User("Herman");
var user2 = new User("Heather");
var user3 = new User("Reese");

wanderList.addUser(user);
wanderList.addUser(user2);
wanderList.addUser(user3);

User.prototype.addList = function(list) {
  this.currentListId ++;
  list.listId = this.currentListId;
  this.lists.push(list)
};

// User.prototype.getActiveList = function() {
//   for(var i = 0; i < this.listItems.length; i++) {
//     if(this.listItems[i].isActive) {
//       return this.listItems[i].itemId;
//     };
// };

//List Object and Methods -----------//
function List(listName) {
  this.listName = listName,
  this.listId = 0,
  this.campers = [],
  this.listItems = [],
  this.listisActive = false
}

List.prototype.addListItem = function(listItem) {
  user.currentItemId ++;
  listItem.itemId = user.currentItemId;
  this.listItems.push(listItem);
  for (var i = 0; i < this.listItems.length; i++) {
    if(this.listItems[i].isActive) {
      this.listItems[i].isActive = false;
    }
  };
};

List.prototype.deleteListItem = function(listItemId) {
  for(i=0; i < this.listItems.length; i++) {
    if(this.listItems[i].itemId === listItemId) {
      this.listItems.splice(i, 1);
    }
  };
};

List.prototype.addCamper = function(camper) {
  user.currentCamperId ++;
  camper.camperId = user.currentCamperId;
  this.campers.push(camper)
};

// var list1 = new List("Zion");
// var list2 = new List("Portland");
// var list3 = new List ("China");
// user3.addListItem(list1);
// user3.addListItem(list2);
// console.log(user3.getActiveList());
// user3.addListItem(list3);
// console.log(user3.getActiveList());

// Create Default Lists
var baseList = ["Sleeping pad", "Pillow", "Headlamp or Flashlights", "Extra Batteries", "Multi-tool", "Saw or Axe", "Stove and Fuel", "First Aid Kit", "Cook Pots", "Eating Utensils", "Cooking Utensils", "Knife", "Plates or Bowls", "Mug", "Biodegradable Soap", "Trash Bags"];
var summerList = ["3 Season Tent", "35° Sleeping bag", "Sunshade Tarp", "Sunscreen", "Microfiber towel", "Insect Repellent", "Matches and Firestarters"];
var fallList = ["3 Season Tent", "0° to 35° Sleeping Bag", "Sunscreen", "Waterproof matches and firestarters", "Tarp"]
var springList = ["3 Season Tent", "0° to 35° Sleeping Bag", "Sleeping bag liner", "Insect Repellent", "Rainfly", "Dry bags or ziplocks", "Rainwear", "Waterproof matches and firestarters"]
var winterList = ["Four season tent with footprint", "-30° to 20° Sleeping bag", "Sleeping bag liner", "Dry bags", "Snow shovel", "Waterproof matches and firestatrers", "Tarp"]
var forestList = ["Bear canister", "Rope", "Bear mace"]
var desertList = ["Extra water", "Bandana"]
var mountainList = ["Bear canister", "Rope", "Bear mace", "Trekking poles"]
var riverList = ["Bear canister", "Rope", "Bear mace"];

function createList(array, listName) {
  var newList = new List(listName);
  for(i=0; i < array.length; i++){
    var newItem = new ListItem(array[i]);
    newList.addListItem(newItem);
  };
  return newList;
}

var springList = createList(springList, "springList");
var fallList = createList(fallList, "fallList");
var summerList = createList(summerList, "summerList");
var winterList = createList(winterList, "winterList");
var forestList = createList(forestList, "forestList");
var desertList = createList(desertList, "desertList");
var mountainList = createList(mountainList, "mountainList");
var riverList = createList(riverList, "riverList");
var baseList = createList(baseList, "baseList");

var defaultLists = [baseList, summerList, fallList, springList, winterList, forestList, desertList, mountainList, riverList];

// var defaults = createList(defaultLists, "defaultLists");
// console.log(defaults);

// user.addList(springList);
// user.addList(fallList);
// user.addList(summerList);
// user.addList(winterList);
// user.addList(forestList);
// user.addList(desertList);
// user.addList(mountainList);
// user.addList(riverList);
// user.addList(baseList);
// console.log(user);

//ListItem Object and Methods -------//
function ListItem(itemName) {
  this.itemName = itemName,
  this.itemId = 0,
  this.isChecked = false
}

//Camper Object and Methods ---------//
function Camper(camperName, camperEmail, camperId) {
  this.camperName = camperName,
  this.camperEmail = camperEmail,
  this.camperId = 0
}
