//setting random number using random function 
let random = getRandomNumber();

//once the user guesses, the program will evaluate the guess and deciding how to respond
document.getElementById("guess-button").onclick = function() {
    //declaring and initializing a variable that will hold the variables guess
    let guess = document.getElementById("guess").value;
    
    //if else statement to decide how to respond to the user's guess
    if (!(guess <= 10 && guess > 0)) { //if guess is out of range [1,10]
        //informing user they guessed an invalid guess
        document.getElementById("result").innerHTML += `You didn't guess a valid number.<br>`;
    }
    else if (guess != random) { //if the guess is not correct
        //informing user they guessed wrond
        document.getElementById("result").innerHTML += `${guess} is not the correct number!<br>`;
    }
    else { //if the correct answer is correct
        //informing user they guessed correctly
        document.getElementById("result").innerHTML += `Correct! The answer was ${guess}!<br>`;
    }
}

//once the user gives up, output the correct number
document.getElementById("give-up").onclick = function() {
    //output to the user the correct number
    document.getElementById("result").innerHTML += `The number was ${random}.<br>`;
}

//function to reload page once the user request to reset
document.getElementById("new-num").onclick = function() {
    //reloading page -- resetting page
    location.reload();
}

//function to get random number between 1-10
function getRandomNumber() {
    //returning random number between 1-10
    return Math.floor(Math.random() * 10) + 1;
}