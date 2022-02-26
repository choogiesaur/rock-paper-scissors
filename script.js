// Global var holding valid choices
const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    let rand = Math.floor(Math.random() * 3)
    return choices[rand];
}

function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    // Invalid choice or tie result.
    if(!(choices.includes(playerSelection))){
        return "Not a valid choice."
    }else if(playerSelection == computerSelection) {
        return "It's a tie!"
    }
    
    // One side wins results.
    if(playerSelection == 'rock' && computerSelection == 'scissors'){
        return "You win! Rock beats Scissors"
    } else if(playerSelection == 'scissors' && computerSelection == 'rock'){
        return "You lose! Rock beats Scissors"
    } else if(playerSelection == 'paper' && computerSelection == 'rock'){
        return "You win! Paper beats Rock"
    } else if(playerSelection == 'rock' && computerSelection == 'paper'){
        return "You lose! Paper beats Rock"
    } else if(playerSelection == 'scissors' && computerSelection == 'paper'){
        return "You win! Scissors beats Paper"
    } else if(playerSelection == 'paper' && computerSelection == 'scissors'){
        return "You lose! Scissors beats Paper"
    }
}

// Play 5 rounds keeping track of wins and losses. Ties and invalids are not tracked.
function game() {
    
    let playerWins = 0;
    let computerWins = 0;
    
    // Play 5 rounds
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("What is your choice?");
        let computerSelection = computerPlay();

        // Play one round and increment win counters.
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if(result.includes("win")) {
            playerWins++;
        } else if(result.includes("lose")) {
            computerWins++;
        }
    }

    console.log(`Player Wins: ${playerWins}, Computer Wins:${computerWins}`);

    // Determine the overall winner.
    if(playerWins > computerWins){
        console.log('You win overall!');
    }else if(computerWins > playerWins){
        console.log('Computer wins overall :(')
    }else{
        console.log('It was a tie.');
    }
}

console.log(choices);
game();