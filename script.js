// console.log("Hello World");
function getComputerChoice() {
    let option = Math.floor(Math.random*3);
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
    return choice;
}