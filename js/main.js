var config = {
    apiKey: "AIzaSyBaRX0yyJSeoJho68oKl0KMaAQ9rrNbX3E",
    authDomain: "cafeteria-235e5.firebaseapp.com",
    projectId: "cafeteria-235e5"
  };
  firebase.initializeApp(config);

var db = firebase.firestore();

document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getInputVal('name');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

db.collection("feedbacks").doc(''+phone).set({
    name: name,
    email: email,
    message: message
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

document.querySelector('.alert').style.display = 'block';

setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
},3000);

  
document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}
