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
    // push the new array into user object
    newArray.listName = listName;
    user.addList(newArray);
    console.log(user);
  });
//Login submission function for firebase
  $("#newUserSubmit").click(function(){
    var userEmail = $("#email-input").val();
    var userPassword = $("#password-input").val();
    console.log(userEmail, userPassword);
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  })
};

//Sign in for existing user with firebase
$("#")
// end attachEventListeners


//Document.ready start
$(document).ready(function(){
  attachEventListeners();


})//end document.ready
