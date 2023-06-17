function game() {

    const choiceOfWeapon = ["Rock", "Paper", "Scissors"];

    function getComputerChoice() { 
        return choiceOfWeapon[Math.floor(Math.random() * choiceOfWeapon.length)];
    }

    let playerWeapon = prompt("Choose your weapon... Rock, Paper, Scissors?");
    let computerWeapon = getComputerChoice();

    function playRound(playerWeapon, computerWeapon) {
        playerWeapon = playerWeapon.toLowerCase();
        computerWeapon = getComputerChoice().toLowerCase();
        
        if (playerWeapon == computerWeapon) {
            return "Draw";
        } else if ((playerWeapon == "rock" && computerWeapon == "paper") ||
            (playerWeapon == "paper" && computerWeapon == "scissors") ||
            (playerWeapon == "scissors" && computerWeapon == "rock"))
            { return "Better luck next time, kid.";
        } else ((playerWeapon == "rock" && computerWeapon == "scissors") ||
            (playerWeapon == "paper" && computerWeapon == "rock") ||
            (playerWeapon == "scissors" && computerWeapon == "paper"))
            { return "Huh, you won.";
        }
    }
    console.log(playRound(playerWeapon, computerWeapon));
}