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
        // console.log("You lose! ", computerChoice, " beats ", humanChoice);

        return 0;
    } else if(humanChoice == computerChoice) {
        // console.log("Draw!");
        return 2;
    } else {
        // console.log("You win! ", humanChoice, " beats ", computerChoice);
        return 1;
    }
}

function updateValues(humanChoice) {
    let cs = document.querySelector("#cs");
    let hs = document.querySelector("#hs");
    let cc = document.querySelector("#cc");
    let hc = document.querySelector("#hc");
    let res = document.querySelector("#res");
    let comp = getComputerChoice();
    let score = playRound(humanChoice, comp);
    cc.textContent = comp;
    hc.textContent = humanChoice;
    if(score == 0) {
        cs.value = ++cs.value;
        cs.textContent = cs.value;
        res.textContent = "Lose!"
        // console.log(cs.value);
        // computerScore.value++;
    } else if (score == 1) {
        hs.value = ++hs.value;
        hs.textContent = hs.value;
        res.textContent = "Win!"
        // document.querySelector("#hs").value++;
        // humanScore.value++;
    } else {
        res.textContent = "Draw!";
    }
    if(cs.value == 5) {
        res.textContent = "Game Winner: Computer!";
        hs.value = 0;
        cs.value = 0;
        cs.textContent = cs.value;
        hs.textContent = hs.value;
    } else if (hs.value == 5) {
        res.textContent = "Game Winner: Human!";
        hs.value = 0;
        cs.value = 0;
        cs.textContent = cs.value;
        hs.textContent = hs.value;
    }
}
// let humanScore = 0;
// let computerScore = 0;
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
// const div = document.createElement("div");
const div = document.querySelector("#results");
const choices = document.createElement("div");
const wl = document.createElement("div");
const div1 = document.createElement("div");
const div2 = document.createElement("div");
const res = document.createElement("span");
const hc = document.createElement("span");
const cc = document.createElement("span");
const span1 = document.createElement("span");
const span2 = document.createElement("span");
const humanScore = document.createElement("span");
const computerScore = document.createElement("span");


res.id = "res";
hc.id = "hc";
cc.id = "cc";

// wl.innerText += "Result: " + res.textContent;

hc.textContent = "N/A";
cc.textContent = "N/A";
res.textContent = "No games played"; //win loss

const human = document.createElement("span");
const computer = document.createElement("span");
// choices.textContent = "Player chose: " + hc + " Computer chose: " + cc + "\n";
human.textContent = "Player chose: ";
// choices.textContent = "Player chose: ";
human.appendChild(hc);
computer.textContent = " Computer chose: ";
computer.appendChild(cc);
choices.appendChild(human);
choices.appendChild(computer);
wl.textContent = "Results: "
// res.textContent;
wl.appendChild(res);

div.textContent = "First to 5 wins";
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

div1.appendChild(span1);
div2.appendChild(span2);
choices.appendChild(wl);
// wl.appendChild(res);
div.appendChild(choices);
div.appendChild(div1);
div.appendChild(div2);


//create scorekeep function
// div.textContent
rock.addEventListener("click", () => {
    updateValues("rock");
});
paper.addEventListener("click", () => {
    updateValues("paper");
});
scissors.addEventListener("click", () => {
    updateValues("scissors");
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


