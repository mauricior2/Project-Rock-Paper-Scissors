// Global variables
let playerSelection, computerSelection;
let countPlayer = 0;
let countComputer = 0;
let countGame = 0;

// The player make it's choice
function getPlayerChoice() {
    let playerChoice = prompt('Chose and option "rock", "paper" or "scissors"', "").toLowerCase();
    return playerChoice;

}


// The computer make it's choice
function getComputerChoice() {
    //Holds the values that the computer selects from at random
    let computerArray = ['rock', 'paper', 'scissors'];

    //Holds the randomly selected value from computerArray 
    let computerChoice = computerArray[Math.floor(Math.random() * computerArray.length)];

    //Returns the computer selection
    return computerChoice;
}


// The structure of a single round of the game, it selected a winner and count the wins/loses
function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        countGame += 1;
        countPlayer = countPlayer;
        countComputer = countComputer;
        return ('Game ' + countGame + ':You are tie!! ' + playerSelection + ' vs ' + computerSelection + ' | Score P(' + countPlayer + ') C(' + countComputer +')');
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')) {
        countGame += 1;
        countPlayer += 1;
        countComputer = countComputer;
        return ('Game ' + countGame + ':You won!! ' + playerSelection + ' vs ' + computerSelection + ' | Score P(' + countPlayer + ') C(' + countComputer +')');
    }
    else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'rock')) {
        countGame += 1;
        countPlayer = countPlayer;
        countComputer += 1;
        return ('Game ' + countGame + ':You lose!! ' + playerSelection + ' vs ' + computerSelection + ' | Score P(' + countPlayer + ') C(' + countComputer +')');
    }
}


function game() {

    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice()
        computerSelection = getComputerChoice();
        let game1 = playRound(playerSelection, computerSelection);
        console.log(game1);
        
    }
    if(countPlayer > countComputer){
        console.log('The player is the winner with ' + countPlayer + ' points against ' + countComputer);
    }
    else if(countPlayer < countComputer){
        console.log('The computer is the winner with ' + countComputer + ' points against ' + countPlayer);
    }
    else {
        console.log('This is a tie game');
    }
    
}
game();