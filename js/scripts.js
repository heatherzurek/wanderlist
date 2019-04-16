
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
