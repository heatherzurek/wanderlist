//buildCheckBoxList compiles a new list based on baseList and the two
//lists from user input
function buildCheckBoxList(seasonInput, terrainInput){
  var inputArray = [seasonInput, terrainInput];
  var outPutArray = [baseList];
  var merged = [];

  inputArray.forEach(function(input){
    for(i=0;i<defaultLists.length;i++){
      if(defaultLists[i].listName === input){
        outPutArray.push(defaultLists[i]);
      };
    };
  })
  outPutArray.forEach(function(list){
    for(j=0; j < list.listItems.length; j++){
      merged.push(list.listItems[j]);
    };
  })
  return merged;
}
// console.log("test build",buildCheckBoxList(winterList, riverList));
//take return value from buildUserList(), display it with checkboxes for
//displayCheckBox(), and then pull checked values from that list, and compile it into the actual users list.

//create a function that displays merged list in a checkbox form for user selection
function displayCheckBoxList(listItemArray) {
  var html ="";
  listItemArray.forEach(function(listItem){
    html += "<li><input type='checkbox' name='userList' id='" + listItem.itemId + "'<label class='form-check-label' for='" + listItem.itemId + "'>" + listItem.itemName + "</label></li>";
  });
  $('#seasonAndTerrainList').append(html);
};


//Helper functions ------//
//attachEventListeners will control button clicks
function attachEventListeners() {
  var listItemArray = [];
  var listName = "";
  $("#listMaker").on("click", function(event) {
    listName = $("#listName").val();
    var seasonSelected = $("#season").val();
    var terrainSelected = $("#terrain").val();

    $("#userListName").text(listName);
    $("#userSeasonSelected").text(seasonSelected);
    $("#userTerrainSelected").text(terrainSelected);
    listItemArray = buildCheckBoxList(seasonSelected, terrainSelected);
    displayCheckBoxList(listItemArray);
  });

  //will loop through selected items and push selected list items to new list ---//

  //push selected list items into new array and push to user
  $("#selectedItemsList").click(function (event) {
    event.preventDefault();
    var selectedItemIds = [];
    $('input[name="userList"]:checked').each(function() {
      selectedItemIds.push(this.id);
      });
      console.log("selectedItemIds", selectedItemIds);

      var newArray = [];
      selectedItemIds.forEach(function(id) {
      for (i = 0; i < listItemArray.length; i++) {
        if (id == listItemArray[i].itemId) {
          newArray.push(listItemArray[i]);
        };
      }
    });
    //push the new array into user object ---//
    newArray.listName = listName;
    user.addList(newArray);
    // console.log(user);
    // console.log(listItemArray);

    //output list of selected items from newArray ---//
    var html ="";
    newArray.forEach(function(listItem){
      html += "<li><input type='checkbox' name='userList' id='" + listItem.itemId + "'<label class='form-check-label' for='" + listItem.itemId + "'>" + listItem.itemName + "</label></li>";
    });
    $("#seasonAndTerrainList").hide();
    $("#selectedItemsList").hide();
    $("#personalItems").show();
    $("#userPopList").append(html);
  });

//allow user to add items ---//
$("#addItemButton").click(function(event) {
  event.preventDefault();
  var userItem = $("#addPersonalItem").val();
  var newListItem = new ListItem(userItem);
  // user.lists[0].push(newListItem);
  var newUserList = new List();
  newUserList.addListItem(newListItem);
  console.log(newUserList);

  console.log(user.lists[0]);

  //find user's list and add item to that list

  console.log(userItem);
  $("#userPopList").append("<li>" + userItem + "</li>");

//save user inputs and push all previously selected items and user inputs into a new lists ---//

});

//allow user to check off items



};
// end attachEventListeners


//Document.ready start
$(document).ready(function(){
  attachEventListeners();
})//end document.ready
