var i;
var db = firebase.firestore();
document.getElementById('form_poi').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getInputVal('name');
  var price = parseInt(getInputVal('price'));
  var email = getInputVal('email');


/* var docRef = db.collection("itemcount").doc("count");

docRef.get().then(function(doc) {
    if (doc.exists) {
        i=doc.data()["number"];
        console.log(i);

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
var a= ""+i;*/
db.collection("/bking/"+email+"/orders").add({
    email:email,
    amount: price,
    item: name
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
/*
var itemc = db.collection("itemcount").doc("count");

i=i+1;
return items.update({
    number: i
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});
*/

document.querySelector('.alert').style.display = 'block';

setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);


document.getElementById('form_poi').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}
