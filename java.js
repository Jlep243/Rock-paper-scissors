    
    
    let playerSelection;

    document.querySelector(" #options .rock").onclick = function() 
    {
        playerSelection = "rock"
        console.log(playerSelection);
        game();
    };

    document.querySelector("#options .paper").onclick = function() 
    {
        playerSelection = "paper";
        console.log(playerSelection);
        game();
    };

    document.querySelector("#options .scissors").onclick = function() 
    {
        playerSelection = "scissors"
        console.log(playerSelection);
        game();
    };
    
    function game(){
    function computer() 
    {
        let choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    };
    
    let playerScore = 0;
    let computerScore = 0;
    let computerChoice = computer();
    
    console.log("computer: " + computerChoice);

function playRound(playerSelection, computerChoice){   
    //winning conditions
    if ((playerSelection == "rock" && computerChoice == "scissors")|| (playerSelection == "paper" && computerChoice == "rock")
    || (playerSelection == "scissors" && computerChoice == "paper")){
        alert("player:" + playerSelection + " Computer:" + computerChoice);
        playerScore += 1;
        alert("player : " + playerScore + "computer: " + computerScore);
    }
    //losing conditions
    else if(playerSelection =="paper" && computerChoice == "scissors"|| playerSelection == "rock" && computerChoice == "paper"||
    playerSelection == "scissors" && computerChoice == "rock") {
        alert("player:" + playerSelection + " Computer:" + computerChoice);
        computerScore += 1;
        alert("player : " + playerScore + "computer: " + computerScore);
    }
    //tie
    else if(playerSelection == computerChoice){
        alert("player:" + playerSelection + " Computer:" + computerChoice);
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

};

game();


