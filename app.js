import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";


// Initialize Firebase
const app = initializeApp({
    apiKey: "AIzaSyAQKz5CkKOzIVPkMIjRjYDhbU7d08Rg2Xs",
    authDomain: "signupsignin-b3e8c.firebaseapp.com",
    projectId: "signupsignin-b3e8c",
    storageBucket: "signupsignin-b3e8c.appspot.com",
    messagingSenderId: "631216394556",
    appId: "1:631216394556:web:fe9c625b92339476468e39"
});

const auth = getAuth(app)

SignUP.addEventListener('click', (e) => {
    // console.log("Running")
    var email = document.getElementById('semail').value;
    var password = document.getElementById('spassword').value;

    console.log(`Email : ${email} and Password : ${password}`)

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
})
