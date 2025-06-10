console.log("Rock Paper Scissors");

/*
Computer choice algorithm
Declare "value" variable with the number calculated below:
    Get random number between 0 and 1
    Multiply result by a factor of 3
Declare "choice" variable with a string using the logic below:
    If "value" is 0 up to but not including 1: assign "rock"
    If "value" is 1 up to but not including 2: assign "paper"
    If "value" is 2 up to but not including 3: assign "scissors"
Return "choice" as a representation of the computer's choice
*/
function getComputerChoice(){
    let value = Math.random() * 3;
    console.log(value);
    if (value >= 0 && value < 1){
        var choice = "rock";
    } else if (value >= 1 && value < 2){
        var choice = "paper";
    } else if (value >= 2 && value < 3){
        var choice = "scissors";
    }

    return choice;
}

console.log(getComputerChoice());