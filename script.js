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
        return true;
    } else if(humanChoice == computerChoice) {
        console.log("Draw!");
        // return(1);
    } else {
        console.log("You win! ", humanChoice, " beats ", computerChoice);
        return false;
    }
}
// let humanScore = 0;
// let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
// const div = document.createElement("div");
const div = document.querySelector("#results");
const div2 = document.createElement("div");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
const humanScore = document.createElement("span");
const computerScore = document.createElement("span");

span1.textContent = "Your Score: ";
span2.textContent = "Computer Score: ";
humanScore.id = "hs";
humanScore.value = 0;
computerScore.id = "cs";
computerScore.value = 0;
humanScore.textContent= humanScore.value;
computerScore.textContent = computerScore.value;
// computerScore.style.content = "attr(value)";
span1.appendChild(humanScore);
span2.appendChild(computerScore);

div.appendChild(span1);
div2.appendChild(span2);

div.appendChild(div2);


// div.textContent
rock.addEventListener("click", () => {
    let cs = document.querySelector("#cs");
    let hs = document.querySelector("#hs");
    let score = playRound("rock", getComputerChoice());
    if(score) {
        cs.value = ++cs.value;
        cs.textContent = cs.value;
        // console.log(cs.value);
        // computerScore.value++;
    } else {
        hs.value = ++hs.value;
        hs.textContent = hs.value;
        // document.querySelector("#hs").value++;
        // humanScore.value++;
    }
});
paper.addEventListener("click", () => {
    let score = playRound("paper", getComputerChoice());
    if(score) {
        cs.value = ++cs.value;
        cs.textContent = cs.value;
        // console.log(cs.value);
        // computerScore.value++;
    } else {
        hs.value = ++hs.value;
        hs.textContent = hs.value;
        // document.querySelector("#hs").value++;
        // humanScore.value++;
    }
});
scissors.addEventListener("click", () => {
    let score = playRound("scissors", getComputerChoice());
    if(score) {
        cs.value = ++cs.value;
        cs.textContent = cs.value;
        // console.log(cs.value);
        // computerScore.value++;
    } else {
        hs.value = ++hs.value;
        hs.textContent = hs.value;
        // document.querySelector("#hs").value++;
        // humanScore.value++;
    }
});
// div.textContent = "Human Score: " + humanScore + " " + "Computer Score: " + computerScore;
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


