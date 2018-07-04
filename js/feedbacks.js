db.collection("feedbacks").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      var results= doc.data();
      var result=""+console.log(doc.id, " => ", doc.data());
      var node = document.createElement("list"); 
var textnode = document.createTextNode("Mobile: " +doc.id +"Name: "+doc.data()["name"]+" Email: "+doc.data()["email"]+" Message: "+doc.data()["message"]);         // Create a text node
node.appendChild(textnode);                              // Append the text to <li>
document.getElementById("feedbacks").appendChild(node); 
    });
});

