

import { createStuff, renderboard } from "./render.js";
import 'express';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express = require('express');

const app = express();

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
function createNewUser(userId, username, name) {
  firebase.database().ref('profiles/' + userId).set({
    username: username,
    name: name,
    cupsmade : 0,
    shots: 0
  });
}

//createNewUser(4, "urmom", "bill");



function getAllProfilesData() {
  var ref = firebase.database().ref();
  ref.on("value", function(snapshot) {
    let x = JSON.stringify(snapshot.val());
    console.log(x);
    
    
 }, function (error) {
    console.log("Error: " + error.code);
 });
 
}


app.get('/', (req, res) => {
    res.send(createStuff());
  });


app.get('/api/profiles', (req, res) => {
  //let stuff = getAllProfilesData();
  var ref = firebase.database().ref();
  ref.on("value", function(snapshot) {
    //let x = JSON.stringify(snapshot.val());
    let x = snapshot.val();
    console.log(x);
    res.send(`database: ${JSON.stringify(x)}`);
 }, function (error) {
    console.log("Error: " + error.code);
 });
  
});
//getting a players profile stats
app.get('/api/profiles/:userID', (req, res) => {
   // console.log(req.params.userID);
    let player = profiles.find(p => p.userID === req.params.userID);
    if (player == undefined) {
        res.status(404).send("Bad request this username does not exist");
    } else {
        console.log('player found');
        //loadProfile();
        res.send(`Username: ${player.userID} <br>
        Name: ${player.name}
        Career Cups Made: ${player.cupsmade}`);
    }
    
});
  
//example post function to add a new profile
app.post('/api/profiles', (req, res) =>{
  const player = {
    userID: req.body.userID,
    name: req.body.name,
    cupsmade: req.body.cupsmade
  };
  profiles.push(player);
  res.send(player);
});
  
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  });



