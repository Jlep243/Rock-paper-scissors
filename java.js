




function game(){
    function computer() {
        let choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
      }
    
      let playerScore = 0;
      let computerScore = 0;
      let computerChoice;
      let playerSelection;

function playRound(playerSelection, computerChoice){   
    
    
    computerChoice = computer();
    playerSelection = window.prompt("CHOOSE YOUR WEAPON!!!");
    
    //winning conditions
    if ((playerSelection.toLowerCase() == "rock" && computerChoice == "scissors")|| (playerSelection.toLowerCase() == "paper" && computerChoice == "rock")
    || (playerSelection.toLowerCase() == "scissors" && computerChoice == "paper")){
        alert("player:" + playerSelection.toLowerCase() + " Computer:" + computerChoice);
        playerScore += 1;
        alert("player : " + playerScore + "computer: " + computerScore);
    }
    //losing conditions
    else if(playerSelection.toLowerCase() =="paper" && computerChoice == "scissors"|| playerSelection.toLowerCase() == "rock" && computerChoice == "paper"||
    playerSelection.toLowerCase() == "scissors" && computerChoice == "rock") {
        alert("player:" + playerSelection.toLowerCase() + " Computer:" + computerChoice);
        computerScore += 1;
        alert("player : " + playerScore + "computer: " + computerScore);
    }
    //tie
    else if(playerSelection.toLowerCase() == computerChoice){
        alert("player:" + playerSelection.toLowerCase() + " Computer:" + computerChoice);
        alert("you tied!!"); 
    }
    
   

         
    
}
playRound(playerSelection, computerChoice);
playRound(playerSelection, computerChoice);
playRound(playerSelection, computerChoice);
playRound(playerSelection, computerChoice);
playRound(playerSelection, computerChoice);


}







game()
