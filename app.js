const computerScoreBoard=document.getElementById("computerScoreBoard")
const playerScoreBoard=document.getElementById("playerScoreBoard")
const movesEl=document.getElementById("moves")
const movesLeft=document.getElementById("moves-left")
const resultEl=document.getElementById("result")

let moves=0
let playerScore=0
let computerScore=0

const rockBtn=document.getElementById("rock")
const paperBtn=document.getElementById("paper")
const scissorsBtn=document.getElementById("scissors")
let playerOptions=[rockBtn,paperBtn,scissorsBtn]
let computerOptions=["rock","paper","scissors"]

playerOptions.forEach(element => {
    element.addEventListener("click",function(){
        moves++;
        movesLeft.textContent=`Moves left: ${10-moves}`
        const compChoiceNum = Math.floor(Math.random()*3)
        const compChoice=computerOptions[compChoiceNum]
        winner(this.innerText,compChoice)
        console.log(moves)
        if(moves===10){
            gameOver()
        }
    })
});

function winner(player,computer){
    player=player.toLowerCase()
    computer=computer.toLowerCase()
    if(player===computer){
        resultEl.textContent="It's a Tie!"
    } 
    else if(player == 'rock'){
        if(computer == 'paper'){
            resultEl.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = `Computer: ${computerScore}`;

        }else{
            resultEl.textContent = 'Player Won'
            playerScore++;
            playerScoreBoard.textContent = `Player: ${playerScore}`;
        }
    }
    else if(player == 'scissors'){
        if(computer == 'rock'){
            resultEl.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = `Computer: ${computerScore}`
        }else{
            resultEl.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = `Player: ${playerScore}`;
        }
    }
    else if(player == 'paper'){
        if(computer == 'scissors'){
            resultEl.textContent = 'Computer Won';
            computerScore++;
            computerScoreBoard.textContent = `Computer: ${computerScore}`
        }else{
            resultEl.textContent = 'Player Won';
            playerScore++;
            playerScoreBoard.textContent = `Player: ${playerScore}`;
        }

}

}

function gameOver(){
    const messageEl=document.getElementById("message")
    const resetBtn=document.getElementById("reset")
    resetBtn.addEventListener("click",function(){
        resetBtn.display="flex"
    })
    movesEl.style.display="none"
    movesLeft.style.display="none"

    if(playerScore===computerScore){
        messageEl.textContent="Game Over!"
        resultEl.textContent="Game Tied!"
    } else if(playerScore<computerScore){
        messageEl.textContent="Game Over!"
        resultEl.textContent="You Lost!"
    } else if(playerScore>computerScore){
        messageEl.textContent="Game Over!"
        resultEl.textContent="You Won!"
    }

    
}