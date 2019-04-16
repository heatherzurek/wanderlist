// Initialize Firebase
var config = {
  apiKey: "AIzaSyA7t22rL-uGxuS_Qy7aGJT5PqarJ7m4o3E",
  authDomain: "wanderlist-20885.firebaseapp.com",
  databaseURL: "https://wanderlist-20885.firebaseio.com",
  projectId: "wanderlist-20885",
  storageBucket: "wanderlist-20885.appspot.com",
  messagingSenderId: "802508684322"
};
var wanderlist = firebase.initializeApp(config);

var db = firebase.firestore(wanderlist)



function writeData(data) {
  db.collection("campLists").doc("uid").set({
    name: "hello"
  })

}
// writeData ()



var config = {
  apiKey: "apiKey",
  authDomain: "wanderlist-20885.firebaseapp.com",
  databaseURL: "https://wanderlist-20885.firebaseio.com/",
  storageBucket: "bucket.appspot.com"
};
firebase.initializeApp(config);

// save data to database
var database = firebase.database();


console.log(firebase.auth().currentUser);


firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user);
      } else {
    // No user is signed in.
  }
});
