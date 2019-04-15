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
baseList.listItems = [""];

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
