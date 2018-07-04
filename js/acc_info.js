var config = {
    apiKey: "AIzaSyBaRX0yyJSeoJho68oKl0KMaAQ9rrNbX3E",
    authDomain: "cafeteria-235e5.firebaseapp.com",
    projectId: "cafeteria-235e5"
  };
  firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
if(user==null){
        location.href="login.html";
      } 
console.log(user["email"]);  
document.getElementById("acc_email").innerHTML = ""+user["email"];
;});

document.getElementById("logout").onclick = function () {
        firebase.auth().signOut()
        .then(function(authData) {
        auth = authData;
  		console.log("Signed In");
        location.href = "login.html";
        })
        .catch(function(error) {
  		console.log("Not signed out "+error.code);
});
    };