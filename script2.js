
const wordContainer=document.querySelector(".word-container");
const guessWord=document.querySelector(".wordToGuess");
const inputWord=document.querySelector(".wordContainer");
const message=document.createElement("p");
const gameContainer=document.querySelector(".wordle-container");
const restartBtn=document.createElement("button");
const triesLeft=document.createElement("p");
triesLeft.classList.add("try")
triesLeft.innerHTML="6 attempts left";
restartBtn.classList.add("restartBtn");
restartBtn.textContent="RESTART";
let contFilas=1;
let correctWord=[];
let chosenWord=[];
let notIncluded=[];
let contLetra=[];
let contTry=6;
guessWord.addEventListener("keydown",(e)=>{
    if(e.key=="Enter" && guessWord.value!==""){
        for(let i=0;i<guessWord.value.length;i++){
        wordBox=document.createElement("div");
        wordBox.classList.add("wordBox",`box${contFilas}`);
        wordContainer.appendChild(wordBox);
    } 
    const word=guessWord.value.toLowerCase();
    wordContainer.style.gridTemplateColumns = `repeat(${word.length}, auto)`;
    wordContainer.style.gridTemplateRows = `repeat(${contFilas}, auto)`;
    inputWord.maxLength=word.length;
    inputWord.style.display="flex"
    guessWord.style.display="none"
    document.querySelector(".inputTitle").style.display="none"
    document.querySelector(".letterTitle").style.display="block"
    transformWord(word)
    gameContainer.appendChild(triesLeft)
    }else return
})


const transformWord=(word)=>{
    correctWord=word.split("");
    console.log(correctWord)
}

inputWord.addEventListener("keydown",(e)=>{
    if(e.key=="Enter" && inputWord.value.length==correctWord.length){
        chosenWord=inputWord.value.split("")
        console.log(chosenWord)
        compareWord();
        inputWord.value=""
    } else return
})

const compareWord = () => {
    let contLetra = {};
    let contGreen = 0;
    const correctCount = {};

    correctWord.forEach(letter => {
        correctCount[letter] = (correctCount[letter] || 0) + 1;
    });

    const wordBox = document.querySelectorAll(`.box${contFilas}`);
    wordBox.forEach((box, index) => {
        const letra = chosenWord[index];
        box.innerHTML = letra.toUpperCase();

        if (letra === correctWord[index]) {
            box.classList.add("green");
            contGreen++;
            correctCount[letra]--;
        } else if (correctWord.includes(letra) && correctCount[letra] > 0) {
            box.classList.add("yellow");
            correctCount[letra]--;
        } else {
            box.classList.add("grey");
            if (!notIncluded.includes(letra)) notIncluded.push(letra);
        }
    });

    showNotIncluded();
    if (contGreen !== correctWord.length && contFilas!==6) newLine()
    else if(contFilas==6 && contGreen!==correctWord.length) showLoseMessage()
    else if(contGreen==correctWord.length) showWinMessage()
}


const newLine=()=>{
    contTry--
    if (contTry!==1)triesLeft.innerHTML=`${contTry} attempts left`
    else triesLeft.innerHTML = `Only <span style="color:#f00;">${contTry}</span> attempt left`;

    contFilas++;
    for(let i=0;i<correctWord.length;i++){
        let wordBox=document.createElement("div");
        wordBox.classList.add("wordBox",`box${contFilas}`);
        wordContainer.appendChild(wordBox);
    } 
    wordContainer.style.gridTemplateRows = `repeat(${contFilas}, auto)`;
}

const showNotIncluded=()=>{
    document.querySelector(".letters").innerHTML=notIncluded.join("-")
}

const showLoseMessage=()=>{
        inputWord.style.display="none"
        message.classList.add("msgRed");
        gameContainer.appendChild(message);
        message.innerHTML=`Sorry, you lost the word was  <span style="color:#f17f17;font-weight:600">${correctWord.join("").toUpperCase()}</span>`
        gameContainer.removeChild(triesLeft)
        createRestartButton();
}
const showWinMessage=()=>{
    inputWord.style.display="none"
        message.classList.add("msgGreen");
        gameContainer.appendChild(message);
        message.innerHTML="Congratulation, you win";
        gameContainer.removeChild(triesLeft)
        createRestartButton();
}
const createRestartButton=()=>{
    gameContainer.appendChild(restartBtn)
}
restartBtn.addEventListener("click",()=>{
    gameContainer.removeChild(restartBtn);
    gameContainer.removeChild(message);
    message.classList.remove("msgGreen","msgRed")
    contFilas=1;
    correctWord=[];
    chosenWord=[];
    notIncluded=[];
    contLetra=[]
    guessWord.style.display="flex";
    document.querySelector(".letters").innerHTML=""
    wordContainer.innerHTML="";
    guessWord.value="";
    document.querySelector(".inputTitle").style.display="flex"
    document.querySelector(".letterTitle").style.display="none"
    contTry=6;
    triesLeft.innerHTML="6 attempts left";
})
