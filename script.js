// 1)Crear getComputerChoice
// 1.1) Hacer player selection insensible a la mayuscula
// 
// 2)Crear funcion que juegue una sola ronda de piedra papel o tijeras. tiene que tener 2 parametros, playerSelection y computerSelection. Devolver un string que declare al ganador de la ronda.
// 
// 3) Crear la funcion game que permita jugar 5 rounds con un loop. conmsole log para mostrar los resultados de cada ronda y el ganador al final

const rockPaperScissors = ["Rock", "Paper", "Scissors"];

const win = "You won!",
lose = "You lose.",
draw = "Draw";




function insensitiveCase(playerSelection){
    playerSelection = playerSelection.toLowerCase();
    return playerSelection;
}

function playRound(playerSelection, computerSelection){
    computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)];
    playerSelection = insensitiveCase(prompt("Piedra, papel o tijeras?"));
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

console.log(playRound());


const result = playRound();

function game(result){

}
