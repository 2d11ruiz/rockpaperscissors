console.log("Rock Paper Scissors");

playGame();

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
    choice = choice.toLowerCase();

    if (choice === "rock"){
        return "rock";
    } else if (choice === "paper"){
        return "paper";
    } else if (choice === "scissors"){
        return "scissors";
    }
}

/*
Gameplay algorithm
Play five rounds of Rock Paper Scissors and record scores in respective score variables
Determine and display a winner or tie to the console depending on recorded score
*/
function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore){
        console.log(`Human: ${humanScore}, Computer: ${computerScore}, Human wins`);
    } else if (humanScore < computerScore){
        console.log(`Human: ${humanScore}, Computer: ${computerScore}, Computer wins`);
    } else {
        console.log(`Human: ${humanScore}, Computer: ${computerScore}, Tie`);
    }

    /*
    Play round algorithm
    If user chooses rock:
        If computer chooses rock, result is a tie
        If computer chooses paper, display computer win and increment computer score by one
        If computer chooses scissors, display human win and increment human score by one
    If user chooses paper:
        If computer chooses rock, display human win and increment human score by one
        If computer chooses paper, result is a tie
        If computer chooses scissors, display computer win and increment computer score by one
    If user chooses scissors:
        If computer chooses rock, display computer win and increment computer score by one
        If computer chooses paper, display human win and increment human score by one
        If computer chooses scissors, result is a tie
    */
    function playRound(humanChoice, computerChoice){
        if (humanChoice === "rock"){
            if (computerChoice === "rock"){
                console.log("Human: rock, Computer: rock, Result: Tie");
            } else if (computerChoice === "paper"){
                console.log("Human: rock, Computer: paper, Result: Computer win");
                computerScore += 1;
            } else if (computerChoice === "scissors"){
                console.log("Human: rock, Computer: scissors, Result: Human win");
                humanScore += 1;
            }
        } else if (humanChoice === "paper"){
            if (computerChoice === "rock"){
                console.log("Human: paper, Computer: rock, Result: Human win");
                humanScore += 1;
            } else if (computerChoice === "paper"){
                console.log("Human: paper, Computer: paper, Result: Tie");
            } else if (computerChoice === "scissors"){
                console.log("Human: paper, Computer: scissors, Result: Computer win");
                computerScore += 1;
            }
        } else if (humanChoice === "scissors"){
            if (computerChoice === "rock"){
                console.log("Human: scissors, Computer: rock, Result: Computer win");
                computerScore += 1;
            } else if (computerChoice === "paper"){
                console.log("Human: scissors, Computer: paper, Result: Human win");
                humanScore += 1;
            } else if (computerChoice === "scissors"){
                console.log("Human: scissors, Computer: scissors, Result: Tie");
            }
        }
    }
}