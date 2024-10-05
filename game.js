// Define potential choiceshttp://127.0.0.1:3000/index.html
const weapon = ['rock', 'paper', 'scissors']

// Define function to return a random number between 0 and 2
function getRandomInt0to2() {
    return Math.floor(Math.random() * 3);
}

// Return the CPU's choice using a random number generator
function getComputerChoice() {
    return weapon[getRandomInt0to2()];
}

// Get player's choice via input prompt
function getPlayerChoice() {
    const input = prompt("Rock, paper, or scissors?").toLowerCase();
    if (weapon.includes(input)) {
        console.log(`You chose ${input}!`);
        return input;
    } 
    else {
        console.log('Error! Invalid choice!');
        getPlayerChoice();
    }
}

// Play a single round of rock, paper, scissors
function playRound(playerChoice, computerChoice) {
    console.log(`Computer chose ${computerChoice}!`);
    let state = playerChoice + '|' + computerChoice;
    switch(state) {
        case 'rock|rock':
            console.log('You tie! Both players chose rock.');
            break;
        case 'rock|paper':
            console.log('You lose! Paper beats rock.');
            computerScore++;
            break;
        case 'rock|scissors':
            console.log('You win! Rock beats scissors.');
            playerScore++;
            break;
        case 'paper|rock':
            console.log('You win! Paper beats rock.');
            playerScore++;
            break;
        case 'paper|paper':
            console.log('You tie! Both players chose paper.');
            break;
        case 'paper|scissors':
            console.log('You lose! Scissors beats paper.');
            computerScore++;
            break;
        case 'scissors|rock':
            console.log('You lose! Rock beats scissors.');
            computerScore++;
            break;
        case 'scissors|paper':
            console.log('You win! Scissors beats paper.');
            playerScore++;
            break;
        case 'scissors|scissors':
            console.log('You tie! Both players chose scissors.');
            break;
    }
}

function playGame(maxRounds) {
    console.log(`Let's play Rock, Paper, Scissors, best of ${maxRounds}!`);

    for (i = 0; i < maxRounds; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(`Score: ${playerScore}:${computerScore}`)
    }

    if (playerScore > computerScore) {
        console.log('You win! Thanks for playing!');
    }
    if (playerScore === computerScore) {
        console.log('You tied! Thanks for playing!');
    } 
    if (playerScore < computerScore) {
        console.log('You lost... Thanks for playing!');
    }
}

// Declare default scores for both players and play a best of 5
let playerScore = 0;
let computerScore = 0;
playGame(5);
