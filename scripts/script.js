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
    let roundResult = document.querySelector('.round-result');

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
    //let green = document.querySelector('.' + CSS.escape(winner) + '-buttons')

    //let red = document.querySelector('.' + CSS.escape(loser) + '-buttons')

    drawBoard(winner, loser);

    roundResult.textContent = result;

    return resultCounter;
    //console.log(result);
}

function clearBoard(divButton) {
    removeColorButton('.button')
    removeColorButton('.button1')
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
    clearBoard();
}

function result(wins, losses) {
    
}

function currentScore(divButton) {
    let numberOfGames = document.querySelector('.number-of-games');
    let wins = document.querySelector('.wins');
    let losses = document.querySelector('.losses');
    let draws = document.querySelector('.draws');

    let numberOfGamesInt = parseInt(numberOfGames.textContent);
    let winsInt = parseInt(wins.textContent);
    let lossesInt = parseInt(losses.textContent);
    let drawsInt = parseInt(draws.textContent);

    console.log(numberOfGamesInt);

    if (numberOfGamesInt >= 5) {
        return;
    } else {
        numberOfGamesInt ++;
        numberOfGames.textContent = numberOfGamesInt;
    }

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

}

const divSelect = document.querySelectorAll('.button');

divSelect.forEach(function(divButton) {
    divButton.addEventListener("click", function() {
        currentScore(divButton.id);
    });
});


