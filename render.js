
//var firebase = require('firebase');






let shottype = "hit";
let pp= "";
let player1 = localStorage["p1"];
let player2 = localStorage["p2"];
let player3 = localStorage["p3"];
let player = player1;
let player4 = localStorage["p4"];
let teamtwoscore = 0;
let teamonescore = 0;
let p1shot = 0;
let p1hit = 0;
let p1miss = 0;

let p2shot = 0;
let p2hit = 0;
let p2miss = 0;

let p3shot = 0;
let p3hit = 0;
let p3miss = 0;

let p4shot = 0;
let p4hit = 0;
let p4miss = 0;
/*
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
    firebase.database().ref('/profiles/' + username).set({
      name: previous.name,
      username: previous.username,
      password: previous.password,
      cupsmade : careerCupsMade,
      finalCupsMade : careerFinalCupsMade,
      shots: careerShots,
      gamesPlayed: careerGamesPlayed
    });
  }*/


const renderboard = function () {
    // TODO: Return these elements as a string, HTMLElement, or jQuery object
    // Example: return `<div>${hero.name}</div>`;
    $("#teamone").append( `
        <div id = "teamone">
        <form>
        <div class= "title">
        |<button class="button3" id = "1">cup</button> |
        </div>
        <div class= "title">
        | <button class="button3" id = "2">cup hit</button>   | <button class="button3" id = "3">cup hit</button> | </div>
        <div class= "title">
        | <button class="button3" id = "4">cup hit</button> |<button class="button3" id = "5">cup hit</button>| <button class="button3" id = "6">cup hit</button> |</div>
        <div class= "title">
        | <button class="button3" id = "7">cup hit</button> | <button class="button3" id = "8">cup hit</button> | <button class="button3" id = "9">cup hit</button> | <button class="button3" id = "10">cup hit</button> |</div>
        </form>
        </div>
    `);
    $("#teamtwo").append( `
        <div id = "teamone">
        <form>
        <div class= "title">
        |<button class="button3" id = "1">cup hit</button> |
        </div>
        <div class= "title">
        | <button class="button3" id = "2">cup hit</button> | <button class="button3" id = "3">cup hit</button> | </div>
        <div class= "title">
        | <button class="button3" id = "4">cup hit</button> |<button class="button3" id = "5">cup hit</button>| <button class="button3" id = "6">cup hit</button> |</div>
        <div class= "title">
        | <button class="button3" id = "7">cup hit</button> | <button class="button3" id = "8">cup hit</button> | <button class="button3" id = "9">cup hit</button> | <button class="button3" id = "10">cup hit</button> |</div>
        </form>
        </div>
    `);
    window.location.href = "C:\Users\fusik\pongstattracker\indexex.html";
    
}


export function updateplayer(){
    
    player = this.id;
    //pp= localStorage[player];
    pp="banakk";
    $("#select").replaceWith(`<div id="select">Curent Player: ${pp}   Current Shot Type: ${shottype}`);
    
}

function updateshot(){
    shottype = this.id;
   $("#select").replaceWith(`<div id="select">Curent Player: ${pp}   Current Shot Type: ${shottype}`);
}

function check(){

    $("#players").replaceWith(`
    Player Select
    <button class = "button3">${player1}</button><button id="${player2}" class = "button3">Player 2</button>
    <button id="${player3}" class = "button3">Player 3</button><button id="${player4}" class = "button3">Player 4</button>
`)
 }

function addnames(){
    
    player1 = $("#name1").val();
    player2 = $("#name2").val();
    player3 = $("#name12").val();
    player4 = $("#name22").val();
}

function updatestat(){
    
    if(player == "p1"){
        if(shottype == "hit"){
            
            p1hit++;
            p1shot++;
            
        }
        if(shottype == "miss"){
            p1miss++;
            p1shot++;
        }
        $("#p1sc").replaceWith(`<div id="p1sc">
        Shots: ${p1shot}
        <br> Hits: ${p1hit}
        <br> Misses: ${p1miss}
        <br>
        </div>`)
    }
    if(player == "p2"){
        if(shottype == "hit"){
            
            p2hit++;
            p2shot++;
            
        }
        if(shottype == "miss"){
            p2miss++;
            p2shot++;
        }
        $("#p2sc").replaceWith(`<div id="p2sc">
        Shots: ${p2shot}
        <br> Hits: ${p2hit}
        <br> Misses: ${p2miss}
        <br>
        </div>`)
    }
    if(player == "p3"){
        if(shottype == "hit"){
            
            p3hit++;
            p3shot++;
            
        }
        if(shottype == "miss"){
            p3miss++;
            p3shot++;
        }
        $("#p3sc").replaceWith(`<div id="p3sc">
        Shots: ${p3shot}
        <br> Hits: ${p3hit}
        <br> Misses: ${p3miss}
        <br>
        </div>`)
    }
    if(player == "p4"){
        if(shottype == "hit"){
            
            p4hit++;
            p4shot++;
            
        }
        if(shottype == "miss"){
            p4miss++;
            p4shot++;
        }
        $("#p4sc").replaceWith(`<div id="p4sc">
        Shots: ${p4shot}
        <br> Hits: ${p4hit}
        <br> Misses: ${p4miss}
        <br>
        </div>`)
    }
}

