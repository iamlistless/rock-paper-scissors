const choiceOfWeapon = ['rock', 'paper', 'scissors'];
const buttons = document.querySelectorAll('[data-player-weapon]');
const start = document.querySelector('.start');
const playerScoreKeeper = document.querySelector('.playerScoreKeeper')
const computerScoreKeeper = document.querySelector('.computerScoreKeeper')
const results = document.querySelector('.results');
const battleResults = document.querySelector('.battleResults');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
    button.disabled = true;
})

start.addEventListener("click", e => {
    startGame();
    start.disabled = true;
})

function startGame() {
    buttons.forEach(button => {
        button.disabled = false;
    })
    battleResults.innerText = "Who will be the victor?";
    computerScoreKeeper.innerText = `${computerScore = 0}`;
    playerScoreKeeper.innerText = `${playerScore = 0}`;
}

function getComputerWeapon() {
    return choiceOfWeapon[Math.floor(Math.random() * choiceOfWeapon.length)];
}

buttons.forEach(button => {
    button.addEventListener("click", e => {
        const playerWeapon = button.dataset.playerWeapon
        getPlayerWeapon(playerWeapon)
        declareVictor();
    })
})

function getPlayerWeapon(playerWeapon) {
    const computerWeapon = getComputerWeapon();
    findVictor(playerWeapon, computerWeapon);
}

function findVictor(playerWeapon, computerWeapon) {
    if (playerWeapon == computerWeapon) {
        battleResults.innerText = "That was stale, mate.";
    } else if ((playerWeapon == "rock" && computerWeapon == "paper") ||
        (playerWeapon == "paper" && computerWeapon == "scissors") ||
        (playerWeapon == "scissors" && computerWeapon == "rock")) { 
            battleResults.innerText = "Next time, kid.";
            computerScore++;
            computerScoreKeeper.innerText = `${computerScore}`;
    } else if ((playerWeapon == "rock" && computerWeapon == "scissors") ||
        (playerWeapon == "paper" && computerWeapon == "rock") ||
        (playerWeapon == "scissors" && computerWeapon == "paper")) { 
            battleResults.innerText = "You got lucky.";
            playerScore++;
            playerScoreKeeper.innerText = `${playerScore}`;
    }
}

function declareVictor() {
    if (computerScore == 5 && playerScore == 0) {
        battleResults.innerText = "Skill issue.";
        endGame();
    } else if (computerScore == 5) {
        battleResults.innerText = "Unlucky.";
        endGame();
    } else if (playerScore == 5 && computerScore == 0) {
        battleResults.innerText = "Impossible...";
        endGame();
    } else if (playerScore == 5) {
        battleResults.innerText = "Huh, you won.";
        endGame();
    } else {
        return;
    }
}

function endGame() {
    buttons.forEach(button => {
        button.disabled = true;
    })
    start.disabled = false;
}

// function game() {
//     for (i = 0; i < 5; i++) {
//         const buttons = document.querySelectorAll('[data-type-of-weapon]');
        
//         buttons.forEach(button => {
//             button.addEventListener("click", e => {
//                 let playerWeapon = button.dataset.typeOfWeapon;
                
//                 let choiceOfWeapon = ["rock", "paper", "scissors"];

//                 function getComputerChoice() { 
//                     return choiceOfWeapon[Math.floor(Math.random() * choiceOfWeapon.length)];
//                 }
//                 computerWeapon = getComputerChoice();
//                 playRound(playerWeapon, computerWeapon);

//                 function playRound(playerWeapon, computerWeapon) {
//                         playerWeapon = playerWeapon.toLowerCase();
//                         computerWeapon = computerWeapon.toLowerCase();
//                         if (playerWeapon == computerWeapon) {
//                             return result = "That was stale, mate.";
//                         } else if ((playerWeapon == "rock" && computerWeapon == "paper") ||
//                             (playerWeapon == "paper" && computerWeapon == "scissors") ||
//                             (playerWeapon == "scissors" && computerWeapon == "rock"))
//                             { return result = "Better luck next time, kid.";
//                         } else if ((playerWeapon == "rock" && computerWeapon == "scissors") ||
//                             (playerWeapon == "paper" && computerWeapon == "rock") ||
//                             (playerWeapon == "scissors" && computerWeapon == "paper"))
//                             { return result = "Huh, you won.";
//                         } else (playerWeapon !== "rock" || "paper" || "scissors")
//                             {return result = "Hey. Like they say, 'Don't bring a knife to a fist fight', bud.";
//                         }
//                 }
//                 document.querySelector('.battleResults').textContent = `${playRound(playerWeapon, computerWeapon)}`;
//             })
//         });
//     }
// }
// game()



// function game() {
//     for (i= 0; i < 5; i++) {
//         let playerWeapon = prompt("Choose your weapon... Rock, Paper, Scissors?");
//         const choiceOfWeapon = ["Rock", "Paper", "Scissors"];

//         function getComputerChoice() { 
//             return choiceOfWeapon[Math.floor(Math.random() * choiceOfWeapon.length)];
//         }

//         let computerWeapon = getComputerChoice();

//             function playRound(playerWeapon, computerWeapon) {
//                 playerWeapon = playerWeapon.toLowerCase();
//                 computerWeapon = getComputerChoice().toLowerCase();
                
//                 if (playerWeapon == computerWeapon) {
//                     return "Draw";
//                 } else if ((playerWeapon == "rock" && computerWeapon == "paper") ||
//                     (playerWeapon == "paper" && computerWeapon == "scissors") ||
//                     (playerWeapon == "scissors" && computerWeapon == "rock"))
//                     { return "Better luck next time, kid.";
//                 } else if ((playerWeapon == "rock" && computerWeapon == "scissors") ||
//                     (playerWeapon == "paper" && computerWeapon == "rock") ||
//                     (playerWeapon == "scissors" && computerWeapon == "paper"))
//                     { return "Huh, you won.";
//                 } else (playerWeapon !== "rock" || "paper" || "scissors")
//                     {return "Hey. Like they say, 'Don't bring a knife to a fist fight', bud.";
//                 }
//             }
//             console.log(playRound(playerWeapon, computerWeapon));
//     }
// }

// game();
