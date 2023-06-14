

function computer() {
    let choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

let playerSelection="rock";
let computerChoice = computer();


function playRound(playerSelection, computerChoice){
    
    //winning conditions
    if ((playerSelection == "rock" && computerChoice == "scissors")|| (playerSelection == "paper" && computerChoice == "rock")
    || (playerSelection == "scissors" && computerChoice == "paper")){
        //console.log(playerSelection, computerChoice);
        alert("you WIN!!!!");
    }
    else if(playerSelection =="paper" && computerChoice == "scissors"|| playerSelection == "rock" && computerChoice == "paper"||
    playerSelection == "scissors" && computerChoice == "rock") {
        alert("you LOSE!!!");
        //console.log(playerSelection, computerChoice);
    }
    else if(playerSelection == computerChoice){
        alert("you tied!!");
        //console.log(playerSelection, computerChoice);
    }
}

//console.log(playRound(playerSelection, computerChoice));
playRound(playerSelection, computerChoice);