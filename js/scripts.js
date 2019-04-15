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
  this.userName = name,
  this.email,
  this.password,
  this.userId,
  this.currentListId = -1,
  this.lists = []

}

User.prototype.addList = function (list) {
  this.currentListId ++;
  list.listId = this.currentListId;
  this.lists.push(list);
};

//List Object and Methods -----------//
function List(listName) {
  this.listName = listName,
  this.listId = 0,
  this.currentItemId,
  this.campers = [],
  this.currentCamperId,
  this.listItems = []
}

// List Example
var baseList = new List(baseList);
baseList.listItems = ["Sleeping pad with inflation device if necessey", "Pillow", "Headlamp or Flashlights", "Extra Batteries", "Multi-tool", "Saw or Axe", "Stove and Fuel", "First Aid Kid", "Cook Pots", "Eating Utensils", "Cooking Utensils", "Knife", "Plates or Bowls", "Mug", "Biodegradable Soap", "Trash Bags"];

var summerList = new List(summerList);
summerList.listItems = ["3 Season Tent", "35° Sleeping bag", "Sunshade Tarp", "Sunscreen", "Microfiber towel", "Insect Repellent", "Matches and Firestarters"];

var fallList = new List(fallList);
fallList.listItems = ["3 Season Tent", "0° to 35° Sleeping Bag", "Sunscreen", "Waterproof matches and firestarters", "Tarp"]

var springList = new List(springList);
springList.listItems = ["3 Season Tent", "0° to 35° Sleeping Bag", "Sleeping bag liner", "Insect Repellent", "Rainfly", "Dry bags or ziplocks", "Rainwear", "Waterproof matches and firestarters"]

var winterList = new List(winterList);
winterList.listItems = ["Four season tent with footprint", "-30° to 20° Sleeping bag", "Sleeping bag liner", "Dry bags", "Snow shovel", "Waterproof matches and firestatrers", "Tarp"]

var forestList = new List(forestList);
forestList.listItems =["Bear canister", "Rope", "Bear mace"]

var desertList = new List(desertList);
desertList.listItems =["Extra water", "Bandana"]

var mountainList = new List(mountainList);
mountainList.listItems =["Bear canister", "Rope", "Bear mace", "Trekking poles"]

var riverList = new List(riverList);
riverList.listItems =["Bear canister", "Rope", "Bear mace"]


List.prototype.addList = function (listItem) {
  this.currentItemId ++;
  listItem.itemtId = this.currentItemId;
  this.listItems.push(listItem);
};

List.prototype.addCamper = function (camper) {
  this.currentCamperId ++;
  camper.camperId = this.currentCamperId;
  this.campers.push(camper);
};

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

//Helper functions ------//
//attachEventListeners will control button clicks
function attachEventListeners() {
  $("#listMaker").on("click", function(event) {
    var listName = $("#listName").val();
    var seasonSelected = $("#season").val();
    var terrainSelected = $("#terrain").val();
    $("#userListName").text(listName);
    $("#userSeasonSelected").text(seasonSelected);
    $("#userTerrainSelected").text(terrainSelected);
  });
}

//Document.ready start
$(document).ready(function(){
  attachEventListeners();
})//end document.ready
