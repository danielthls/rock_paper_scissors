function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) +1;
    let computerChoice = ''
    if (number === 1) {
        computerChoice = 'rock'
    } else if (number === 2) {
        computerChoice = 'scissors'
    } else {
        computerChoice = 'paper'
    }
    return computerChoice
}
function playerSelect() {
    let input = prompt()
    let choice = input.toLowerCase();
    return choice;
}

function gameResult() {
    let playerChoice = playerSelect();
    let computerChoice = getComputerChoice()
    let result = ''

    if (playerChoice === 'rock') {
        result = 'You selected Rock!'
        if (computerChoice === 'rock') {
            result += ' The computer picked Rock! Draw!'
        } else if (computerChoice === 'scissors') {
            result += ' The computer picked Scissors! Win!'
        } else if (computerChoice === 'paper') {
            result += ' The computer picked Paper! Lose!'
        }
    } else if (playerChoice === 'scissors') {
        result = 'You selected Scissors!'
        if (computerChoice === 'rock') {
            result += ' The computer picked Rock! Lose!'
        } else if (computerChoice === 'scissors') {
            result += ' The computer picked Scissors! Draw!'
        } else if (computerChoice === 'paper') {
            result += ' The computer picked Paper! Win!'
        }
    } else if (playerChoice === 'paper') {
        result = 'You selected Paper!'
        if (computerChoice === 'rock') {
            result += ' The computer picked Rock! Win!'
        } else if (computerChoice === 'scissors') {
            result += ' The computer picked Scissors! Lose!'
        } else if (computerChoice === 'paper') {
            result += ' The computer picked Paper! Draw!'
        }
    } else {
        result = 'Invalid output!'
    }
    return result;
}

function game() {
    let games =[];
    for (i=0; i<5; i++) {
        games[i] = gameResult()
    }
    return games;
}

