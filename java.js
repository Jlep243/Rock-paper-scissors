let body = document.body;

document.addEventListener('DOMContentLoaded', function () {

    let main = document.createElement('div');
    main.classList.add('main');
    body.appendChild(main);

    function democracy() {
        let modal = document.createElement('div');
        modal.classList.add('modal');
        body.appendChild(modal);

        let content = document.createElement('div');
        content.classList.add('content');
        modal.appendChild(content);
        
        let video = document.createElement('video');
        video.classList.add('video');
        content.appendChild(video);
        video.src = "Helldiver.mp4";

        video.type = "video/mp4";
        video.controls = 'true';
        
        let exit = document.createElement('div');
        exit.classList.add('exit');
        modal.appendChild(exit);

        let x = document.createElement('span');
        x.classList.add('x');
        exit.appendChild(x);
        x.textContent = 'x';

        exit.addEventListener('click', function(){
            modal.style.display = "none";
            let audio = document.createElement('audio');
            body.appendChild(audio);
            let source = document.createElement('source');
            audio.appendChild(source);
            source.src = "hellDiversMain.mp3";
            source.type = "audio/mpeg";
            video.pause();

            audio.play().then(() => {
                console.log('sound of democracy plays');
            }).catch(error => {
                console.log('whoops');
            });
        });

        video.addEventListener("ended", function(){
            modal.style.display = "none";
            let audio = document.createElement('audio');
            body.appendChild(audio);
            let source = document.createElement('source');
            audio.appendChild(source);
            source.src = "hellDiversMain.mp3";
            source.type = "audio/mpeg";
            audio.play().then(() => {
                console.log('The sound of democracy plays');
            }).catch(error => {
                console.log('whoops');
            });
        });

    };
    
    democracy();

});


    
    function game () { 
    function computer() 
    {
        let choices = ["rock", "paper", "scissors"];
        return choices[Math.floor(Math.random() * choices.length)];
    };
    
    document.querySelector(" #options .rock").onclick = function() 
    {
        const playerSelection = "rock";
        console.log("player: " + playerSelection);
        const computerChoice = computer();
        console.log("computer: " + computerChoice);
        playRound(playerSelection, computerChoice);
    };

    document.querySelector("#options .paper").onclick = function() 
    {
        const playerSelection = "paper";
        console.log("player: " + playerSelection);
        const computerChoice = computer();
        console.log("computer: " + computerChoice);
        playRound(playerSelection, computerChoice);
    };

    document.querySelector("#options .scissors").onclick = function() 
    {
        const playerSelection = "scissors";
        console.log("player: " + playerSelection);
        const computerChoice = computer();
        console.log("computer: " + computerChoice);
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
    let pScore = document.createElement('h3');
    let playerScore = 0;
    pScore.textContent = "player: " + playerScore.toString();
    box1.appendChild(pScore);
    
    let cScore = document.createElement('h3');
    let computerScore = 0;
    cScore.textContent = "computer: " + computerScore.toString();
    box2.appendChild(cScore); 

     

    function playRound(playerSelection, computerChoice){   
        //winning conditions
        if ((playerSelection == "rock" && computerChoice == "scissors")|| (playerSelection == "paper" && computerChoice == "rock")
        || (playerSelection == "scissors" && computerChoice == "paper")){
            playerScore += 1;
            pScore.textContent = "player: " + playerScore.toString();
            declareWinner();
        }
        //losing conditions
        else if(playerSelection =="paper" && computerChoice == "scissors"|| playerSelection == "rock" && computerChoice == "paper"||
        playerSelection == "scissors" && computerChoice == "rock") {
            computerScore += 1;
            cScore.textContent = "computer: " + computerScore.toString();
            declareWinner();
        }
        //tie
        else if(playerSelection == computerChoice){
            
        };
    
    };
    

    function declareWinner()
    {
        if (playerScore >= 5 && playerScore > computerScore)
        {
        playerScore = 0;
        pScore.textContent = "player: " + playerScore.toString();
        computerScore = 0;
        cScore.textContent = "computer: " + computerScore.toString();
        }
        else if (computerScore >= 5 && computerScore > playerScore)
        {
            playerScore = 0;
            pScore.textContent = "player: " + playerScore.toString();
            computerScore = 0;
            cScore.textContent = "computer: " + computerScore.toString();
        }
    };

};






