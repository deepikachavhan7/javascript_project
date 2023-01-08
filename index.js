let computerguess;
let userGuess=[];
let userGuessupdate = document.getElementById("textoutput");
let userNumberupdate = document.getElementById("inputbox");
let audio = new Audio('./audio/80s-synthwave-game-music-112662.mp3')

const init =() =>{
    computerguess =Math.floor(Math.random()*100);
console.log(computerguess);
document.getElementById("newgamebutton").style.display = "none";
document.getElementById("gameArea").style.display = "none";
};

const startGame =() =>{
    audio.play();
    document.getElementById("Welcomescreen").style.display = "none";
    document.getElementById("gameArea").style.display = "block";
};

// startnw game
const Startnewgame = () => {

    document.getElementById("newgamebutton").style.display = "inline";
    userNumberupdate.setAttribute("disabled",true);
}

// reload the page 
const NewGameBegin =() => {
    window.location.reload();
}

// main logic of app


const compareGuess =() => {

   const userNumber= Number(document.getElementById("inputbox").value);
   userGuess =[...userGuess,userNumber];
   document.getElementById("guess").innerHTML = userGuess; 
    // check the value low or high 

   
   if(userGuess.length< maxguess) {
    if(userNumber>computerguess){
        userGuessupdate.innerHTML ="Your guess is high";
        userNumberupdate.value = "";

    }
    else if (userNumber<computerguess) {
        userGuessupdate.innerHTML = "your guess is low";
        userNumberupdate.value = "";
    }
    else{
        userGuessupdate.innerHTML ="its correct";
        userNumberupdate.value = "";
        Startnewgame();
    }
}
else{
    if(userNumber>computerguess){
        userGuessupdate.innerHTML =`YOu loose !! correcr number was ${computerguess}`;
        userNumberupdate.value = "";
        Startnewgame();

    }
    else if (userNumber<computerguess) {
        userGuessupdate.innerHTML = `You loose !! correcr number was ${computerguess}`;
        userNumberupdate.value = "";
        Startnewgame();
    }
    else{
        userGuessupdate.innerHTML ="its correct";
        userNumberupdate.value = "";
        Startnewgame();
    }
    
}
    document.getElementById("attempts").innerHTML =userGuess.length;
    

};
const easyMode = () => {
    audio.play();
    maxguess=10;
    startGame();

};

const hardMode = () => {
    audio.play();
    maxguess=5;
    startGame();
    
};
