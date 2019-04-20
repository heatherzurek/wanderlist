//WanderList Object and Methods -----//
function WanderList() {
  this.users = [],
  this.currentUserId = -1
}

var wanderList = new WanderList();

WanderList.prototype.addUser = function (user) {
  this.currentUserId ++;
  user.userId = this.currentUserId;
  for (var i = 0; i < this.users.length; i++) {
    if(this.users[i].isActive) {
      this.users[i].isActive = false;
    }
  }
  user.isActive = true;
  this.users.push(user);
}

WanderList.prototype.setActiveUser = function (userId) {
  for(var i = 0; i < this.users.length; i++) {
    if(this.users[i].isActive) {
      this.users[i].isActive = false;
    }
    if(this.users[i].userId === userId){
      this.users[i].isActive = true;
    }
  }
}

WanderList.prototype.getActiveUserId = function() {
  for(var i = 0; i < this.users.length; i++) {
    if(this.users[i].isActive) {
      return this.users[i].userId;
    }
  }
}

//wanderList.activeUser return the active User object
WanderList.prototype.activeUser = function () {
  for(i=0; i<this.users.length; i++){
    if(this.users[i].isActive){
      // console.log(this.users[i]);
      return this.users[i];
    }
  }
}

//wanderList.activeList() returns the active List object
WanderList.prototype.activeList = function () {
  var activeIndex = [];

  for(i=0; i < this.users.length; i++){
    if(this.users[i].isActive){
      activeIndex.push(i);
      for(j=0; j < this.users[i].lists.length; j++){
        if(this.users[i].lists[j].isActive){
          activeIndex.push(j);
        }
      }
    }
  }
  // console.log(activeListIndex);
  return this.users[activeIndex[0]].lists[activeIndex[1]];
}

//User Object and Methods -----------//
function User(userName) {
  this.userName = userName,
  this.email,
  this.password,
  this.userId,
  this.currentListId = -1,
  this.currentItemId = -1,
  this.lists = [],
  this.isActive = false
}

var user = new User("Herman");
var user2 = new User("Dustin");
var user3 = new User("Stacey");
wanderList.addUser(user);
wanderList.addUser(user2);
wanderList.addUser(user3);
console.log(wanderList);
console.log(wanderList.getActiveUserId());
wanderList.setActiveUser(0);
console.log(wanderList.getActiveUserId());



User.prototype.addList = function(list) {
  this.currentListId ++;
  list.listId = this.currentListId;
  this.lists.push(list);
  for (var i = 0; i < this.lists.length; i++) {
    if(this.lists[i].isActive) {
      this.lists[i].isActive = false;
    }
  }
  list.isActive = true;
}

User.prototype.getActiveListId = function() {
  for(var i = 0; i < this.lists.length; i++) {
    if(this.lists[i].isActive) {
      return this.lists[i].listId;
    }
  }
}

User.prototype.setActiveList = function (listId) {
  for(var i = 0; i < this.lists.length; i++) {
    if(this.lists[i].isActive) {
      this.lists[i].isActive = false;
    }
    if(this.lists[i].listId === listId){
      this.lists[i].isActive = true;
    }
  }
}

//List Object and Methods -----------//
function List(listName) {
  this.listName = listName,
  this.listId = 0,
  this.campers = [],
  this.currentCamperId = -1,
  this.listItems = [],
  this.isActive = false;
}

List.prototype.addListItem = function(listItem) {
  user.currentItemId ++;
  listItem.itemId = user.currentItemId;
  this.listItems.push(listItem);
  for (var i = 0; i < this.listItems.length; i++) {
    if(this.listItems[i].isActive) {
      this.listItems[i].isActive = false;
    }
  }
}

List.prototype.deleteListItem = function(listItemId) {
  for(i=0; i < this.listItems.length; i++){
    if(this.listItems[i].itemId === listItemId){
      this.listItems.splice(i, 1);
    }
  }
}

List.prototype.addCamper = function(camper) {
  this.currentCamperId ++;
  camper.camperId = this.currentCamperId;
  this.campers.push(camper);
}

var list1 = new List("Zion");
user.addList(list1);
var testId = user.getActiveListId();
console.log(testId);
var list2 = new List("Portland");

var list3 = new List ("China");
user.addList(list2);
console.log(user.getActiveListId());
user.addList(list3);
console.log(user.getActiveListId());
user.setActiveList(0);
console.log(user.getActiveListId());
// console.log(user);
user.setActiveList(1);
console.log(user.getActiveListId());
console.log(user);
var testIndex = wanderList.activeList();
console.log(testIndex);
console.log(wanderList.activeList());
wanderList.activeUser();

// Create Default Lists
var baseList = ["Sleeping pad", "Pillow", "Headlamp or Flashlights", "Extra Batteries", "Multi-tool", "Saw or Axe", "Stove and Fuel", "First Aid Kid", "Cook Pots", "Eating Utensils", "Cooking Utensils", "Knife", "Plates or Bowls", "Mug", "Biodegradable Soap", "Trash Bags"];
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

//ListItem Object and Methods -------//
function ListItem(itemName) {
  this.itemName = itemName,
  this.itemId = 0,
  this.isChecked = false
}

//Camper Object and Methods ---------//
function Camper(camperName, camperEmail) {
  this.camperName = camperName,
  this.camperEmail = camperEmail,
  this.camperId = 0
}
