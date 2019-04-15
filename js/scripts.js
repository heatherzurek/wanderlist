//WanderList Object and Methods -----//
function WanderList() {
  this.users = [],
  this.currentUserId
}

WanderList.prototype.addUser = function (user) {
  this.currentUserId ++;
  user.usertId = this.currentUserId;
  this.users.push(user);
};

//User Object and Methods -----------//
function User(userName) {
  this.userName = userName,
  this.email,
  this.password,
  this.userId,
  this.currentListId = -1,
  this.currentItemId = -1,
  this.lists = []

}

var user = new User("Herman");


User.prototype.addList = function (list) {
  this.currentListId ++;
  list.listId = this.currentListId;
  this.lists.push(list);
};

//List Object and Methods -----------//
function List(listName) {
  this.listName = listName,
  this.listId = 0,
  this.campers = [],
  this.currentCamperId,
  this.listItems = []
}

List.prototype.addListItem = function (listItem) {
  user.currentItemId ++;
  listItem.itemId = user.currentItemId;
  this.listItems.push(listItem);
};

List.prototype.addCamper = function (camper) {
  this.currentCamperId ++;
  camper.camperId = this.currentCamperId;
  this.campers.push(camper);
};

function DefaultList() {
  this.defaultList = [];
}

// Create Default Lists
var baseList = ["Sleeping pad with inflation device if necessey", "Pillow", "Headlamp or Flashlights", "Extra Batteries", "Multi-tool", "Saw or Axe", "Stove and Fuel", "First Aid Kid", "Cook Pots", "Eating Utensils", "Cooking Utensils", "Knife", "Plates or Bowls", "Mug", "Biodegradable Soap", "Trash Bags"];
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

user.addList(springList);
user.addList(fallList);
user.addList(summerList);
user.addList(winterList);
user.addList(forestList);
user.addList(desertList);
user.addList(mountainList);
user.addList(riverList);
user.addList(baseList);
console.log(user);

//ListItem Object and Methods -------//
function ListItem(itemName) {
  this.itemName = itemName,
  this.itemId = 0,
  this.isChecked = false
}

//Camper Object and Methods ---------//
function Camper(camperName) {
  this.camperName = camperName,
  this.camperEmail = ""
}

var userGenerated = [];
function buildUserList(seasonInput, terrainInput){
  let inputArray = [seasonInput, terrainInput];
  inputArray.forEach(function(input){
    for(i=0;i<defaultLists.length;i++){
      if(defaultLists[i].listName === input){
        userGenerated.push(defaultLists[i]);
      };
    };
  });
  console.log(userGenerated);
 var one = userGenerated[0].listItems;
 var two = userGenerated[1].listItems;
 console.log(one,two);
 var merged = $.merge(one,two);
 // var mergeConcat = one.concat(two);
  console.log(merged);
}
//create a function that displays merged list in a checkbox form for user selection
//push that selection to user

//Helper functions ------//
//attachEventListeners will control button clicks
function attachEventListeners() {
  $("#listMaker").on("click", function(event) {
    var listName = $("#listName").val();
    var seasonSelected = $("#season").val();
    var terrainSelected = $("#terrain").val();
    buildUserList(seasonSelected, terrainSelected);
    $("#userListName").text(listName);
    $("#userSeasonSelected").text(seasonSelected);
    $("#userTerrainSelected").text(terrainSelected);
    console.log(terrainSelected, seasonSelected);
    // console.log(defaultLists);
    // console.log(userGenerated);
  });
}


//Document.ready start
$(document).ready(function(){
  attachEventListeners();
  // console.log(baseList);
})//end document.ready
