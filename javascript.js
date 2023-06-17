let computerWeapon = ["Rock", "Paper", "Scissors"];
let playerWeapon = prompt("Choose your weapon... Rock, Paper, Scissors?")

function getComputerChoice(choiceOfWeapon) { 
        return choiceOfWeapon[Math.floor(Math.random() * computerWeapon.length)];
}

function playRound(playerWeapon, computerWeapon) {
    playerWeapon.toLowerCase()
    computerWeapon.toLowerCase()
    
    if (playerWeapon == computerWeapon) {
        return "Draw";
    } else if (playerWeapon == "rock" && computerWeapon == "paper") {
        return "Better luck next time."
    } else if (playerWeapon == "rock" && computerWeapon == "scissors") {
        return "You win."
    } else if (playerWeapon == "scissors" && computerWeapon == "rock") {
        return "Better luck next time."
    } else if (playerWeapon == "scissors" && computerWeapon == "paper") {
        return "You win."
    } else if (playerWeapon == "paper" && computerWeapon == "scissors") {
        return "Better luck next time."
    } else if (playerWeapon == "paper" && computerWeapon == "rock") {
        return "You win."
    } 
}