function cupdate() {
   if(shottype != "miss"){
    $("#"+event.target.id).replaceWith('  -                 -            ');    
    if(event.target.id == "final1" || event.target.id < 10){
        teamonescore++;
    }
    if(event.target.id == "final2" || event.target.id > 10){
        teamtwoscore++;
    }
    
    
    updatestat();
    updatescore(event.target.id);
} else {
    updatestat();
}
}
function updatescore(cupnum){
    if(cupnum == "final1"){
        let val = 10 - teamonescore;
        $("#rem1").replaceWith(`<div id ="rem1">Teamone cups remaining = ${val}</div>`);
    
    } if(cupnum == "final2"){
        let val = 10 - teamtwoscore;
        $("#rem2").replaceWith(`<div id ="rem2">Teamtwo cups remaining = ${val}</div>`);
    }
    if(cupnum > 10){
        let val = 10 - teamtwoscore;
        $("#rem2").replaceWith(`<div id ="rem2">Teamtwo cups remaining = ${val}</div>`);
    }
    else {
        let val = 10 - teamonescore;
        $("#rem1").replaceWith(`<div id ="rem1">Teamone cups remaining = ${val}</div>`);
    }

    
   
    if(teamonescore == 4){
        $("#t1").replaceWith(`
        <form id=t1>
        <div class= "title">|<img src="SoloCup-512.png" width="60" height="38" class = "cup" id = "1"/> |
        </div>
        <div class= "title">
        | <img src="SoloCup-512.png" width="60" height="38"  class = "cup" id = "2"/> |<img src="SoloCup-512.png" width="60" height="38"  class = "cup" id = "3"/> | </div>
        <div class= "title">
        |<img src="SoloCup-512.png" width="60" height="38"  class = "cup" id = "4"/> |<img src="SoloCup-512.png" width="60" height="38"  class = "cup" id = "5"/>| <img src="SoloCup-512.png" width="60" height="38"  class = "cup" id = "6"/>|</div>
         </form>
        </div>`);
    }
    if(teamonescore == 7){
        $("#t1").replaceWith(`
        <form id = "t1">
        <div class= "title">|<img src="SoloCup-512.png" width="60" height="38" class = "cup" id = "1"/> |
        </div>
        <div class= "title">
        | <img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class = "cup" id = "2"/> |<img src="SoloCup-512.png" width="60" height="38" onclick="imgWindow();" class = "cup" id = "3"/> | </div>
        </form>
        </div>`);
    }
    if(teamonescore == 9){
        $("#t1").replaceWith(`
        
        <form id=t1>
        <div class= "title">|<img src="SoloCup-512.png" width="60" height="38" class = "cup" id = "final1"/> |
        </div>
        </form>
        </div>`);
        
    }
    if(teamtwoscore == 4){
        $("#t2").replaceWith(`
        
        <form id=t2>
        <div class= "title">|<img src="SoloCup-512.png" width="60" height="38" class = "cup" id = "11"/> |
        </div>
        <div class= "title">
        | <img src="SoloCup-512.png" width="60" height="38"  class = "cup" id = "12"/> |<img src="SoloCup-512.png" width="60" height="38"  class = "cup" id = "13"/> | </div>
        <div class= "title">
        |<img src="SoloCup-512.png" width="60" height="38"  class = "cup" id = "14"/> |<img src="SoloCup-512.png" width="60" height="38"  class = "cup" id = "15"/>| <img src="SoloCup-512.png" width="60" height="38"  class = "cup" id = "16"/>|</div>
         </form>
        </div>`);
    }
    if(teamtwoscore == 7){
        $("#t2").replaceWith(`
        
        <form id=t2>
        <div class= "title">|<img src="SoloCup-512.png" width="60" height="38" class = "cup" id = "11"/> |
        </div>
        <div class= "title">
        | <img src="SoloCup-512.png" width="60" height="38"  class = "cup" id = "12"/> |<img src="SoloCup-512.png" width="60" height="38"  class = "cup" id = "13"/> | </div>
        </form>
        </div>`);
    }
    if(teamtwoscore == 9){
        $("#t2").replaceWith(`
        
        <form id=t2>
        <div class= "title">|<img src="SoloCup-512.png" width="60" height="38" class = "cup" id = "final2"/> |
        </div>
        </form>
        </div>`);
    }
    if(teamtwoscore == 10){
        $("#t1").append(`
        
        
        <div class= "title">YOU WON
        </div>
       
        </div>`);
        //updateStats("testuser", 5, 1, 13);
    
    }
    if(teamonescore == 10){
        $("#t2").append(`
        
        
        <div class= "title">YOU WON
        </div>
       
        </div>`);
        
    }
}

const rungame = function(){
$(".navbar").append(`<div id="select">Curent Player: ${player}   Current Shot Type: ${shottype}</div>`)
$("#players").replaceWith(`<div id="players">Player Select
<button id="p1" class="button3">${player1}</button>
<button id="p2" class="button3">${player2}</button>
<button id="p3" class="button3">${player3}</button>
<button id="p4" class="button3">${player4}</button>
</div>`);
$("#name1er").replaceWith(`<div class="pongname" id="name1er">${player1}
<br>
</div>`);
$("#name2er").replaceWith(`<div class="pongname" id="name2er">${player2}
<br>
</div>`);
$("#name3er").replaceWith(`<div class="pongname" id="name3er">${player3}
<br>
</div>`);
$("#name4er").replaceWith(`<div class="pongname" id="name4er">${player4}
<br>
</div>`);
$("#players").on("click", ".button3", updateplayer);
$("#shots").on("click", ".button3", updateshot);
$("#teamone").on("click", ".cup", cupdate);
$("#teamtwo").on("click", ".cup", cupdate);



      
}
//updateStats("testuser", 100, 1, 250);

//console.log("statsupdated");
$(function(){
    rungame();
    //updateStats("testuser", 5, 1, 12);
    
    
});