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

//displayCheckBoxList() displays merged List object in checkbox form for user selection
function displayCheckBoxList(listItemArray) {
  var html ="";

  listItemArray.forEach(function(listItem){
    html += "<li><input type='checkbox' name='userList' id='" + listItem.itemId + "' checked='checked'><label class='form-check-label' for='" + listItem.itemId + "'>" + listItem.itemName + "</label></li>";
  });
  // $('#seasonAndTerrainList').append(html);
  $("#listModal output").append(html);
};

//attachEventListeners() will control button clicks
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
    $("#listModal").modal({backdrop: 'static', keyboard:false});
    $("#listModal").modal('show');
  });

  //push selected list items into new array and push to user List array
  $("#selectedItemsSubmit").click(function (event) {
    event.preventDefault();
    var selectedItemIds = [];
    var newArray = [];

    $('input[name="userList"]:checked').each(function() {
      selectedItemIds.push(this.id);
      });
      // console.log("selectedItemIds", selectedItemIds);

      selectedItemIds.forEach(function(id) {
      for (i = 0; i < listItemArray.length; i++) {
        if (id == listItemArray[i].itemId) {
          newArray.push(listItemArray[i]);
        };
      }
    });
    //push the new array into user object
    newArray.listName = listName;
    user.addList(newArray);
    // console.log(user);
    // console.log(listItemArray);

    //output list of selected items from newArray
    var html ="";
    newArray.forEach(function(listItem){
      $(".bigImg-2-content output").append("<li>" + listItem.itemName + "</li>");
    });
    // $("#seasonAndTerrainList").hide();
    // $("#selectedItemsList").hide();
    // $("#personalItems").show();
    $(".bigImg-2-content").removeClass("hidden");
    $("#listModal").modal('hide');
    $("#listModal").on('hidden.bs.modal', function(e){
      $("#listModal output").empty();
    })
  });

  //#addItemButton pushes new item Objects into the users current list
  // TODO -- turn items into listItem Objects, push into a list Object
  $("#addItemButton").click(function(event) {
    event.preventDefault();
    var userItem = $("#addPersonalItem").val();
    var newListItem = new ListItem(userItem);
    var newUserList = new List();

    // user.lists[0].push(newListItem);
    newUserList.addListItem(newListItem);
    console.log(newUserList);
    console.log(user.lists[0]);

    //find user's list and add item to that list

    console.log(userItem);
    $("#userPopList").append("<li>" + userItem + "</li>");

  //save user inputs and push all previously selected items and user inputs into a new lists ---//

  });

//allow user to check off items



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

  //#modalGoBack click closes modal without pushing list,
  //and clears modal output div
  $("#modalGoBack").on("click",function(){
    $("#listModal").on('hidden.bs.modal', function(e){
      $("#listModal output").empty();
    })
  })
};// end attachEventListeners

//Sign in for existing user with firebase




//Document.ready start
$(document).ready(function(){
  attachEventListeners();


})//end document.ready
