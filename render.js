let player = "";
let shottype = "";

export function createStuff() {
    return `<div><strong>hello</strong></div>`;
}

export function renderboard() {
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
   // window.location.href = "C:\Users\fusik\pongstattracker\indexex.html";
    
}

function updateplayer(){
    
    player = this.id;
    
}

function updateshot(){
    
   shottype = this.id;
}

function loadProfile() {
    alert("yooooooooo");
}

function check(){

    alert(player);
    alert(shottype);
 
}




const rungame = function(){
let player = "";
let shottype= "";
player = $("#players").on("click", ".button3", updateplayer);
shottype = $("#shots").on("click", ".button3", updateshot);
let chode = 0;
let group = {
    pl: player,
    st: shottype
}
$(".navbar").on("click", "#check", chode, check);

      
}


