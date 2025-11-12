// ACCESS ALL ELEMENTS
let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let draw = document.querySelector("#draw-score");
let message = document.querySelector("#msg");
let resetBtn = document.querySelector("#reset-btn");


// SCORE VARIABLES
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// USER CLICK EVENT HANDLING
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        // USER CHOICE
        let userChoice = choice.getAttribute("id");
        playGame(userChoice)
    })
})


// COMPUTER RANDOM CHOICE FUNCTION
const getComputerChoice = () => {
    let options = ["rock", "paper", "scissors"];
    let randomIndx = Math.floor((Math.random() * 3));
    return options[randomIndx];
}


// MAIN GAME FUNCTION
const playGame = (userChoice) => {
    console.log("User Choice =", userChoice);
    // COMPUTER CHOICE
    const compChoice = getComputerChoice();
    console.log("Comp Choice =", compChoice);


    // CHECK WINNER
    if(userChoice === compChoice) {
        drawGame(); 
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            // scissors, paper
            userWin = compChoice === "scissors" ? true : false;
        } else if (userChoice == "paper") {
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true; 
        } else {
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}


// WINNER FUNCTION 
const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        playerScore++
        userScore.innerText = playerScore;
        message.innerText = `🎉🏆 Congrats, You Win! - ${userChoice.toUpperCase()} Beat ${compChoice.toUpperCase()}`;
        message.style.backgroundColor = "green";
        message.style.color = "white";
        message.style.fontSize = "14px";
    } else {
        computerScore++;
        compScore.innerText = computerScore;
        message.innerText = `😞😢 Computer Wins! - ${compChoice.toUpperCase()} Beat ${userChoice.toUpperCase()}`;
        message.style.backgroundColor = "red";
        message.style.color = "white";
    }
}


// DRAW FUNCTION
const drawGame = () => {
    drawScore++;
    draw.innerText = drawScore;
    message.innerText = "⚡Equal Power! It's a Draw! 🤖" ;
    message.style.backgroundColor = "#f7d358";
    message.style.color = "#000";
}

// RESET GAME FUNCTION
const resetGame = () => {
    playerScore = 0;
    computerScore = 0;
    drawScore = 0;

    userScore.innerText = playerScore;
    compScore.innerText = computerScore;
    draw.innerText = drawScore;

    message.innerText = "Play Your Move";
    message.style.backgroundColor = "rgba(207, 219, 235, 0.745)";
    message.style.color = "#131a2b";
}

// BUTTON LISTENER
resetBtn.addEventListener("click", resetGame)