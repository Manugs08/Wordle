
/*const wordContainer=document.querySelector(".word-container");
const wordToGuess=document.querySelector(".wordToGuess");
const inputWord=document.querySelector(".wordContainer");
const gameContainer=document.querySelector(".wordle-container");
const restartBtn=document.createElement("button");
const message=document.createElement("p");
restartBtn.classList.add("restartBtn");
restartBtn.textContent="RESTART";

wordArray=[];
wordCompare=[];
contFilas=1;
let contGreen;
dontInclude=[];
wordToGuess.addEventListener("keydown",(e)=>{
if(e.key=="Enter"){
    for(let i=0;i<wordToGuess.value.length;i++){
        wordBox=document.createElement("div");
        wordBox.classList.add("wordBox");
        wordContainer.appendChild(wordBox);
    }
    const word=wordToGuess.value.toLowerCase();
    wordContainer.style.gridTemplateColumns = `repeat(${word.length}, 40px)`;
    wordContainer.style.gridTemplateRows = `repeat(${contFilas}, 40px)`;
    inputWord.maxLength=word.length;
    passWord(word);
    inputWord.maxLength=word.length;
    inputWord.minLength=word.length;
    inputWord.style.display="flex"
    wordArray.value="";
    wordToGuess.style.display="none"
    
}
})

const passWord=(word)=> {
    word=word.split("")
    wordArray=[...word]
    console.log(wordArray)
}

inputWord.addEventListener("keydown",(e)=>{
    if(e.key=="Enter" && inputWord.value.length==wordArray.length){
        let usersWord=inputWord.value;
        compareWord(usersWord);
        inputWord.value=""
    } return
})


const compareWord=(usersWord)=>{
    usersWord=usersWord.split("")
    usersWord.forEach(w=>{
        if(wordArray.includes(w)){
            wordCompare.push(w)
        } else{
            dontInclude.push(w);
        }
    })
    console.log(wordCompare)
    showWord()
}

const showWord=()=>{
    showLetter()
    contFilas++;
    contGreen=0;
    for(let i=0;i<wordToGuess.value.length;i++){
        wordBox=document.createElement("div");
        if(wordCompare.includes(wordArray[i])){
            if(wordCompare[i]==wordArray[i]){
                wordBox.classList.add("green");
                contGreen++;
            } else{
                wordBox.classList.add("yellow");
            }
            if(wordCompare[i]==undefined) {
                wordBox.innerHTML=""
                wordBox.classList.remove("yellow")
            }else wordBox.innerHTML=wordCompare[i].toUpperCase(); 
        } 
        wordBox.classList.add("wordBox");
        wordContainer.appendChild(wordBox);
    }
    wordContainer.style.gridTemplateRows = `repeat(${contFilas}, 40px)`;
    same = wordCompare.length === wordArray.length && wordCompare.every((val, i) => val === wordArray[i]);
    wordCompare=[];
    if(contFilas==6 || same || contGreen==wordArray.length) showMessage()
    

}

const showMessage=()=>{
    if(contFilas==6 && wordCompare.length!==wordArray.length){
        inputWord.style.display="none"
        message.classList.add("msgRed");
        gameContainer.appendChild(message);
        createRestartButton();
        message.innerHTML=`Sorry, you lost the word was ${wordArray.join("")}`
    } else if( wordCompare.length==wordArray.length || contGreen==wordArray.length){
        inputWord.style.display="none"
        message.classList.add("msgGreen");
        gameContainer.appendChild(message);
        message.innerHTML="Congratulation, you win";
        createRestartButton();
    }
}

const showLetter=()=>{
    dontInclude=[...new Set(dontInclude)];
    document.querySelector(".letters").innerHTML=dontInclude.join("-")
}

const createRestartButton=()=>{
    gameContainer.appendChild(restartBtn)
}
restartBtn.addEventListener("click",()=>{
    gameContainer.removeChild(restartBtn);
    gameContainer.removeChild(message);
    message.classList.remove("msgGreen","msgRed")
    contFilas=1;
    wordArray=[];
    wordCompare=[];
    dontInclude=[];
    wordToGuess.style.display="flex";
    document.querySelector(".letters").innerHTML=""
    wordContainer.innerHTML="";
    wordToGuess.value="";
})*/