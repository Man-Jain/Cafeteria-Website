var db = firebase.firestore();
var i = 2;
document.getElementById('form_poi').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getInputVal('name');
  var price = getInputVal('price');

var items = db.collection("items").doc('1');

// Set the "capital" field of the city 'DC'
return items.update({
    price: price
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});

document.querySelector('.alert').style.display = 'block';

setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);

  
document.getElementById('form_poi').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}
