function getComputerChoice() {
    //Assign a number to the computer to determine its pick (1=rock, 2=scissors, 3=paper)
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
    //read player`s input
    let input = prompt()
    if (input === null) {
        input = '';
    }
    let choice = input.toLowerCase();
    return choice;
}

function gameResult(playerChoice, computerChoice) {
    //Compare the two results to determine who wins.
    //Conditionals include all three possibilities for each possible pick the player chooses.
    let result = '';
    let resultCounter = '';


    if (playerChoice === 'rock') {
        result = 'You selected Rock!'
        if (computerChoice === 'rock') {
            result += ' The computer picked Rock! Draw!'
            resultCounter = 'draw';
        } else if (computerChoice === 'scissors') {
            result += ' The computer picked Scissors! Win!'
            resultCounter = 'win';
        } else if (computerChoice === 'paper') {
            resultCounter = 'lose';
            result += ' The computer picked Paper! Lose!'
        }
    } else if (playerChoice === 'scissors') {
        result = 'You selected Scissors!'
        if (computerChoice === 'rock') {
            result += ' The computer picked Rock! Lose!'
            resultCounter = 'lose';
        } else if (computerChoice === 'scissors') {
            result += ' The computer picked Scissors! Draw!'
            resultCounter = 'draw';
        } else if (computerChoice === 'paper') {
            result += ' The computer picked Paper! Win!'
            resultCounter = 'win';
        }
    } else if (playerChoice === 'paper') {
        result = 'You selected Paper!'
        if (computerChoice === 'rock') {
            result += ' The computer picked Rock! Win!'
            resultCounter = 'win'
        } else if (computerChoice === 'scissors') {
            result += ' The computer picked Scissors! Lose!'
            resultCounter = 'lose'
        } else if (computerChoice === 'paper') {
            result += ' The computer picked Paper! Draw!'
            resultCounter = 'draw'
        }
    } else {
        result = 'Invalid output!'
    }
    console.log(result);
    return resultCounter;
}

function game() {
    //add each win, loss, draw or invalid output to one of the elements in the array
    let result = ''
    let score = [0,0,0,0];
    for (i=0; i<5; i++) {
        //results tracker: [wins, losses, draws, invalid answers]
        result = gameResult(playerSelect(),getComputerChoice())
        if (result === 'win') {
            score[0] ++;
        } else if (result === 'lose') {
            score[1] ++;
        } else if (result === 'draw') {
            score[2] ++;
        } else {
            score[3] ++;
        }
    }
    let message = 'Wins: ' + score[0] 
    + ', Losses: ' + score[1] 
    + ', Draws: ' + score[2] 
    + ', Invalid Outputs: ' + score[3]; 
    console.log(message)
    return message;
}

game();
