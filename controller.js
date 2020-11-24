const firebase = require("firebase");
require("firebase/firestore");
require("firebase/auth");

const firebaseConfig = {
    apiKey: "AIzaSyBHyOIcIBbAAJ4CUgRMjNo4lck9FIIiY54",
    authDomain: "pongstattracker.firebaseapp.com",
    databaseURL: "https://pongstattracker.firebaseio.com",
    projectId: "pongstattracker",
    storageBucket: "pongstattracker.appspot.com",
    messagingSenderId: "874355232113",
    appId: "1:874355232113:web:f4c6802954a7193f9b7ad0",
    measurementId: "G-6H8RS5YSKE"
  };

  firebase.initializeApp(firebaseConfig);

  firebase.auth().signInWithEmailAndPassword("benrosenberger32@gmail.com", "brrose32")
  .then((user) => {
    // Signed in 
    // ...
    console.log("hello user signed in");
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log('wtf');
    console.log(errorCode);
  });

  //const dataBase = firebase.firestore();
  const db = firebase.database();
  const fs = firebase.firestore();

  exports.apiTest = async (req, res, next) => {
    console.log('function');
    db.ref('/profiles/' + "testuser").once("value").then((snapshot) => {
        console.log(snapshot.val());
      });
    /*let body = ''
    const snapshot = await dataBase.collection('profiles').get();
    snapshot.forEach((doc) => {
        body += doc.data().first
        
    });
    res.status(200).json({
        body: 'This is a Server API Test ' + body + ' test'
    });*/
};

exports.leaderboard = async (req, res, next) => {
    console.log("leaderboard func");
    db.ref('/profiles/').once("value").then((snapshot) => {
        console.log(snapshot.val());
    });
}
exports.playerProfile = async (req, res, next) => {
    let x = await db.ref('/profiles/' + req.params.username).once("value").then((snapshot) => {
        return snapshot.val();
    });
    console.log("player profile function" + JSON.stringify(x));
    res.status(200).send(x);
    
}
exports.createNewUser = async (req, res, next) => {
    console.log("create function");
   // console.log(req.params.username);
    let x = await db.ref('profiles/' + req.params.username).set({
        username: req.params.username,
        cupsmade: 0,
        shots: 0,
        gamesPlayed: 0,
        name: req.params.name,
        finalCupsMade: 0
    });
    res.send("thanks butt munch");
}

exports.deleteProfile = async (req, res, next) => {
    console.log("delete function " + req.params.username);
    let x = await db.ref('profiles/' + req.params.username).remove();
    res.send("profile deleted");
}


//currently set up for passing variables from recent game in url want to add
//axios to add them as the body of request 
exports.updateStats = async(req, res, next) => {
    console.log("updateStats function");
    //console.log(req.body);
    //console.log(req.params.fc)
    let previous = await db.ref('/profiles/' + req.params.username).once("value").then((snapshot) => {
        return snapshot.val();
  });
    const careerCupsMade = parseInt(req.params.c) + parseInt(previous.cupsmade);
    const careerFinalCupsMade = parseInt(req.params.fc) + parseInt(previous.finalCupsMade);
    const careerShots = parseInt(req.params.s) + parseInt(previous.shots);
    const careerGamesPlayed = previous.gamesPlayed + 1;
    await db.ref('/profiles/' + req.params.username).set({
      name: previous.name,
      username: previous.username,
      //password: previous.password,
      cupsmade : careerCupsMade,
      finalCupsMade : careerFinalCupsMade,
      shots: careerShots,
      gamesPlayed: careerGamesPlayed
    });

    res.send("stats updated");
}

function postUpdatedStatstoServer(username, cupsMadeGame, finalCupsMadeGame, shotsGame, previous) {
    const careerCupsMade = cupsMadeGame + previous.cupsmade;
    const careerFinalCupsMade = finalCupsMadeGame + previous.finalCupsMade;
    const careerShots = shotsGame + previous.shots;
    const careerGamesPlayed = previous.gamesPlayed + 1;
    db.ref('/profiles/' + username).set({
      name: previous.name,
      username: previous.username,
      //password: previous.password,
      cupsmade : careerCupsMade,
      finalCupsMade : careerFinalCupsMade,
      shots: careerShots,
      gamesPlayed: careerGamesPlayed
    });
  }