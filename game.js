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
/*function getPlayerChoice() {
    const input = prompt("Rock, paper, or scissors?").toLowerCase();
    if (weapon.includes(input)) {
        (`You chose ${input}!`);
        return input;
    } 
    else {
        console.log('Error! Invalid choice!');
        getPlayerChoice();
    }
}*/

// Initialize scores for each player
let playerScore = 0;
let computerScore = 0;

// Initalize prompt to later modify as game progresses
const prompt = document.querySelector('#prompt');
const promptText = document.createElement('h2');
promptText.setAttribute('style', 'white-space: pre;');
promptText.textContent = "Let's play Rock Paper Scissors!\r\nSelect a weapon below!\r\n";
prompt.appendChild(promptText);

// Add event listeners to RPS buttons
const choices = document.querySelectorAll('#choices > button');
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        playRound(choice.id, getComputerChoice());
    })
});

// Play a single round of rock, paper, scissors
function playRound(playerChoice, computerChoice) {
    promptText.textContent = `You chose ${playerChoice}\r\n`
    promptText.textContent += `Computer chose ${computerChoice}!\r\n`;
    let state = playerChoice + '|' + computerChoice;
    switch(state) {
        case 'rock|rock':
        case 'paper|paper':
        case 'scissors|scissors':    
            promptText.textContent += 'You tie!';
            break;
        case 'rock|scissors':
        case 'paper|rock':
        case 'scissors|paper':
            promptText.textContent +='You win!';
            playerScore++;
            break;
        default:
            promptText.textContent +='You lose!';
            computerScore++;
            break;
    }
    promptText.textContent += `\r\nScore: ${playerScore} - ${computerScore}\r\n`

    if (playerScore == 5) {
        promptText.textContent = `Score: ${playerScore} - ${computerScore}\r\nYou win!`
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        promptText.textContent = `Score: ${playerScore} - ${computerScore}\r\nYou lose...`
        playerScore = 0;
        computerScore = 0;
    }
}

/* function playGame(maxRounds=5) {
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
} */