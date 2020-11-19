
//outlines a player who will hopefully coresspond to someone in the database

export default class Game {
    //creates a game that takes in the number of cups per team
    //and then two arrays of Player objects
    //each team will be used to keep track of game progress
    constructor(cups) {
        this.cup = cups
        //let newrack = new Array(cups);
        //newrack.fill(1);
        //this.team1 = {
           // teamcc: cups,
            //players: teamone,
           // won = false,
           // lost = false,
          //  cupshit = 0,
            //rack = newrack
      //  };
      //  this.team2 = {
        //    teamcc: cups,
            // players: teamtwo,
         //   won = false,
         //   lost = false,
         //   cupshit = 0,
            //rack = newrack
        

    }
    //method for removing cups and updating player info
    // takes in the team that hits the cup, the player who hits it and where it was in the rack
    /*cuphit(team, player, cupnumber) {
        if(team == this.team1){
            this.team1.cupshit++;
            this.team1.players.forEach(e => {
                if(e.id == player.id){
                    e.shot++;
                    e.cupmade++;
                    e.rack.push(cupnumber);
                }
                this.team2.rack[cupnumber] = 0
                this.team2.cups--;
            });
        }
        if(team == this.team2){
            this.team2.cupshit++;
            this.team2.players.forEach(e => {
                if(e.id == player.id){
                    e.shot++;
                    e.cupmade++;
                    e.rack.push(cupnumber);
                }
                this.team1.rack[cupnumber] = 0
                this.team1.cups--;
            });
        }
    }
    cupmiss(team, player) {
        if(team == this.team1){
            this.team1.players.forEach(e => {
                if(e.id == player.id){
                    e.shot++;
                }
            });
        }
        if(team == this.team2){
            this.team2.players.forEach(e => {
                if(e.id == player.id){
                    e.shot++;
                   
                }
               
        });
    }
}
rackcups(cups){
    if(cups == 15 ||cups == 10 || cups == 6 ||cups == 3){
        let racked = new Array(cups).fill(1);
    } else {
        alert("invalid rack boi");
    }
}*/
}




