const rockPaperScissors = ["Rock", "Paper", "Scissors"];
const win = "You won! ",
lose = "You lose.",
draw = "It's a draw. ";

function insensitiveCase(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function playRound(playerSelection, computerSelection){
    playerSelection = insensitiveCase(prompt("Choose! Rock, paper or scissors?"));
    computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
        if (playerSelection === "rock"){
        if (computerSelection === "Rock"){
            return draw;
        } else if (computerSelection === "Paper"){
            return lose;
        } else{
            return win;
        } 
    } else if(playerSelection === "paper"){
        if (computerSelection === "Rock"){
            return win;
        } else if (computerSelection === "Paper"){
            return draw;
        } else{
            return lose;
        } 
    } else if (playerSelection === "scissors"){
        if(computerSelection === "Rock") {
            return lose;            
        } else if(computerSelection === "Paper"){
            return win;
        } else{
            return draw;
        }
    } else {
        return fail = "Sad! Game doesn't work that way";
    }
}

let playerScore = 0,
computerScore = 0;
//  
//  "Computer choiced: " + computerSelection + " " + 
//  
function game(){
    for(let i = 0; i < 5; i++){
        const result = playRound();
         if (result == win){
            ++playerScore;
            console.log(win + " Your score is: " + playerScore + ". Computer score = " + computerScore);
         } else if (result == draw){
            console.log(draw + "Your score is: " + playerScore + ". Computer score = " + computerScore);
         } else if (result == lose) {
            ++computerScore;
            console.log(lose + " Your score is: " + playerScore + ". Computer score = " + computerScore);
         } else{
        console.log("You didn't input a valid option!");
        }
        }

    if (playerScore > computerScore){
     console.log("You won the game! Congratz.");
    } else if (playerScore == computerScore){
        console.log("This game ended on a draw!");
    } else {
        console.log("You lose the game. Try again!");
    }
}
        
game();
        