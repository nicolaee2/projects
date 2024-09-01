let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}

function getAbsoluteDistance(firstNumber, secondNumber) {
    return Math.abs(firstNumber - secondNumber);
}

function compareGuesses(userGuess, computerGuess, secretTarget) {

    let userDistance;
    if (userGuess >= 0 && userGuess <= 9) {
        userDistance = getAbsoluteDistance(userGuess, secretTarget);
    } else {
        alert("User input should be a number between 0-9");
            userDistance = 10;
    }
    const computerDistance = getAbsoluteDistance(computerGuess, secretTarget);

    if (userDistance <= computerDistance) {
        return true;
    }

    return false;
}

function updateScore(winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}