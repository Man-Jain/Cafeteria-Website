var config = {
    apiKey: "AIzaSyBaRX0yyJSeoJho68oKl0KMaAQ9rrNbX3E",
    authDomain: "cafeteria-235e5.firebaseapp.com",
    projectId: "cafeteria-235e5"
  };
  firebase.initializeApp(config);

var Auth = firebase.auth(); 
var auth=null;

document.getElementById("signup").onclick = function () {
	var email= document.getElementById("email").value;
	var password= document.getElementById("pass1").value;
	var cpassword= document.getElementById("pass").value;
	if (password==cpassword) {
		firebase.auth()
          .createUserWithEmailAndPassword(email, cpassword)
          .then(function(user){
        console.log("Account successfully created");
		document.querySelector('.alert').style.display = 'block';
		setTimeout(function(){
    	document.querySelector('.alert').style.display = 'none';
		},3000);
		setTimeout(function(){
		location.href="index.html";
		},3500);
          })
          .catch(function(error){
            console.log("Error creating user:", error);
          });
	}
	else{
		document.querySelector('.alert_notadded').style.display = 'block';
		setTimeout(function(){
    	document.querySelector('.alert_notadded').style.display = 'none';
		},3000);
}

};