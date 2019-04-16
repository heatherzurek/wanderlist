git
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

List.prototype.displayCheckBox = function () {
  var html ="";
  this.listItems.forEach(function(listItem){
    html += "<input type='checkbox' name='userList' id='" + listItem.itemId + "'<label class='form-check-label' for='" + listItem.itemId + "'>" + listItem.itemName + "</label>";
  });
  console.log(html);
  $('output').append(html);
  return html;
};

// springList.displayCheckBox();
// $('output').append(springList.displayCheckBox);


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
  //will loop through selected items and push selected list items to new list ---//

    //push selected list items into new array and push to user
    $("#selectedItemsList").click(function (event) {
      event.preventDefault();
      console.log("clicked");
      var selectedItems = [];
      $("input[name='prePopList']:checked").each(function() {
        selectedItems.push($(this).val());
        });
        console.log(selectedItems);
        return selectedItems;
      });
}// end attachEventListeners



//Document.ready start
$(document).ready(function(){
  attachEventListeners();
  springList.displayCheckBox();
})//end document.ready
