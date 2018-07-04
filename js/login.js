  //https://howtofirebase.com/firebase-authentication-for-web-d58aad62cf6d
  //https://time2hack.com/2015/05/simple-login-in-firebase-web-api/
var config = {
    apiKey: "AIzaSyBaRX0yyJSeoJho68oKl0KMaAQ9rrNbX3E",
    authDomain: "cafeteria-235e5.firebaseapp.com",
    projectId: "cafeteria-235e5"
  };
  firebase.initializeApp(config);

var Auth = firebase.auth(); 
var auth=null;
firebase.auth().onAuthStateChanged(function(user) {
console.log(user);
});
document.getElementById("login").onclick = function () {
	var email= document.getElementById("email").value;
	var password= document.getElementById("pass").value;
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function(authData) {
        auth = authData;
  		console.log("Signed In"+auth);
        location.href = "index.html";
        })
        .catch(function(error) {
  		console.log("Sign in again"+error.code);
});
    };

document.getElementById("signup").onclick = function () {
        location.href = "signup.html";    
};
