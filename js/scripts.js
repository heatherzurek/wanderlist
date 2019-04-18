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
  $("#listModal output").append(html);
};

function buildNewListObject(array){
  var newListObject = new List();
  newListObject.listName = array.listName;

  array.forEach(function(listItem){
    newListObject.addListItem(listItem);
  })
  return newListObject;
}

//buildAmzLink() will build a search link based on listItem.itemName
function buildAmzLink(listItem) {
  var itemName = listItem.itemName.split(" ");
  var amazonRef = "https:" +"/"+"/"+ "www.amazon.com" + "/" + "s?k=" + itemName[0];

  for(i=1; i<itemName.length; i++){
      amazonRef += "+" + itemName[i];
    }
    console.log(amazonRef);
    return amazonRef;
  }

//displayUserList() displays user list on the screen
function displayUserList(listObject) {
  var list = listObject;
$(".bigImg-2-content output").empty();
  listObject.listItems.forEach(function(listItem) {
    var linkedItem = "<a href='" + buildAmzLink(listItem) + "' target='_blank'>" + listItem.itemName + "</a>";
    $(".bigImg-2-content output").append("<li id='" + listItem.itemId + "'>" + linkedItem + "<button class='deleteItem'>Delete</button></li>");
    // $(".bigImg-2-content output").append("<li id='" + listItem.itemId + "'>" + listItem.itemName + "<button class='deleteItem'>Delete</button></li>");
  })
  checkIsPacked(list);
}

//checkIsPacked() checks listItem for isChecked and add/removes the
// .isPacked class accordingly
function checkIsPacked (listObject) {
  for (i=0; i < listObject.listItems.length; i++ ) {
    var itemId = "#" + listObject.listItems[i].itemId;
    if(listObject.listItems[i].isChecked) {
      $(itemId).addClass("isPacked");
    }
    if(!listObject.listItems[i].isChecked){
      $(itemId).removeClass("isPacked");
    }
  }
}

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
      selectedItemIds.forEach(function(id) {
      for (i = 0; i < listItemArray.length; i++) {
        if (id == listItemArray[i].itemId) {
          newArray.push(listItemArray[i]);
        };
      }
    });
    newArray.listName = listName;

    user.addList(buildNewListObject(newArray));

    //output list of selected items from user object
    console.log(user);
    displayUserList(user.lists[0]);
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
    user.lists[0].addListItem(newListItem);
    displayUserList(user.lists[0]);
    $("#addPersonalItem").val('');
  });

  //toggle items as Packed
  $(".bigImg-2").on("click", "li", function(event) {
    var listItemId = $(this).attr("id");

    for (i = 0; i < user.lists[0].listItems.length; i++){
      if (listItemId == user.lists[0].listItems[i].itemId){
        if(!user.lists[0].listItems[i].isChecked){
          user.lists[0].listItems[i].isChecked = true;
          break;
        } else {
          user.lists[0].listItems[i].isChecked = false;
        }
      }
    }
    checkIsPacked(user.lists[0]);
    var number = parseInt(listItemId);
  })

//Login submission function for firebase TODO
  // $("#newUserSubmit").click(function(){
  //   var userEmail = $("#email-input").val();
  //   var userPassword = $("#password-input").val();
  //   console.log(userEmail, userPassword);
  //   firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // ...
  //   });
  // })

  //#modalGoBack click closes modal without pushing list,
  //and clears modal output div
  $("#modalGoBack").on("click",function(){
    $("#listModal").on('hidden.bs.modal', function(e){
      $("#listModal output").empty();
    })
  })

  //#deleteListItem click deletes selected item from the users list
  $(".bigImg-2-content").on("click", ".deleteItem", function(event){
    var itemId = parseInt(event.target.parentNode.id);

    user.lists[0].deleteListItem(itemId);
    displayUserList(user.lists[0]);
  })

  $(".bigImg-2-content").on("click", "a", function(event){
    event.stopPropagation();
  })

};// end attachEventListeners

//Document.ready start
$(document).ready(function(){

  attachEventListeners();

})//end document.ready
