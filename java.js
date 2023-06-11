console.log("Hello");

let rock = 1;
let scissors = 2;
let paper = 3;

function getComputerChoice() {
    

    let answer = Math.floor(Math.random()*3+1);
   
    if (answer <= 1)
    {
        console.log("rock");
    }
    else if(answer <= 2)
    {
        console.log("scissors");
    }
    else
    {
        console.log("paper");
    }
    
}

getComputerChoice();