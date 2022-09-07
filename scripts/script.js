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

    colorButton('.button1',computerChoice);
    
    return computerChoice
}

function colorButton(button,choice) {
    
    removeColorButton(button);

    const divSelect = document.querySelectorAll(button);

    for (i=0; i<divSelect.length; i++) {
        
        let divButton = divSelect[i];
        
        if (divButton.id === choice) {
            divButton.style.background = 'blue';
        }
    }
    return;
}

function removeColorButton(button) {
    const playerSelect1 = document.querySelectorAll(button);
    for (i=0; i<playerSelect1.length; i++) {
        let playerButton = playerSelect1[i];
        playerButton.style.background = 'none';
    }

    return;
}

function playerSelect(value) {
    //read player`s input
    let choice = value.toLowerCase();
    colorButton('.button',choice)
    return choice;
}

function gameResult(playerChoice, computerChoice) {
    //Compare the two results to determine who wins.
    //Conditionals include all three possibilities for each possible pick the player chooses.
    let result = '';
    let resultCounter = '';
    let winner = '---';
    let loser = '---';

    if (playerChoice === 'rock') {
        //result = 'You selected Rock!'
        if (computerChoice === 'rock') {
           winner = 'player';
           loser = 'player';
           // result += ' The computer picked Rock! Draw!'
            //resultCounter = 'draw';
        } else if (computerChoice === 'scissors') {
            winner = 'player';
            loser = 'computer';
            //result += ' The computer picked Scissors! Win!'
            //resultCounter = 'win';
        } else if (computerChoice === 'paper') {
           winner = 'computer';
           loser = 'player';
            //resultCounter = 'lose';
            //result += ' The computer picked Paper! Lose!'
        }
    } else if (playerChoice === 'scissors') {
        //result = 'You selected Scissors!'
        if (computerChoice === 'rock') {
            winner = 'computer';
            loser = 'player';
            //result += ' The computer picked Rock! Lose!'
            //resultCounter = 'lose';
        } else if (computerChoice === 'scissors') {
            winner = 'player';
           loser = 'player';
            //result += ' The computer picked Scissors! Draw!'
            //resultCounter = 'draw';
        } else if (computerChoice === 'paper') {
            winner = 'player';
           loser = 'computer';
            //result += ' The computer picked Paper! Win!'
            //resultCounter = 'win';
        }
    } else if (playerChoice === 'paper') {
        //result = 'You selected Paper!'
        if (computerChoice === 'rock') {
            winner = 'player';
            loser = 'computer';
            //result += ' The computer picked Rock! Win!'
           //resultCounter = 'win'
        } else if (computerChoice === 'scissors') {
            winner = 'computer';
            loser = 'player';
            //result += ' The computer picked Scissors! Lose!'
            //resultCounter = 'lose'
        } else if (computerChoice === 'paper') {
            winner = 'player';
            loser = 'player';
            //result += ' The computer picked Paper! Draw!'
            //resultCounter = 'draw'
        }
    //} else {
        //result = 'Invalid output!'
    }
    console.log(winner, loser);
    //let green = document.querySelector('.' + CSS.escape(winner) + '-buttons')

    //let red = document.querySelector('.' + CSS.escape(loser) + '-buttons')

    drawBoard(winner, loser);

    return;
    //console.log(result);
    //return resultCounter;
}

function clearBoard() {
    const playerClear = document.querySelector('.player-buttons');
    const computerClear =document.querySelector('.computer-buttons');
    playerClear.style.background = 'none';
    computerClear.style.background = 'none';
}

function drawBoard(green,red) {
    let roundWinner = document.querySelector('.' + CSS.escape(green) + '-buttons');
    let roundLoser = document.querySelector('.' + CSS.escape(red) + '-buttons');
    roundWinner.style.background = 'green';
    roundLoser.style.background = 'red';
    if (green === red) {
        roundDraw = document.querySelector('.computer-buttons')
        roundWinner.style.background = 'yellow';
        roundDraw.style.background = 'yellow';
    }
}

function game() {
    clearResult();
    clearBoard();
    currentScore();
}

function currentScore() {
    
}

const divSelect = document.querySelectorAll('.button');

divSelect.forEach(function(divButton) {
    divButton.addEventListener("click", function() {
        gameResult(playerSelect(divButton.id),getComputerChoice())
    });
});


