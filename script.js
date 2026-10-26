
const buttons = document.querySelectorAll(".choice");

const userChoiceText = document.getElementById("user-choice");
const computerChoiceText = document.getElementById("computer-choice");
const resultText = document.getElementById("result");

const userScoreText = document.getElementById("user-score");
const computerScoreText = document.getElementById("computer-score");
const restartButton = document.getElementById("restart");

let userScore = 0;
let computerScore = 0;

const choices = ["rock", "paper", "scissors"];

const emojis = {
    rock: "🪨 Rock",
    paper: "📄 Paper",
    scissors: "✂️ Scissors"
};

// Play when the user clicks a choice button
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        const userChoice = button.dataset.choice;

        playGame(userChoice);
    });
});

// Game logic
function playGame(userChoice) {

    // Computer selects a random choice
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = choices[randomIndex];

    // Display both choices
    userChoiceText.textContent =
        "Your choice: " + emojis[userChoice];

    computerChoiceText.textContent =
        "Computer's choice: " + emojis[computerChoice];

    // Decide the winner
    if (userChoice === computerChoice) {

        resultText.textContent = "It's a Draw! 🤝";

    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {

        resultText.textContent = "You Win! 🎉";
        userScore++;

    } else {

        resultText.textContent = "You Lose! 😢";
        computerScore++;
    }

    // Update the scores on the webpage
    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;
}

// Restart the game
restartButton.addEventListener("click", function() {

    userScore = 0;
    computerScore = 0;

    userScoreText.textContent = 0;
    computerScoreText.textContent = 0;

    userChoiceText.textContent = "Your choice: -";
    computerChoiceText.textContent = "Computer's choice: -";
    resultText.textContent = "Make your move!";
});
