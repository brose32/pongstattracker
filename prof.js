async function sTSs4(){
    
        let result = await axios({
        method: 'get',
        url: 'http://localhost:3002/api/profiles/deebs'
    }).then(res => ($("#dudes").append(`
    <div class = "title">${res.data.name}</div>
    <div class = "title">${res.data.username}</div>
    <div class = "subtitle">Cupsmade: ${res.data.cupsmade}</div>
    <div class = "subtitle">Shots Taken: ${res.data.shots}</div>
    
    `))).catch((error) => {
        alert("fuck");
    });
    
   
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
const rungame = function(){

$("#dudes").on("click", "#dude", sTSs4);
$("#dudes").on("click", "#delete", sTSs3);




  
}
//updateStats("testuser", 100, 1, 250);

//console.log("statsupdated");
$(function(){

rungame();
//updateStats("testuser", 5, 1, 12);



});