var db = firebase.firestore();
var email="goyalsharda258@gmail.com";
var table=document.getElementById("table1");
var qwe = document.createElement("tbody");
var count = 1;
db.collection("/bking/"+email+"/orders").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      var results= doc.data();
      console.log(doc.id, " => ", doc.data());
      var node = document.createElement("tr");
	  //var textnode = document.createTextNode("Email: " +doc.data()["email"]+" Item: " +doc.data()["item"]+" Amount: "+ doc.data()["amount"]);         // Create a text node
	  var cell= document.createElement("td");
	  var cell2= document.createElement("td");
	  var cell3= document.createElement("td");
  	  var cell4= document.createElement("td");

	  node.appendChild(cell4)
	  node.appendChild(cell);
	  node.appendChild(cell2);
	  node.appendChild(cell3);
	  var textnode=document.createTextNode(doc.data()["email"]);
	  var textnode2=document.createTextNode(doc.data()["item"]);
	  var textnode3=document.createTextNode(doc.data()["amount"]);
	  var textnode4=document.createTextNode(count);
	  cell.appendChild(textnode);
	  cell2.appendChild(textnode2);
	  cell3.appendChild(textnode3);
	  cell4.appendChild(textnode4);
	  count++; // Append the text to <li>
	  qwe.appendChild(node);
	  document.getElementById("table1").appendChild(qwe); 
    });
});

