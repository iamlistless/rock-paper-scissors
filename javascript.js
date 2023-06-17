let weapon = ["Rock", "Paper", "Scissors"];

function getComputerChoice(choiceOfWeapon) { {
        return choiceOfWeapon[Math.floor(Math.random() * weapon.length)];
        console.log(getComputerChoice(weapon));
    }
}