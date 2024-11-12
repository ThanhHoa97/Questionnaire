const firebaseConfig = {
    apiKey: "AIzaSyB3YF0LJmMG_xO6JzO4GC8gX3rzLQHeM8M",
    authDomain: "questionnaire-956d0.firebaseapp.com",
    databaseURL: "https://questionnaire-956d0-default-rtdb.firebaseio.com",
    projectId: "questionnaire-956d0",
    storageBucket: "questionnaire-956d0.firebasestorage.app",
    messagingSenderId: "984927383017",
    appId: "1:984927383017:web:64593b1c1f379c6dfc2f78",
    measurementId: "G-3P3EZQGE89"
  };

// initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var contactformDB = firebase.database().ref('Questionnaire'); 

document.getElementById("Questionnnaire").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();

     
}

const getElementVal = (id) => {
    return document.getElementById(id).ariaValueMax;
}

