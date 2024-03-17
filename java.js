    
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
    let scoreBoard = document.getElementById("score");
    let points = document.createElement('h2');

    points.textContent = "Score";

    scoreBoard.appendChild(points);



    //player score
    let box1 = document.createElement('div');
    box1.classList = "playerPoints";
    scoreBoard.appendChild(box1);

    let playerScore = document.createElement('h3');
    let playerPoints = playerScore.textContent = 0;
    playerScore.appendChild(box1);

    //computer score
    let box2 = document.createElement('div');
    box2.classList = "computerPoints";
    scoreBoard.appendChild(box2);
    
    let computerScore = document.createElement('h3');
    let computerPoints = computerScore.textContent = 0;
    
    
    

     

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







