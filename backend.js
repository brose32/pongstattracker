

//import { renderboard } from "./render.js";
import 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');

const app = express();
const axios = require('axios');
const expressSession = require('express-session');
const firebase = require('firebase');

app.use(express.json());

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
    finalCupsMade: 0
  });
}
//createNewUser("testuser", "password", "billy joe");

//createNewUser(4, "urmom", "bill");

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
  firebase.database().ref('/profiles/' + username).set({
    name: previous.name,
    username: previous.username,
    password: previous.password,
    cupsmade : careerCupsMade,
    finalCupsMade : careerFinalCupsMade,
    shots: careerShots
  });
}

function getAllProfilesData() {
  var ref = firebase.database().ref();
  ref.on("values", function(snapshot) {
    let x = JSON.stringify(snapshot.val());
    console.log(x);
 }, function (error) {
    console.log("Error: " + error.code);
 });
 
}

app.get('/', (req, res) => {
    //res.send(createStuff());
    res.send("hello");
  });

//when user gets profile page gets the player profile stats from the database and loads profile page for that player
app.get('/profiles/:username', (req, res) => {
  //let stuff = getAllProfilesData();
  var ref = firebase.database().ref('/profiles/' + req.params.username);
  ref.on("value", function(snapshot) {
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







