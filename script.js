// 1)Crear getComputerChoice
// 1.1) Hacer player selection insensible a la mayuscula
// 
// 2)Crear funcion que juegue una sola ronda de piedra papel o tijeras. tiene que tener 2 parametros, playerSelection y computerSelection. Devolver un string que declare al ganador de la ronda.
// 
// 3) Crear la funcion game que permita jugar 5 rounds con un loop. conmsole log para mostrar los resultados de cada ronda y el ganador al final

const rockPaperScissors = ["Rock", "Paper", "Scissors"];
const win = "",
lose = "",
draw = "";

function insensitiveCase(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function playRound(playerSelection, computerSelection){
    playerSelection = insensitiveCase(prompt("Piedra, papel o tijeras?"));
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
    } else{
        if(computerSelection === "Rock") {
            return lose;            
        } else if(computerSelection === "Paper"){
            return win;
        } else{
            return draw;
        }
    }    
}

// const result = playRound();
// console.log(result)
// 1) agregar 2 variables, una que registre el puntaje de la maquina y otra que registre el puntaje del jugador.
// 2) si la variable del jugador es mayor, imprimir resultado de victoria. lo opuesto igual.
// 
// 
 function game(){
    for(let i=0; i<5; i++){
        let playerScore = 0,
        computerScore = 0,
        result = playRound();
         if (result == win){
            ++playerScore;
            console.log("You won! your score is: " + playerScore);
         } else if (result == draw){
            console.log("It's a draw");
         } else{
            ++computerScore;
            console.log("You lose!");
         }

        console.log(result + "Your score: " + playerScore)
    }
}

game();
