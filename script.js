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

function playGame(){
    let score = document.querySelector(".score");
    let humanScore = 0;
    let computerScore = 0;
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    let buttons = document.querySelector(".buttons");

    let rock = document.createElement("button");
    rock.innerText = "Rock";
    rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
    buttons.appendChild(rock);
    
    let paper = document.createElement("button");
    paper.innerText = "Paper";
    paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
    buttons.appendChild(paper);
    
    let scissors = document.createElement("button");
    scissors.innerText = "Scissors";
    scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));
    buttons.appendChild(scissors);

    let console = document.querySelector(".console");
    let result = document.createElement("p");
    let final = document.createElement("p");
    
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
                result.textContent = "Human: rock, Computer: rock, Result: Tie";
                console.appendChild(result);
            } else if (computerChoice === "paper"){
                result.textContent = "Human: rock, Computer: paper, Result: Computer win";
                console.appendChild(result);
                computerScore += 1;
            } else if (computerChoice === "scissors"){
                result.textContent = "Human: rock, Computer: scissors, Result: Human win";
                console.appendChild(result);
                humanScore += 1;
            }
        } else if (humanChoice === "paper"){
            if (computerChoice === "rock"){
                result.textContent = "Human: paper, Computer: rock, Result: Human win";
                console.appendChild(result);
                humanScore += 1;
            } else if (computerChoice === "paper"){
                result.textContent = "Human: paper, Computer: paper, Result: Tie";
                console.appendChild(result);
            } else if (computerChoice === "scissors"){
                result.textContent = "Human: paper, Computer: scissors, Result: Computer win";
                console.appendChild(result);
                computerScore += 1;
            }
        } else if (humanChoice === "scissors"){
            if (computerChoice === "rock"){
                result.textContent = "Human: scissors, Computer: rock, Result: Computer win";
                console.appendChild(result);
                computerScore += 1;
            } else if (computerChoice === "paper"){
                result.textContent = "Human: scissors, Computer: paper, Result: Human win";
                console.appendChild(result);
                humanScore += 1;
            } else if (computerChoice === "scissors"){
                result.textContent = "Human: scissors, Computer: scissors, Result: Tie";
                console.appendChild(result);
            }
        }
        
        score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

        if (humanScore == 5){
            final.textContent = "Max score reached. Human wins!";
            console.appendChild(final);
            humanScore = 0;
            computerScore = 0;
            score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
        } else if (computerScore == 5){
            final.textContent = "Max score reached. Computer wins!";
            console.appendChild(final);
            humanScore = 0;
            computerScore = 0;
            score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
        } else {
            final.remove();
        }
    }
}