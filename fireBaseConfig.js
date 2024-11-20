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

// Define video URLs for each scenario
const videos = [
    ["videos/scenario1/video1.mp4", "videos/scenario1/video2.mp4"],
    ["videos/scenario2/video1.mp4", "videos/scenario2/video2.mp4"]
];

// Latin Square for 2 scenarios
const latinSquareScenarios = [
    [0, 1],
    [1, 0]
];

// Latin Square for 2 videos
const latinSquareVideos  = [
    [0, 1],
    [1, 0]
];

// Randomly select scenario and video order based on Latin Square
const randomScenarioOrder = latinSquareScenarios[Math.floor(Math.random() * latinSquareScenarios.length)];
let randomVideoOrders = randomScenarioOrder.map(scenarioIndex => latinSquareVideos[Math.floor(Math.random() * latinSquareVideos.length)]);

let scenarioIndex = 0;
let videoIndex = 0;
let responses = [];

// Load the first video in the randomized scenario and video order
function loadVideo() {
    if (scenarioIndex < randomScenarioOrder.length) {
        const currentScenario = randomScenarioOrder[scenarioIndex];
        const currentVideoOrder = randomVideoOrders[scenarioIndex];
        const currentVideo = videos[currentScenario][currentVideoOrder[videoIndex]];
        
        document.getElementById('videoSource').src = currentVideo;
        document.getElementById('videoPlayer').load();
        document.getElementById('questionnaire').style.display = 'none';
    } else {
        alert("Thank you for completing the questionnaire!");
        console.log(responses);
    }
}

// Display questionnaire after each video ends
document.getElementById('videoPlayer').addEventListener('ended', function() {
    document.getElementById('questionnaire').style.display = 'block';
});

// initialize firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var questionnaireDB = firebase.database().ref('Questionnaire'); 

document.getElementById("questionnaire").addEventListener("submit", submitForm);

function submitForm(e){
    e.preventDefault();
    var q1 = getElementVal("q1");
    var q2 = getElementVal("q2");
    var q3 = getElementVal("q3");
    var q4 = getElementVal("q4");
    var q5 = getElementVal("q5");
    var q6 = getElementVal("q6");
    var q7 = getElementVal("q7");
    var q8 = getElementVal("q8");
    var q9 = getElementVal("q9");
    var q10 = getElementVal("q10");
    var q11 = getElementVal("q11");
    var q12 = getElementVal("q12");
    var q13 = getElementVal("q13");
    var q14 = getElementVal("q14");
    var q15 = getElementVal("q15");
    

    const currentScenario = randomScenarioOrder[scenarioIndex];
    const currentVideoOrder = randomVideoOrders[scenarioIndex]; 
    

    console.log(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, currentScenario, currentVideoOrder);

    saveMessages(q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, currentScenario, currentVideoOrder);
     
    videoIndex++;
    if (videoIndex >= videos[0].length) {
        videoIndex = 0;
        scenarioIndex++;
    }
    
    loadVideo();
}

const saveMessages = (q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, currentScenario, currentVideoOrder) => {
    var newQuestionnaire = questionnaireDB.push();

    newQuestionnaire.set({
        q1 : q1,
        q2 : q2,
        q3 : q3,
        q4 : q4,
        q5 : q5,
        q6 : q6,
        q7 : q7,
        q8 : q8,
        q9 : q9,
        q10 : q10,
        q11 : q11,
        q12 : q12,
        q13 : q13,
        q14 : q14,
        q15 : q15, 
        scenario: currentScenario + 1,
        video: currentVideoOrder[videoIndex] + 1
    })
}

const getElementVal = (id) => {
    return document.getElementById(id).value;
}

// Initial load
loadVideo();

