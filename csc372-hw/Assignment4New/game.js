const choices = ["rock", "paper", "scissors"];
let wins = 0, losses = 0, ties = 0;

document.querySelectorAll(".choice").forEach(choice => {
    choice.addEventListener("click", function() {
        document.querySelectorAll(".choice").forEach(img => img.classList.remove("selected"));
        this.classList.add("selected");

        let playerChoice = this.id;
        let computerChoice = choices[Math.floor(Math.random() * choices.length)];

        document.getElementById("computer-choice").src = computerChoice + ".png";

        let result = getWinner(playerChoice, computerChoice);
        document.getElementById("result-text").textContent = result;

        updateScore(result);
    });
});

document.getElementById("play-again").addEventListener("click", () => {
    document.getElementById("computer-choice").src = "question-mark.PNG";
    document.getElementById("result-text").textContent = "Make your move!";
    document.querySelectorAll(".choice").forEach(img => img.classList.remove("selected"));
});

function getWinner(player, computer) {
    if (player === computer) {
        ties++;
        return "It's a Tie!";
    }
    if ((player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")) {
        wins++;
        return "You Win!";
    }
    losses++;
    return "Computer Wins!";
}

function updateScore(result) {
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("ties").textContent = ties;
}
