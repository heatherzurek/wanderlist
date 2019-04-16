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
  console.log(merged);
  return merged;
}
// console.log("test build",buildCheckBoxList(winterList, riverList));
//take return value from buildUserList(), display it with checkboxes for
//displayCheckBox(), and then pull checked values from that list, and compile it into the actual users list.

//create a function that displays merged list in a checkbox form for user selection
function displayCheckBoxList(listItemArray) {
  var html ="";
  listItemArray.forEach(function(listItem){
    html += "<input type='checkbox' name='userList' id='" + listItem.itemId + "'<label class='form-check-label' for='" + listItem.itemId + "'>" + listItem.itemName + "</label>";
  });
  console.log(html);
  $('output').append(html);
};


//Helper functions ------//
//attachEventListeners will control button clicks
function attachEventListeners() {
  var listItemArray = [];
  $("#listMaker").on("click", function(event) {
    var listName = $("#listName").val();
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
    $("input[name='userList']:checked").each(function() {
      selectedItemIds.push(this.id);
      console.log(this);
      });
      console.log(selectedItemIds);
      return selectedItemIds;
    });
}// end attachEventListeners

//Document.ready start
$(document).ready(function(){
  attachEventListeners();
})//end document.ready
