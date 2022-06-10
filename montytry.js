
class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.opened = false;
    }
    
    
    
}







class Game {
    constructor() {
        

        this.doors=[];
        this.carInDoor;
        this.doorPicked;
        this.openedGoatDoor;
        this.finalPick;
        this.won;
    
        this.myDoors()
        this.chooseCarDoor()
        this.guestDoor()
        this.hostDoor()
        this.guestFinalPick()
        this.guestFinalPickSwitch()
        
    }
    myDoors() {

        let door1 = new Door(0, false);
        let door2 = new Door(1, false);
        let door3 = new Door(2, false);
    
        this.doors.push(door1, door2, door3)
        
    }
    chooseCarDoor(){
        var doorContainCar = Math.floor(Math.random()*3)
        this.carInDoor = this.doors[doorContainCar]
        this.carInDoor.isCar = true;
        
    }

    guestDoor(){
        let doorGuest = Math.floor(Math.random()*3)
        this.doorPicked = this.doors[doorGuest]
    
        
    }

    hostDoor(){
        
        
        for(var i=0; i<3; i++) {
           if(this.doors[i] != this.carInDoor && this.doors[i] != this.doorPicked)
           this.doors[i].opened = true;
           this.openedGoatDoor = this.doors[i]

        }
    }

    guestFinalPickSwitch(){
        for(var i=0; i<3; i++){
            if(this.doors[i] != this.openedGoatDoor && this.doors[i] != this.doorPicked)
            return this.finalPick = this.doors[i]
        }
    }

    guestFinalPick(){
        this.finalPick = this.doorPicked
    }
    
    isTheGameWonWithChange(){

        this.won = false

        if(this.finalPick == this.carInDoor){

            this.won = true;
        }
        return this.won;
        
    }
    isTheGameWon(){
        this.won = false
        if(this.doorPicked == this.carInDoor){
            this.won = true;
        }
        return this.won
    }
    


    doGameWithChange(){
    this.chooseCarDoor()
    this.guestDoor()
    this.hostDoor()
    this.guestFinalPickSwitch()
    return this.isTheGameWonWithChange()
    }

    doGameNoChange(){
    this.chooseCarDoor()
    this.guestDoor()
    this.hostDoor()
    this.guestFinalPick()
    return this.isTheGameWon()
    }

}


class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [];
        this.gamesWithSameDoorLost = [];
        this.gamesWithDoorChangeWon = [];
        this.gamesWithDoorChangeLost = [];
    }
    statisticsWithChange(totalGame){
        let gameWon = 0
        for(var i=0; i<totalGame; i++){
            let game = new Game()
            game.doGameWithChange()
            if(game.isTheGameWonWithChange() == true){
                this.gamesWithDoorChangeWon++
            } else{
                this.gamesWithSameDoorLost++
            }
            gameWon= this.gamesWithDoorChangeWon/totalGame*100
        }
        return gameWon + "% of games were won when switching door"
    }

    statisticsWithNoChange(totalGame){
        let gameWon = 0
        for(var i=0; i<totalGame; i++){
            let game = new Game()
            game.doGameNoChange()
            if(game.isTheGameWon() == true){
                this.gamesWithDoorChangeWon++
            } else{
                this.gamesWithDoorChangeLost++
            }
            gameWon = this.gamesWithDoorChangeWon/totalGame*100
        }
        return gameWon + "% of games were won when not switching door"
    }
}

let statisticsFinal = new Statistics()
console.log(statisticsFinal.statisticsWithChange(10000))
console.log(statisticsFinal.statisticsWithNoChange(10000))
