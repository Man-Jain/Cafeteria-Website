var config = {
    apiKey: "AIzaSyBaRX0yyJSeoJho68oKl0KMaAQ9rrNbX3E",
    authDomain: "cafeteria-235e5.firebaseapp.com",
    projectId: "cafeteria-235e5"
  };
  firebase.initializeApp(config);

var db = firebase.firestore();

firebase.auth().onAuthStateChanged(function(user) {
 window.user = user; // user is undefined if no user signed in
 console.log(user);
});

db.collection("bookings").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      var results= doc.data();
      var result=""+console.log(doc.id, " => ", doc.data());
      var node = document.createElement("list"); 
var textnode = document.createTextNode("Email: " +doc.data()["email"]+" Name: " +doc.data()["name"]+" Number "+ doc.data()["number"]+" Phone: " +doc.data()["phone"]);         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("contents").appendChild(node); 
    });
});

