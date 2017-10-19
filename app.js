(function () {
  // body...

  // Initialize Firebase
  var config = {
    
    apiKey: "AIzaSyBh8dJoVGw6-36cT5UlANJcu03I0qm97AM",
    authDomain: "quizapp-1e4fa.firebaseapp.com",
    databaseURL: "https://quizapp-1e4fa.firebaseio.com",
    projectId: "quizapp-1e4fa",
    storageBucket: "",
    messagingSenderId: "694539563036"
  }; 
  firebase.initializeApp(config);


// get elements
const txtEmail = document.getElementById('txtEmail');

const txtPassword = document.getElementById('txtPassword');

const btnLogin = document.getElementById('btnLogin');

const btnSignUp = document.getElementById('btnSignUp');

const btnLogout = document.getElementById('btnLogout');

btnLogin.addEventListener('click' , e => {

const email = txtEmail.value;

const pass = txtPassword.value;

const auth = firebase.auth();


const promise = auth.signInWithEmailAndPassword(email, pass);


promise.catch(e => console.log(e.message));



});

btnSignUp.addEventListener('click', e =>{


const email = txtEmail.value;

const pass = txtPassword.value;

const auth = firebase.auth();


const promise = auth.createUserWithEmailAndPassword(email, pass);


promise.catch(e => console.log(e.message));


});

btnLogout.addEventListener('click' , e => {

firebase.auth().signOut();

console.log("workplease");

});


firebase.auth().onAuthStateChanged(firebaseUser => {

if (firebaseUser){
console.log(firebaseUser);

if(firebaseUser) {
   window.location = 'dashboard.html'; //After successful login, user will be redirected to home.html
  }

btnLogout.classList.remove('hide');

}else{

console.log('not logged in');

btnLogout.classList.add('hide');

}

});



// var auth = firebase.auth();
// var emailAddress = user;

// auth.sendPasswordResetEmail(emailAddress).then(function() {
//   // Email sent.
// }).catch(function(error) {
//   // An error happened.
// });


}());