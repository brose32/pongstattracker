

//import { renderboard } from "./render.js";

//import { createRequire } from 'module';
//import 'bulma/css/bulma.css';

//const require = createRequire(import.meta.url);
const express = require('express');
const app = express();
const axios = require('axios');
const expressSession = require('express-session');
const firebase = require('firebase');
//require("./render.js");


//app.use(expressSession(options: {
//  name: "pongstatCookie",
//  secret: "orderofthemoak6040",
//  resave: false,
//  saveUnitialized: false
//}));

//const Secret = require("./secret.js");
function hi(){
  alert("cop");
}





//console.log(getProfile("testuser"));
function updateStats(username, cupsMadeGame, finalCupsMadeGame, shots) {
  var ref = database.ref('/profiles/' + username);
  var previous = ref.once("value").then((snapshot) => {
    let x = snapshot.val();
    postUpdatedStatstoServer(username, cupsMadeGame, finalCupsMadeGame, shots, x);
  });
}
function postUpdatedStatstoServer(username, cupsMadeGame, finalCupsMadeGame, shotsGame, previous) {
  const careerCupsMade = cupsMadeGame + previous.cupsmade;
  const careerFinalCupsMade = finalCupsMadeGame + previous.finalCupsMade;
  const careerShots = shotsGame + previous.shots;
  const careerGamesPlayed = previous.gamesPlayed + 1;
  database.ref('/profiles/' + username).set({
    name: previous.name,
    username: previous.username,
    password: previous.password,
    cupsmade : careerCupsMade,
    finalCupsMade : careerFinalCupsMade,
    shots: careerShots,
    gamesPlayed: careerGamesPlayed
  });
}


const rungame = function(){
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
var database = firebase.database();
  $("#shots").on("click", ".button3", hi);


 
 
       
 }

$(function(){
 rungame();
 
});


//when user gets profile page gets the player profile stats from the database and loads profile page for that player