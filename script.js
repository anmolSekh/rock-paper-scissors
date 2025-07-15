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

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const div = document.createElement("div");
rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice())
});
paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice())
});
scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice())
});
// div.appendChild(rock);
// div.appendChild(paper);
// div.appendChild(scissors);

// document.appendChild(div);
// function playGame() {
//     let humanScore = 0;
//     let computerScore = 0;
//     for(i = 0; i < 5; i++) {
//         let score = playRound(getHumanChoice(), getComputerChoice());

//         if(score == 0) {
//             computerScore++;
//         } else if (score== 2){
//             humanScore++;
//         }
//     }
//     console.log("Your score: ", humanScore, "Computer score: ", computerScore);
//     if(humanScore > computerScore) {
//         console.log("You win!");
//     } else if(humanScore==computerScore) {
//         console.log("Draw!");
//     } else {
//         console.log("You lose!");
//     }
    
// }

// playGame();


