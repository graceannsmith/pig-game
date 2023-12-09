
// BL
function PlayerList() {
    this.Players = [];
}

PlayerList.prototype.addPlayers = function () {
    let currentPlayer = new Player();
    this.Players.push(currentPlayer);
}

function Player(userId, currentScore, gameTotal) {
    this.userId = this.assignId();
    this.currentScore = currentScore;
    this.gameTotal = gameTotal;
}

Player.prototype.assignId = function () {
    if (!this.userId) {
        this.userId = 1;
    } else {
        this.userId += 1;
    }
    return this.userId;
}

function roll(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
let willItWork = roll(1,9);
Player.prototype.setCurrentScore = function () {
    let currentDice = roll(1, 9);
    if (currentDice === 1) {
        this.currentScore = 0;
    } else {
        this.currentScore += currentDice;
    }
    return this.currentScore;
};

// UI Logic
window.onload = function () {
    let rollButton = document.querySelector("#rollButton");
    let holdButton = document.querySelector("#holdButton");

    let player = new Player(); // Create a player instance outside the event listener

    rollButton.addEventListener("click", function (event) {
        let updatedScore = player.setCurrentScore();
        document.querySelector("#currentNumber").innerText = willItWork;
        document.querySelector("#player1TurnTotal").innerText = player.currentScore; // Update player1TurnTotal
        event.preventDefault();
    });
}




// //BL
// function PlayerList() {
//     this.Players = [];
// }
// PlayerList.prototype.addPlayers = function () {
//     let currentPlayer = new Player();
//     this.Players.push(currentPlayer);
//  }
// function Player(userId, currentScore, gameTotal) {
//     this.userId = this.assignId();
//     this.currentScore = currentScore; 
//     this.gameTotal = gameTotal;
// }
// Player.prototype.assignId = function () {
//     if (!this.userId) {
//         this.userId = 1;
//     } else {
//         this.userId += 1;
//     }
//     return this.userId;
// }
// function roll (min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min); 
//   };
// Player.prototype.setCurrentScore = function() {
//   let currentDice = roll(1,9);
//     if (currentDice===1){
//     this.currentScore = 0;
//   } else {
//     this.currentScore += currentDice;
//   }
// };
// //UI Logic
// window.onload = function() {
//   //let currentDice = roll(1,9); 
// //   Player.setCurrentScore();
//   let rollButton = document.querySelector("#rollButton");
//   let holdButton = document.querySelector("#holdButton"); 
// rollButton.addEventListener("click",function(event){
//     let updatedScore = player.setCurrentScore();
// document.querySelector("#currentNumber").innerText = updatedScore;
// document.querySelector("#player1TurnTotal").innerText = Player.currentScore;
// event.preventDefault();
// })
// }
//BI

function Pizza(size){
    this.size = size
}