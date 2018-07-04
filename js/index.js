var Auth = firebase.auth(); 
var auth = null;
var db = firebase.firestore();
var bcount = 1;
var fcount = 1;
var b_tbody = document.createElement("tbody");
var f_tbody = document.createElement("tbody");
db.collection("bookings").get().then(function(querySnapshot) {
    querySnapshot.forEach(function(doc) {
      console.log(doc.id, " => ", doc.data());
      var node = document.createElement("tr");
	  //var textnode = document.createTextNode("Email: " +doc.data()["email"]+" Item: " +doc.data()["item"]+" Amount: "+ doc.data()["amount"]);         // Create a text node
	  var cell= document.createElement("td");
	  var cell2= document.createElement("td");
	  var cell3= document.createElement("td");
  	  var cell4= document.createElement("td");
  	  var cell5= document.createElement("td");

	  node.appendChild(cell4)
	  node.appendChild(cell);
	  node.appendChild(cell2);
	  node.appendChild(cell3);
	  node.appendChild(cell5);
	  var textnode4=document.createTextNode(bcount);	  
	  var textnode=document.createTextNode(doc.data()["email"]);
	  var textnode2=document.createTextNode(doc.data()["name"]);
	  var textnode3=document.createTextNode(doc.data()["number"]);
	  var textnode5=document.createTextNode(doc.data()["phone"]);
	  cell.appendChild(textnode);
	  cell2.appendChild(textnode2);
	  cell3.appendChild(textnode3);
	  cell4.appendChild(textnode4);
	  cell5.appendChild(textnode5);
	  bcount++; 
	  b_tbody.appendChild(node);
	  document.getElementById("table1").appendChild(b_tbody); 
    });
});

db.collection("feedbacks").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
      console.log(doc.id, " => ", doc.data());
      var node = document.createElement("tr");
	  //var textnode = document.createTextNode("Email: " +doc.data()["email"]+" Item: " +doc.data()["item"]+" Amount: "+ doc.data()["amount"]);         // Create a text node
	  var cell= document.createElement("td");
	  var cell2= document.createElement("td");
	  var cell3= document.createElement("td");
  	  var cell4= document.createElement("td");
  	  var cell5= document.createElement("td");

	  node.appendChild(cell4)
	  node.appendChild(cell);
	  node.appendChild(cell2);
	  node.appendChild(cell5);	  
	  node.appendChild(cell3);
	  var textnode4=document.createTextNode(fcount);	  
	  var textnode=document.createTextNode(doc.data()["name"]);
	  var textnode2=document.createTextNode(doc.data()["email"]);
	  var textnode3=document.createTextNode(doc.data()["message"]);
	  var textnode5=document.createTextNode(doc.id);

	  cell.appendChild(textnode);
	  cell2.appendChild(textnode2);
	  cell3.appendChild(textnode3);
	  cell4.appendChild(textnode4);
	  cell5.appendChild(textnode5);
	  fcount++;
	  f_tbody.appendChild(node);
	  document.getElementById("table2").appendChild(f_tbody);
    });
});