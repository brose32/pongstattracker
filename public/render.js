let shottype = "hit";
let pp = sessionStorage["p1"];
let player1 = sessionStorage["p1"];
let player2 = sessionStorage["p2"];
let player3 = sessionStorage["p3"];
let player = player1;
let player4 = sessionStorage["p4"];
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



async function updateStats(username, cupsMadeGame, finalCupsMadeGame, shots) {
    const playerRef = await firebase.firestore().collection("profiles").doc(username);
    playerRef.update({
        cupsMade: firebase.firestore.FieldValue.increment(cupsMadeGame),
        finalCupsMade: firebase.firestore.FieldValue.increment(finalCupsMadeGame),
        totalShots: firebase.firestore.FieldValue.increment(shots),
        gamesPlayed: firebase.firestore.FieldValue.increment(1)
    })
  }


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
    
}


export function updateplayer(){
    
    player = this.id;
    pp= localStorage[player];
    
    $("#select").replaceWith(`<div id="select">Curent Player: ${pp}   Current Shot Type: ${shottype}</div>`);
    
}

function updateshot(){
    shottype = this.id;
   $("#select").replaceWith(`<div id="select">Curent Player: ${pp}   Current Shot Type: ${shottype}</div>`);
}

function check(){

    $("#players").replaceWith(`
    Player Select
    <button class = "button3">${player1}</button><button id="${player2}" class = "button3">Player 2</button>
    <button id="${player3}" class = "button3">Player 3</button><button id="${player4}" class = "button3">Player 4</button>
`)
 }

function addnames(){
    
    localStorage['p1'] = $("#name1").val();
    localStorage['p2'] = $("#name2").val();
    localStorage['p3'] = $("#name12").val();
    localStorage['p4'] = $("#name22").val();
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
        sTSs1();
        sTSs2();
        sTSs3();
        sTSs4();
        //updateStats("testuser", 5, 1, 13);
    
    }
    if(teamonescore == 10){
        $("#t2").append(`
        
        
        <div class= "title">YOU WON
        </div>
       
        </div>`);
        sTSs1();
        sTSs2();
        sTSs3();
        sTSs4();
        
    }
}

async function sTSs1(){
        updateStats(player1, p1hit, 1, p1shot)
       
}
async function sTSs2(){
   
        updateStats(player2, p2hit, 0, p2shot)
        
       
}
async function sTSs3(){
    
        updateStats(player3, p3hit, 0, p3shot)
        
       
}
async function sTSs4(){
    
        
        updateStats(player4, p4hit, 0, p4shot)
       
}


const rungame = function(){
$(".navbar").append(`<div id="select">Curent Player: ${player1}   Current Shot Type: ${shottype}</div>`)
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
$(".mainpage").on("click", "#play", addnames);



      
}
//updateStats("testuser", 100, 1, 250);

//console.log("statsupdated");

//$(async function(){
  //  let x = await firebase.auth().currentUser;
    //alert(x);
    //alert("rendering");
    
rungame();

    
    
    

