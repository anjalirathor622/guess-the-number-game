// console.log('hello');

// variables
let attmps = 0;

const randomNum = Math.floor(Math.random()*100 + 1);
// console.log(randomNum)

// target dom elements
var guess = document.getElementById('guess');
// console.log(guess);
var btn = document.getElementById("submit");
var hint = document.getElementById('hint');
var attempts = document.getElementById('attmpt');

// addEventListener
btn.addEventListener('click',()=>{
    const nmber = Number(guess.value);
    // console.log(nmber);
    attmps++
    let Totalattmpts = attempts.innerHTML = "Total Attempts :"+ attmps;
    // console.log(typeof(attmps));
    // if(nmber > 100){
    //     hint.innerHTML = "choose between 1-100"
    // }else if (nmber === randomNum){
    //     hint.innerText = "Congratulations!!! you guessed it right"
    // }else if (nmber > randomNum){
    //     hint.textContent = "Too high, try again!"
    // }else{
    //     hint.textContent = "Too low, try again!"
    // }
    switch(true){
        case (nmber > 100):
        hint.innerHTML = "choose between 1-100";
        break;
        case (nmber === randomNum):
        hint.innerText = "Congratulations!!! you guessed it right"
        break;
        case (nmber > randomNum):
        hint.textContent = "Too high, try again!"
        break;
        case (nmber < randomNum):
        hint.textContent = "Too low, try again!" 
        break;   
    }
    
})