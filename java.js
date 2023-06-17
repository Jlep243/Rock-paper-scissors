

function computer() {
    let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

//let playerSelection="rock";
let computerChoice = computer();


function playRound(playerSelection, computerChoice){   
    
    //winning conditions
    if ((playerSelection.toLowerCase() == "rock" && computerChoice == "scissors")|| (playerSelection.toLowerCase() == "paper" && computerChoice == "rock")
    || (playerSelection.toLowerCase() == "scissors" && computerChoice == "paper")){
        alert("player:" + playerSelection.toLowerCase() + " Computer:" + computerChoice);
        alert("you WIN!!!!");
    }
    else if(playerSelection.toLowerCase() =="paper" && computerChoice == "scissors"|| playerSelection.toLowerCase() == "rock" && computerChoice == "paper"||
    playerSelection.toLowerCase() == "scissors" && computerChoice == "rock") {
        alert("player:" + playerSelection.toLowerCase() + " Computer:" + computerChoice);
        alert("you LOSE!!!");
    }
    else if(playerSelection.toLowerCase() == computerChoice){
        alert("player:" + playerSelection.toLowerCase() + " Computer:" + computerChoice);
        alert("you tied!!"); 
    }
}

let playerSelection = window.prompt("CHOOSE YOUR WEAPON!!!");
playRound(playerSelection, computerChoice);

