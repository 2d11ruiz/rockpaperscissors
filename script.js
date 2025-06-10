console.log("Rock Paper Scissors");

console.log(`Computer chose: ${getComputerChoice()}`);

console.log(`Human chose: ${getHumanChoice()}`);

/*
Computer choice algorithm
Initialize "value" variable with the number calculated below:
    Get random number between 0 and 1
    Multiply result by a factor of 3
Declare "choice" variable 
Assign "choice" variable with a string using the logic below:
    If "value" is 0 up to but not including 1: assign "rock"
    If "value" is 1 up to but not including 2: assign "paper"
    If "value" is 2 up to but not including 3: assign "scissors"
Return "choice"
*/
function getComputerChoice(){
    let value = Math.random() * 3;
    let choice;

    if (value >= 0 && value < 1){
        choice = "rock";
    } else if (value >= 1 && value < 2){
        choice = "paper";
    } else if (value >= 2 && value < 3){
        choice = "scissors";
    }

    return choice;
}

/*
Human choice algorithm
Declare "choice" variable and store user input inside 
If "choice" variable matches "rock" return "rock"
If "choice" variable matches "paper" return "paper"
If "choice" variable matches "scissors" return "scissors"
*/
function getHumanChoice(){
    let choice = prompt("Enter rock, paper, or scissors:");
    
    if (choice === "rock"){
        return "rock";
    } else if (choice === "paper"){
        return "paper";
    } else if (choice === "scissors"){
        return "scissors";
    }
}