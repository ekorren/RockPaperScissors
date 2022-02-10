//let computer "play" the game in advance
function computerPlay(){
let randomNum = Math.ceil(Math.random()*3)

if (randomNum === 1){
    outcomeItem = "rock"
}
else if (randomNum === 2){
    outcomeItem = "paper"
}
else {
    outcomeItem = "scissors"
}
}

//prompt and then evaluate input from player
function playerInput(){
let initialInput = prompt("Enter rock, paper or scissors")
let input = initialInput.toLowerCase();
if(outcomeItem === input){
    console.log("Tie!")
}
else if (outcomeItem === "rock" && input === "paper"){
console.log("You win! Paper beats rock.")
}
else if (outcomeItem === "paper" && input === "rock"){
    console.log("You lose! Paper beats rock.")
    }
else if (outcomeItem === "rock" && input === "scissors"){
    console.log("You lose! Rock beats Scissors.")
    }
else if (outcomeItem === "scissors" && input === "rock"){
    console.log("You win! Rock beats Scissors.")
    }
else if (outcomeItem === "paper" && input === "scissors"){
    console.log("You win! Scissors beats paper.")
    }
else if (outcomeItem === "scissors" && input === "paper"){
    console.log("You lose! Scissors beats paper.")
    }
}

//play game 5 times
for (i=0; i<5; i++){
    computerPlay()
    playerInput()
}
