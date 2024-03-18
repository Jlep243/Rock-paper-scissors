    
    function computer() 
    {
        let choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    };
    
    document.querySelector(" #options .rock").onclick = function() 
    {
        const playerSelection = "rock";
        console.log("player " + playerSelection);
        const computerChoice = computer();
        playRound(playerSelection, computerChoice);
        
    };

    document.querySelector("#options .paper").onclick = function() 
    {
        const playerSelection = "paper";
        console.log("player " + playerSelection);
        const computerChoice = computer();
        playRound(playerSelection, computerChoice);
       
    };

    document.querySelector("#options .scissors").onclick = function() 
    {
        const playerSelection = "scissors";
        console.log("player " + playerSelection);
        const computerChoice = computer();
        playRound(playerSelection, computerChoice);
        
    };

    let computerChoice = computer();
    console.log("computer: " + computerChoice);

    //ScoreBoard   
    let scoreBoard = document.getElementById("score"); //creates variable from div element
    let scoreHeader = document.createElement('h2'); //heading for score
    scoreHeader.textContent = "Score"; 
    title.appendChild(scoreHeader);

    //point
    let playerScore = document.createElement('h3');
    playerScore.textContent = "0";
    box1.appendChild(playerScore);
    
    let computerScore = document.createElement('h3');
    computerScore.textContent = "0";
    box2.appendChild(computerScore); 
    
    

     

    function playRound(playerSelection, computerChoice){   
        //winning conditions
        if ((playerSelection == "rock" && computerChoice == "scissors")|| (playerSelection == "paper" && computerChoice == "rock")
        || (playerSelection == "scissors" && computerChoice == "paper")){
            alert("player: " + playerSelection + " Computer: " + computerChoice);
            playerScore += 1;
            alert("player : " + playerScore + " " + "computer: " + computerScore);
        }
        //losing conditions
        else if(playerSelection =="paper" && computerChoice == "scissors"|| playerSelection == "rock" && computerChoice == "paper"||
        playerSelection == "scissors" && computerChoice == "rock") {
            alert("player: " + playerSelection + " Computer: " + computerChoice);
            computerScore += 1;
            alert("player : " + playerScore + " " + "computer: " + computerScore);
        }
        //tie
        else if(playerSelection == computerChoice){
            alert("player: " + playerSelection + " Computer: " + computerChoice);
            alert("you tied!!"); 
        };
    
    };



    /*declareWinner();

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
    };*/







