// primer paso completo, seleccion aleatoria lista
// crear funcion playRound con los parametros: playerSelection, computerSelection
// la funcion player selection tiene que ser case insensitive
// hacer funcion que reciba la entrada de datos de la seleccion del jugador, piedar, papel o tijera
// hacer prompt que reciba una string

// crear funcion playRound con los parametros de las funciones anteriores 
//
//
// 
// 
// 
// 
// 
let computerChoice = getComputerChoice();
function getComputerChoice(computerSelection){
    let rockPaperScissors = ["Rock","Paper","Scissors"];
    computerSelection = rockPaperScissors[Math.floor(Math.random() * rockPaperScissors.length)]
    return computerSelection;
}
function insensitiveCase(playerSelection){
    playerSelection = (playerSelection.charAt(0).toUpperCase()) + (playerSelection.slice(1).toLowerCase())
    return playerSelection;
}
// let playerSelection = prompt("Elige entre Piedra, Papel o Tijeras: ");

// playerSelection = convertCapitalized()
// function convertCapitalized(playerSelection){
//     let firstLetter = playerSelection.charAt(0).toUpperCase();
//     let allWord = firstLetter + playerSelection.slice(1).toLowerCase();
//     return allWord;
// }

let playerSelection = insensitiveCase(prompt("Rock, paper or scissors?"));


function playRound(playerSelection, computerChoice){
    let win = "You win!",
        lose = "You lose!",
        draw = "Draw";
    if (playerSelection == "Rock"){

        if(computerChoice == "Rock"){
            return draw;            
        } else if(computerChoice == "Paper"){
            return lose;
        } else {
            return win;
        }
    
    } else if(playerSelection == "Paper"){

        if(computerChoice == "Rock"){
            return win;
        } else if(computerChoice == "Paper"){
            return draw;
        } else {
            return lose;
        }
    } else if (playerSelection == "Scissors"){

        if(computerChoice == "Rock"){
            return lose;
        } else if(computerChoice == "Paper"){
            return win;
        } else {
            return draw;
        }
    } else {
        console.log("no defined!!");
    }
}

function game(){
for(let i = 0; i<5; i++){
let result = playRound(playerSelection, computerChoice);
return result
}
console.log("end of the game")
}

game();

