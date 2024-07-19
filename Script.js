const inputs = document.querySelector(".inputs"),
resetBtn = document.querySelector(".reset-btn"),
hint=document.querySelector(".hint span"),
guessLeft = document.querySelector(".guess-left span"),
wrongLetter=document.querySelector(".wrong-letter span"),
typingInput=document.querySelector('.typing-input');
let word,maxguesses,correct=[],incorrects=[];
function randomWord() {
    let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
    word = ranObj.word;
    maxguesses=8;
    correct=[],incorrects=[];
    console.log(word);
    guessLeft.innerText=maxguesses;
    wrongLetter.innerText=incorrects;
    hint.innerText=ranObj.hint;
    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
    }
    inputs.innerHTML = html;
}
randomWord();
function initgame(e){
    let key=e.target.value;
    if(key.match(/^[A-za-z]+$/) && !incorrects.includes(key)){
      console.log(key);
      if(word.includes(key)){
        for(let i=0;i<word.length;i++)
        {
            if(word[i]==key)
            {
                correct.push(key)
                inputs.querySelectorAll("input")[i].value=key;
            }
        }
      }
       else
       {
        maxguesses=maxguesses-1;//decrement the guess only wrong letters
        incorrects.push(key);
       }
       wrongLetter.innerText=incorrects;
       guessLeft.innerText=maxguesses;
    }
    typingInput.value="";
    if(maxguesses<1)
    {
        alert("your guesses completed")
        for(let i=0;i<word.length;i++)
        {
            inputs.querySelectorAll("input")[i].value=word[i];
        }
    }
}
resetBtn.addEventListener("click",randomWord);
typingInput.addEventListener("input",initgame)
document.addEventListener("keydown",() => typingInput.focus());