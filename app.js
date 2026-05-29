let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");


const genComChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const ranIdx = Math.floor(Math.random() * 3);
    return options[ranIdx];
};

const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const drawGame = (choice) => {
    console.log("Game Draw");
    msg.innerText = `It's a Draw! Both chose ${capitalize(choice)}.`;
    msg.style = "";
    msg.className = "msg-draw";
}

const showWinner = (userWin, userChoice, compChoice) => {
    msg.style = "";
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You Win🌟")
        msg.innerText = `You Win! ${capitalize(userChoice)} beats ${capitalize(compChoice)}.`;
        msg.className = "msg-win";
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You Loss⛔")
        msg.innerText = `You Lose! ${capitalize(compChoice)} beats ${capitalize(userChoice)}.`;
        msg.className = "msg-lose";
    }
}

const playGame = (userChoice) => {
    console.log("User Choice = ", userChoice);
    //generate computer choice => modular programming
    const compChoice = genComChoice();
    console.log("Comp Choice =", compChoice);

    if(userChoice === compChoice){
        //Draw
        drawGame(userChoice);
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper") {
            //rock, scissor
            userWin = compChoice === "scissor" ? false : true;
        }else {
            //rock, paper
            userWin = compChoice === "rock" ? false : true;
        }

        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
