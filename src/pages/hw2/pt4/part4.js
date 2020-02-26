// randomly generate 2 numbers and get their total when multiplied.
//Wait and check for input
// Check if the value the user inputted is equal to the total
// If equal, check if user wants to play again. If yes, reroll the generation. otherwise end game

// Variables
var numsAndTotal = null;
var numInput = null;

// ID's
var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");
var userGuess = document.getElementById("userGuess");
var resultText = document.getElementById("resultText");
var tryAgainSection = document.getElementById("tryAgainSection");
var userInputSection = document.getElementById("userInputSection");
var thankYouSection = document.getElementById("thankYouSection");

// run startmathgame() at start
window.onload = function()
{
    startmathGame();
};

/// <Summary>
/// When called, we start the math game
function startmathGame()
{
    // Hides tryagain section   
    tryAgainSection.style.display = "none";
    thankYouSection.style.display = "none"
    userInputSection.style.display = "block";

    // Defines variable values
    numsAndTotal = [];
    numInput = 0;

    // Get the 2 random numbers, and totals of the two
    // 0 = fist num
    // 1 = 2nd num
    // 2 = total of the twp multiplied
    get2NumbersAndTotal(numsAndTotal);

    // Print the first 2 values
    firstNumber.innerHTML = "How much is " + numsAndTotal[0];
    secondNumber.innerHTML = " Times " + numsAndTotal[1] + "?";
}

/// <Summary>
/// Gets 2 random numbers and it's answer into an array
/// </Summary>
function get2NumbersAndTotal(numArray)
{
    // Gets the numbers and total
    numArray.push(parseInt(Math.random() * 10));
    numArray.push(parseInt(Math.random() * 10));
    numArray.push(numArray[0] * numArray[1]);
}


/// <Summary>
/// Gets and checks the inputted guess from the user and pulls of try again area
/// </Summary>
function guessCheck()
{
    numInput = userGuess.value;
    if (numInput == numsAndTotal[2])
    {
        resultText.innerHTML = "Your answer is Correct! The answer to " + numsAndTotal[0] + " * " + numsAndTotal[1] + " = " + numsAndTotal[2];
        tryAgainSection.style.display = "block";
    }
    else
    {
        resultText.innerHTML = "Your answer is Incorrect. Try again!";
    }
}

/// <Summary>
/// Resets the game when called
/// </Summary>
function resetGame()
{
    // Ends game (technically)
    endGame();

    // resets game from beginning
    startmathGame();
}

/// <Summary>
/// Ends game by resetting all values to nothing
function endGame()
{
    tryAgainSection.style.display = "none";
    userInputSection.style.display = "none";
    thankYouSection.style.display = "block";
    
    // Empties variables
    // numsAndTotal.splice(0, numsAndTotal.length);
    numsAndTotal = null;
    numInput = null;

    // clears all inputs and outputs
    userGuess.value = "";
    resultText.innerHTML = "";
    firstNumber.innerHTML = "";
    secondNumber.innerHTML = "";
    resultText.innerHTML = ""
}

