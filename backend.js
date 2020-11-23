

//import { renderboard } from "./render.js";
import 'express';
<<<<<<< HEAD

=======
>>>>>>> 627704a468f0ad2d5bab5291fd3aa05c1926067c
import { createRequire } from 'module';
//import 'bulma/css/bulma.css';

const require = createRequire(import.meta.url);
const express = require('express');
<<<<<<< HEAD
=======

>>>>>>> 627704a468f0ad2d5bab5291fd3aa05c1926067c
const app = express();
const axios = require('axios');
const expressSession = require('express-session');
const firebase = require('firebase');
<<<<<<< HEAD
//require("./render.js");
=======
>>>>>>> 627704a468f0ad2d5bab5291fd3aa05c1926067c
app.use(require('express-bulma')("https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css"));
//const bulma = require('bulma/css/bulma.css');
app.use(express.json());
app.use(express.static('images'));
const jquery = require('jquery');
app.set('view engine', 'pug');

//app.use(expressSession(options: {
//  name: "pongstatCookie",
//  secret: "orderofthemoak6040",
//  resave: false,
//  saveUnitialized: false
//}));

const port = process.env.port || 3000;

//const Secret = require("./secret.js");
const profiles = [
    {userID: 'nipsman', name: 'jimmy', cupsmade: 69},
    {userID: 'grassfairy6', name: 'bob', cupsmade: 4}
];

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
// Get a reference to the database service
var database = firebase.database();


export function createNewUser(username, password, name) {
  //need to add if username is taken
  firebase.database().ref('profiles/' + username).set({
    username: username,
    password: password,
    name: name,
    cupsmade : 0,
    shots: 0,
    finalCupsMade: 0,
    gamesPlayed: 0
  });
}

export function deleteUser(username) {
  firebase.database().ref('/profiles/' + username).remove();
}

export async function getProfile(username) {
  firebase.database().ref('/profiles/' + username).once("value").then((snapshot) => {
<<<<<<< HEAD
    snapshot.val();
  });
   
=======
    
  });
  
  
>>>>>>> 627704a468f0ad2d5bab5291fd3aa05c1926067c
}
//console.log(getProfile("testuser"));
export function updateStats(username, cupsMadeGame, finalCupsMadeGame, shots) {
  var ref = firebase.database().ref('/profiles/' + username);
  var previous = ref.once("value").then((snapshot) => {
    let x = snapshot.val();
    postUpdatedStatstoServer(username, cupsMadeGame, finalCupsMadeGame, shots, x);
  });
}
export function postUpdatedStatstoServer(username, cupsMadeGame, finalCupsMadeGame, shotsGame, previous) {
  const careerCupsMade = cupsMadeGame + previous.cupsmade;
  const careerFinalCupsMade = finalCupsMadeGame + previous.finalCupsMade;
  const careerShots = shotsGame + previous.shots;
  const careerGamesPlayed = previous.gamesPlayed + 1;
  firebase.database().ref('/profiles/' + username).set({
    name: previous.name,
    username: previous.username,
    password: previous.password,
    cupsmade : careerCupsMade,
    finalCupsMade : careerFinalCupsMade,
    shots: careerShots,
    gamesPlayed: careerGamesPlayed
  });
}

function getAllProfilesData() {
  var ref = firebase.database().ref('/profiles');
  ref.on("values", function(snapshot) {
    let x = JSON.stringify(snapshot.val());
    console.log(x);
 }, function (error) {
    console.log("Error: " + error.code);
 });
 
}

app.get('/', (req, res) => {
    //res.send(createStuff());
    if (true) {
      res.redirect('/setup');
    }
    //res.send("hello");
   
    });

app.get('/setup', (req, res) => {
  res.render('setup');
});

app.get('/login', (req, res) => {
  res.render('login');
});
  /*res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="node_modules/bulma/css/bulma.css" />
      
      <title>Pong Stat Tracker</title>
  
  </head>
  <body style="background-color:red">
      <script src="node_modules/jquery/dist/jquery.js"></script>
      <script src="render.js" type = "module"></script>
      <script src="backend.js" type="module"></script>
      <div class= "big-text" style= "font-size: 40px">LOGIN</div>
  <div class = "columns">
          <div class= "column">
              <form>
                      <input id = "username" value ="username"></input>
                      <input id = "password" value="password"></input>
                      <button id="login" onclick="loginUser()">Login</button>
  
  
  
              </form>
  
          </div>
          <div class= "column">
  
  
          </div>
          
  
  
      </div>
      
    
      </body>
  
  
  </html>
  `);*/
  app.get('/testing', (req, res) => {
    res.render('testing');
  })


//when user gets profile page gets the player profile stats from the database and loads profile page for that player
app.get('/profiles/:username', (req, res) => {
  //let stuff = getAllProfilesData();
  var ref = firebase.database().ref('/profiles/' + req.params.username);
  ref.once("value", function(snapshot) {
    let x = snapshot.val();
    //console.log(x);
    //need to add function that creates the player profile webpage and replace below
    res.send(`username: ${x.username} player real name: ${x.name} <br>
    cups made: ${x.cupsmade}`);
 }, function (error) {
    console.log("Error: " + error.code);
 });
  
});


//example post function to add a new profile
//app.post('/api/profiles', (req, res) =>{
//  const player = {
//    userID: req.body.userID,
//    name: req.body.name,
//    cupsmade: req.body.cupsmade
//  };
//  profiles.push(player);
//  res.send(player);
//});



  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });

