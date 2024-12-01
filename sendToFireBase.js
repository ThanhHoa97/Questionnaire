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
//const app = firebase.initializeApp(firebaseConfig);

// Function to send data to Firebase
function sendDataToFirebase() {
    const ref = firebase.database().ref('Questionnaire');
    ref.push(answers)
        .then(() => {
            alert("Data successfully sent to Firebase!");
        })
        .catch((error) => {
            console.error("Error sending data to Firebase:", error);
            alert("Failed to send data to Firebase.");
        });
}

function sendDataScenarioToFirebase() {
    const ref = firebase.database().ref('Questionnaire');
    ref.push(scenarioData)
        .then(() => {
            alert("Data successfully sent to Firebase!");
        })
        .catch((error) => {
            console.error("Error sending data to Firebase:", error);
            alert("Failed to send data to Firebase.");
        });
}


//reference your database
//var questionnaireDB = firebase.database().ref('Questionnaire'); 

// Add a button in your HTML to trigger sending data to Firebase
document.getElementById("send-to-firebase-button").addEventListener("click", sendDataToFirebase);
document.getElementById("next-scenario-button").addEventListener("click", sendDataScenarioToFirebase);
