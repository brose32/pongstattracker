

//import { renderboard } from "./render.js";

//import { createRequire } from 'module';
//import 'bulma/css/bulma.css';

//const require = createRequire(import.meta.url);
const express = require('express');
const app = express();
const axios = require('axios');
const expressSession = require('express-session');
const firebase = require('firebase');
require("jquery");
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
var dab = firebase.database();


module.exports = async function createNewUser(username, password, name) {
  //need to add if username is taken
  await dab.ref('profiles/' + username).set({
    username: username,
    password: password,
    name: name,
    cupsmade : 0,
    shots: 0,
    finalCupsMade: 0,
    gamesPlayed: 0
  });
}

module.exports = async function deleteUser(username) {
  await dab.ref('/profiles/' + username).remove();
}

module.exports = async function getProfile(username) {
  let x = await firebase.database().ref('/profiles/' + username).once("value").then((snapshot) => {
    return snapshot.val();
  });
   
}
//console.log(getProfile("testuser"));
function updateStats(username, cupsMadeGame, finalCupsMadeGame, shots) {
  var ref = firebase.database().ref('/profiles/' + username);
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
updateStats("testuser", 2, 1, 740);
function getAllProfilesData() {
  var ref = firebase.database().ref('/profiles');
  ref.on("values", function(snapshot) {
    let x = JSON.stringify(snapshot.val());
    console.log(x);
 }, function (error) {
    console.log("Error: " + error.code);
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

app.get('/login', (req, res) => {
  //res.render('login');
//});
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css" />
      
      <title>Pong Stat Tracker</title>
  
  </head>
  <body style="background-color:red">
      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
      <script src="render.js" type = "module"></script>
      <script src="backend.js" type="module"></script>
      <script type="text/javascript">
window.onload = function()
{
    if (window.jQuery)
    {
        alert('jQuery is loaded');
    }
    else
    {
        alert('jQuery is not loaded');
    }
}
</script>
<script>
$(document).onclick(function() {
   alert("hello");
}
</script>
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
  `);});
  app.get('/testing', (req, res) => {
    //res.render('testing');
    res.send(`<!DOCTYPE html>
    <html lang="en" style="background-color: rgb(223, 197, 142)">
    
    <head>
      <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
      <script src="render.js" type="module"></script>
      <script src="backend.js" type="module"></script>
      <script type="text/javascript">
window.onload = function()
{
    if (window.jQuery)
    {
        alert('jQuery is loaded');
    }
    else
    {
        alert('jQuery is not loaded');
    }
}
</script>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="node_modules/bulma/css/bulma.css" />
      <style>
        .navbar {
    
          float: none;
          overflow: hidden;
          background-color: rgb(148, 0, 0);
          position: fixed;
          top: 0;
          width: 100%;
          text-align: center;
          display: inline-block;
          color: rgb(255, 255, 255);
          
      
        
    
        }
        #main {
          padding: 16px;
          margin-top: 30px;
          height: 1500px;
        }
    
        .cups {
          text-align: center;
          margin-top: 150px;
    
        }
    
        .score2 {
          margin-top: 100px;
          text-align: center;
          color: black;
    
    
        }
    
        .score1 {
          margin-top: 100px;
          text-align: center;
          color: black;
    
        }
    
    
        .column2 {
          float: right;
          width: 50%;
        }
    
        .pongname {
          font-size: 22px;
          text-decoration: underline;
    
        }
    
        .players {
          text-align: center;
        }
    
        .pong {
          font-size: 36px;
          float: left;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: black;
    color: khaki;    
        }
    
    
        /* Clear floats after the columns */
      </style>
    
    
      <title>GameTime</title>
    
      <!-- Include links to CSS stylesheets below -->
      <!-- TODO (optional): Add link to bulma here -->
    </head>
    
    <body style="background-color: rgb(223, 197, 142)">
      <div class="navbar">
        <div class = "pong">PONG</div>
        <div id="players">Player Select
          <button id="p1" class="button3">Player 1</button>
          <button id="p2" class="button3">Player 2</button>
          <button id="p3" class="button3">Player 3</button>
          <button id="p4" class="button3">Player 4</button>
        </div>
        <div id="shots">Shot Type
          <button id="hit" class="button3">Hit</button>
          <button id="miss" class="button3">Miss</button>
    
    
        </div>
      </div>
    
    
      <div class="columns">
        <div class="column">
          <div id="t1s" class="score1">
            <div id="rem1">Teamone cups remaining = 10</div>
            <br>
            <div class="pongname" id="name1er">Player 1
              <br>
            </div>
            <div id="p1sc">
              Shots: 0
              <br> Hits: 0
              <br> Misses: 0
              <br>
            </div>
            <div class="pongname" id="name2er">Player 2
              <br>
            </div>
    
            <div id="p2sc">
              Shots: 0
              <br> Hits: 0
              <br> Misses: 0
              <br>
            </div>
          </div>
        </div>
        <div class="column">
          <div id="teamone" class="cups">
            <div style="color:black;font-size:30px;">Team 1</div>
            <form id="t1">
              <div class="title">|
                <img src="SoloCup-512.png" width="60" height="38" class="cup" id="1" /> |
              </div>
              <div class="title">
                |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="2" /> |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="3" /> | </div>
              <div class="title">
                |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="4" /> |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="5" />|
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="6" />|</div>
              <div class="title">
                |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="7" /> |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="8" /> |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="9" /> |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="10" /> |</div>
            </form>
          </div>
        </div>
    
        <div class="column">
          <div id="teamtwo" class="cups">
            <div style="color:black;font-size:30px;">Team 2</div>
            <form id=t2>
    
              <div class="title">|
                <img src="SoloCup-512.png" width="60" height="38" class="cup" id="11" /> |
              </div>
              <div class="title">
                |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="12" /> |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="13" /> | </div>
              <div class="title">
                |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="14" /> |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="15" />|
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="16" />|</div>
              <div class="title">
                |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="17" /> |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="18" /> |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="19" /> |
                <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class="cup" id="20" /> |</div>
            </form>
          </div>
        </div>
        <div class="column">
          <div id="t2s" class="score2">
            <div id="rem2">Teamtwo cups remaining = 10</div>
            <br>
            <div class="pongname" id="name3er">Player 3
              <br>
            </div>
            <div id="p3sc">
              Shots: 0
              <br> Hits: 0
              <br> Misses: 0
              <br>
            </div>
    
            <div class="pongname" id="name4er">Player 4
              <br>
            </div>
            <div id="p4sc">
              Shots: 0
              <br> Hits: 0
              <br> Misses: 0
              <br>
            </div>
    
          </div>
        </div>
      </div>
    
    
    
      
     
    </body>
    
    </html>`);
  })

 
 
       
 }

$(function(){
 rungame();
 
});


//when user gets profile page gets the player profile stats from the database and loads profile page for that player