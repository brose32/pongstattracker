async function sTSs4(){
    
        
    let result = await axios({
        method: 'get',
        url: 'http://localhost:3002/api/leaderboard'
    });
    alert(result);
   
}

async function sTSs3(){
    
    let result = await axios({
    method: 'delete',
    url: 'http://localhost:3002/api//deleteProfile/deebs'
}).then(($("#dudes").append(`
profile deletes
`))).catch((error) => {
    alert("fuck");
});
}

async function sTSs5(){
    
    var jerb = firebase.auth().currentUser;
    var jerb1 = firebase.auth().currentUser;
    
      alert(jerb1.email);
    sTSs4();
  
  
}



const rungame = function(){
   
    
    
$("#dudes").on("click", "#dude", sTSs5);
$("#dudes").on("click", "#delete", sTSs3);




  
}
//updateStats("testuser", 100, 1, 250);

//console.log("statsupdated");
$(function(){

rungame();
//updateStats("testuser", 5, 1, 12);



});