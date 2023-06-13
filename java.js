console.log("Hello");


const choices = ["rock", "paper", "scissors"];



function getComputerChoice() {

    let a = Math.floor(Math.random()*3);
    console.log(choices[a]);

}



function playerSelection() {

    let playerChoice = document.querySelector("#weapon");
    console.log(playerChoice);

}

