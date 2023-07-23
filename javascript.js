function game() {
    for (i= 0; i < 5; i++) {
        let playerWeapon = prompt("Choose your weapon... Rock, Paper, Scissors?");
        const choiceOfWeapon = ["Rock", "Paper", "Scissors"];

        function getComputerChoice() { 
            return choiceOfWeapon[Math.floor(Math.random() * choiceOfWeapon.length)];
        }

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
                } else if ((playerWeapon == "rock" && computerWeapon == "scissors") ||
                    (playerWeapon == "paper" && computerWeapon == "rock") ||
                    (playerWeapon == "scissors" && computerWeapon == "paper"))
                    { return "Huh, you won.";
                } else (playerWeapon !== "rock" || "paper" || "scissors")
                    {return "Hey. Like they say, 'Don't bring a knife to a fist fight', bud.";
                }
            }
            console.log(playRound(playerWeapon, computerWeapon));
    }
}

game();