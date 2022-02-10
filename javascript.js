let randomNum;
let outcomeItem;

function computerPlay(){
let randomNum = Math.ceil(Math.random()*3)

if (randomNum === 1){
    outcomeItem = "Rock"
} 
else if (randomNum === 2){
    outcomeItem = "Paper"
}
else {
    outcomeItem = "Scissor"      
} 
console.log(outcomeItem) 
}

computerPlay()