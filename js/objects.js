//WanderList Object and Methods -----//
function WanderList() {
  this.users = [],
  this.currentUserId = -1
}
 var wanderList = new WanderList();

WanderList.prototype.addUser = function (user) {
  this.currentUserId ++;
  user.userId = this.currentUserId;

  for(i=0; i < this.users.length; i++){
    if(this.users[i].isActive){
      this.users[i].isActive = false;
    }
  }
  user.isActive = true;
  this.users.push(user);
};

WanderList.prototype.setActiveUser = function (userId) {
  this.users.forEach(function(user){
    user.isActive = false;
    if (user.userId === userId){
      user.isActive = true;
    }
  })
};

WanderList.prototype.getActiveUser = function () {
  for(i=0; i < this.users.length; i++){
    if(this.users[i].isActive){
      return this.users[i].userId;
    }
  }
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
  this.isActive = false
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

  for(i=0; i < this.lists.length; i++){
    if(this.lists[i].isActive){
      this.lists[i].isActive = false;
    }
  }
  list.isActive = true;
  this.lists.push(list);
};

User.prototype.setActiveList = function (listId) {
  this.lists.forEach(function(list){
    list.isActive = false;
    if (list.listId === listId){
      list.isActive = true;
    }
  })
};

User.prototype.getActiveList = function () {
  for(i=0; i < this.lists.length; i++){
    if(this.lists[i].isActive){
      return this.lists[i].listId;
    }
  }
};

//List Object and Methods -----------//
function List(listName) {
  this.listName = listName,
  this.listId = 0,
  this.campers = [],
  this.listItems = [],
  this.isActive = false
}

List.prototype.addListItem = function(listItem) {
  user.currentItemId ++;
  listItem.itemId = user.currentItemId;
};

List.prototype.deleteListItem = function(listItemId) {
  for(i=0; i < this.listItems.length; i++){
    if(this.listItems[i].itemId === listItemId){
      this.listItems.splice(i, 1);
    }
  }
}

List.prototype.addCamper = function(camper) {
  user.currentCamperId ++;
  camper.camperId = user.currentCamperId;
  this.campers.push(camper);
};

var list1 = new List("zion");
var list2 = new List("portland");
var list3 = new List("china");
user3.addList(list1);
user3.addList(list2);
user3.addList(list3);
// console.log(user3.getActiveList());
// console.log(user3.getActiveList());
// user3.setActiveList(1);
// console.log(user3.getActiveList());
// console.log(wanderList);
// wanderList.setActiveUser(1);
// console.log(wanderList.getActiveUser());
console.log(wanderList);


// Create Default Lists
var baseList = ["Sleeping pad with inflation device if necessary", "Pillow", "Headlamp or Flashlights", "Extra Batteries", "Multi-tool", "Saw or Axe", "Stove and Fuel", "First Aid Kit", "Cook Pots", "Eating Utensils", "Cooking Utensils", "Knife", "Plates or Bowls", "Mug", "Biodegradable Soap", "Trash Bags"];
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
  this.camperId = 0,
  this.camperName = camperName,
  this.camperEmail = camperEmail
}
