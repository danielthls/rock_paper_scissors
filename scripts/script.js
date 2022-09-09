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

    backgroundColor('.button1','blue',computerChoice);
    
    return computerChoice
}

function backgroundColor(cssClass,color,choice) {
    
    removeColorButton(cssClass);

    const divSelect = document.querySelectorAll(cssClass);

    for (i=0; i<divSelect.length; i++) {
        
        let divButton = divSelect[i];
        
        if (divButton.id === choice) {
            divButton.style.background = color;
        }
    }
    return;
}

function removeColorButton(cssClass) {
    const playerSelect1 = document.querySelectorAll(cssClass);
    for (i=0; i<playerSelect1.length; i++) {
        let playerButton = playerSelect1[i];
        playerButton.style.background = 'none';
    }

    return;
}

function playerSelect(value) {
    //read player`s input
    let choice = value.toLowerCase();
    backgroundColor('.button','blue',choice)
    return choice;
}

function gameResult(playerChoice, computerChoice) {
    //Compare the two results to determine who wins.
    //Conditionals include all three possibilities for each possible pick the player chooses.
    let result = '';
    let resultCounter = '';
    let winner = '';
    let loser = '';
    

    if (playerChoice === 'rock') {
        result = 'You selected Rock!'
        if (computerChoice === 'rock') {
           winner = 'player';
           loser = 'player';
           result += " The computer picked Rock! It's a draw!"
           resultCounter = 'draw';
        } else if (computerChoice === 'scissors') {
            winner = 'player';
            loser = 'computer';
            result += ' The computer picked Scissors! You win!'
            resultCounter = 'win';
        } else if (computerChoice === 'paper') {
           winner = 'computer';
           loser = 'player';
           resultCounter = 'lose';
           result += ' The computer picked Paper! You lose!'
        }
    } else if (playerChoice === 'scissors') {
        result = 'You selected Scissors!'
        if (computerChoice === 'rock') {
            winner = 'computer';
            loser = 'player';
            result += ' The computer picked Rock! You lose!'
            resultCounter = 'lose';
        } else if (computerChoice === 'scissors') {
            winner = 'player';
           loser = 'player';
            result += " The computer picked Scissors! It's a draw!"
            resultCounter = 'draw';
        } else if (computerChoice === 'paper') {
            winner = 'player';
           loser = 'computer';
            result += ' The computer picked Paper! You win!'
            resultCounter = 'win';
        }
    } else if (playerChoice === 'paper') {
        result = 'You selected Paper!'
        if (computerChoice === 'rock') {
            winner = 'player';
            loser = 'computer';
            result += ' The computer picked Rock! You win!'
           resultCounter = 'win'
        } else if (computerChoice === 'scissors') {
            winner = 'computer';
            loser = 'player';
            result += ' The computer picked Scissors! You lose!'
            resultCounter = 'lose'
        } else if (computerChoice === 'paper') {
            winner = 'player';
            loser = 'player';
            result += " The computer picked Paper! It's a draw!"
            resultCounter = 'draw'
        }
    }

    drawBoard(winner, loser);

    roundResult.textContent = result;

    return resultCounter;
}

function clearBoard() {
    removeColorButton('.button')
    removeColorButton('.button1')
    playerClear.style.background = 'none';
    computerClear.style.background = 'none';
    wins.textContent = '0';
    losses.textContent = '0';
    draws.textContent = '0';
    roundResult.textContent = "";
    winDisplay.textContent = "";
    return;
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
    clearBoard();
}

function finalResult(wins, losses) {
    
    if (wins >= 5) {
        winDisplay.textContent = "Player wins!!"
        newGame.textContent = '1';
    } else if (losses >= 5) {
        winDisplay.textContent = "The Computer wins!!"
        newGame.textContent = '1';
    }
}

function currentScore(divButton) {
    
    //check if a game already has 5 wins and reset it if it does
    if (newGame.textContent === '1') {
        clearBoard();
        newGame.textContent = 0
        return;
    }
    
    let winsInt = parseInt(wins.textContent);
    let lossesInt = parseInt(losses.textContent);
    let drawsInt = parseInt(draws.textContent);

    result = gameResult(playerSelect(divButton),getComputerChoice());

    if (result === 'win') {
        console.log('win test')
        winsInt ++;
        wins.textContent = winsInt;
    } else if (result === 'lose') {
        lossesInt ++;
        losses.textContent = lossesInt;
    } else if (result === 'draw') {
        drawsInt ++;
        draws.textContent = drawsInt;
    }

    finalResult(winsInt,lossesInt);
}

let roundResult = document.querySelector('.round-result');//round announcement text
let wins = document.querySelector('.wins'); //Player wins counter
let losses = document.querySelector('.losses'); //Computer wins counter
let draws = document.querySelector('.draws'); //Draws counter
const divSelect = document.querySelectorAll('.button'); //select the button class for the 3 player buttons
let newGame = document.querySelector('.new-game'); //div to check if either the player or the computer have won 5 matches
const playerClear = document.querySelector('.player-buttons');
const computerClear =document.querySelector('.computer-buttons');
const winDisplay = document.querySelector('.result-announcement');

//select among the class .button class the ID of the selected button
divSelect.forEach(function(divButton) {
    divButton.addEventListener("click", function() {
        currentScore(divButton.id);
    });
});


