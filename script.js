// console.log("Hello World");
function getComputerChoice() {
    let option = Math.floor(Math.random()*3);
    let choice = "";
    switch (option) {
        case(0):
            choice = "rock";
            break;
        case(1):
            choice = "paper";
            break;
        case(2):
            choice = "scissors";
            break;
    }
    // console.log(Math.random() * 3);
    return choice;
}

function  getHumanChoice() {
    let hc = prompt("Choose from rock papers scissors");
    return (hc.toLowerCase());
}

function playRound(humanChoice, computerChoice) {
    console.log("You: ", humanChoice);
    console.log("Computer: ", computerChoice);
    if(humanChoice=="rock" & computerChoice=="paper" | humanChoice=="paper" & computerChoice=="scissors" | humanChoice=="scissors" & computerChoice=="rock") {
        console.log("You lose! ", computerChoice, " beats ", humanChoice);
        return(0);
    } else if(humanChoice == computerChoice) {
        console.log("Draw!");
        return(1);
    } else {
        console.log("You win! ", humanChoice, " beats ", computerChoice);
        return(2);
    }
}

let humanScore = 0;
let computerScore = 0;
// let cc = getComputerChoice()
// let hc = getHumanChoice();
// console.log("Computer: ", cc);
// console.log("You: ", hc);

let score = playRound(getHumanChoice(), getComputerChoice());

if(score == 0) {
    computerScore++;
} else if (score== 2){
    humanScore++;
} 


