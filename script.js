let userScore = 0;
let compScore = 0;


const choices = document.querySelectorAll(".choice");
const msg =document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");



  //rock papaer scissors 
const genCompChoice = () =>{
    let options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame = () =>{
    console.log('game was draw');
    msg.innerText = "game draw. Play again";
    msg.style.backgroundColor = "#081b31";
    msg.style.colo = "#000000";

}

const showWinner = (userWin, userChoice, compChoice) =>{
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log('you win');
        msg.innerText = `you win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#00F044";
    msg.style.colo = "#000000";


    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log('you lose');
        msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "#F00000";
    msg.style.colo = "#000000";


    }
}

const playGame = (userChoice) => {
console.log("userChoice = ",userChoice);
//generate comp choice
const compChoice = genCompChoice();
console.log("comp choice = ", compChoice);

if (userChoice === compChoice) {
    //draw game 
    drawGame();
} else {
    let userWin = true; 
    if (userChoice === "rock") {
        //scissors, paper
        userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
        // rock, scissors
        userWin = compChoice === "scissors" ? false : true;
    } else {
        // rock , paper
    userWin = compChoice === 'rock' ? false : true;        
    }
showWinner(userWin,userChoice, compChoice);
}
};

choices.forEach((choice) => {
    choice.addEventListener("click" ,() =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});