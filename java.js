
    function computer() 
    {
        let choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    };
    
      //let playerScore = 0;
      //let computerScore = 0;
      //let computerChoice;

      let rock = document.querySelector("#options .button .rock");
    let playerSelection = rock;
      /*function playGame()
      {
        let rounds = 0;
          do
          {
              playRound(playerSelection, computerChoice);
              rounds++; 
          }
          while( rounds < 5);
          declareWinner();
      };*/ 

function playRound(playerSelection, computerChoice){   
    
    alert("hello!");
    
    computerChoice = computer();
    
    
    
    if ((playerSelection == rock && computerChoice == "scissors")|| (playerSelection == "paper" && computerChoice == "rock")
    || (playerSelection == "scissors" && computerChoice == "paper")){
        alert("player:" + playerSelection + " Computer:" + computerChoice);
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
        playRound(playerSelection, computerChoice);
    };

};   

function declareWinner()
{
    if (playerScore > computerScore)
    {
        alert("You won! " +"Player: " + playerScore + "computer: " + computerScore);
    }
    else if (computerScore > playerScore)
    {
        alert("You lost! " +" Player: " + playerScore + " computer: " + computerScore);
    }
};

//playGame();


