function countDecimals(floatNum)
{
    // If the number is an int, return 0
    if (Math.floor(floatNum) == floatNum)
    {
        return 0;
    }
    else
    {
        // Otherwise, split number to a string, and split it to the decimal point. get the number of characters in index 1
        return floatNum.toString().split(".")[1].length || 0;
    }
    
}

function roundToNearestX(floatToRound, place, maxDecimal)
{
    return Math.round(floatToRound * place) / place.toFixed(maxDecimal);
}


function mathRound()
{
    // Reset error
    document.getElementById("roundInputError").innerHTML = "";

    // Get current value form the input
    var inputFloat = document.getElementById("MathRound_Input").value;

    // If number is not decimal or number's decimal places are < 4, then error
    if (countDecimals(inputFloat) < 4)
    {
        document.getElementById("roundInputError").innerHTML = "Please enter a valid floating point number with at least 4  decimal places"
    }
    else
    {
        // Input valid, return rounded number
        document.getElementById("MathRound_Output").value = Math.round(parseFloat(inputFloat)).toString();
    }
}

function mathSqrtInput()
{
    
    var inputFloat = document.getElementById("MathSqrt_Input").value;

    // check if input is float
    if (countDecimals(inputFloat) < 1)
    {
        document.getElementById("sqrtInputError").innerHTML = "Please enter a valid floating point number";
    }
    else
    {
        document.getElementById("sqrtInputError").innerHTML = " ";
        document.getElementById("sqrtInput").innerHTML = inputFloat.toString();
        document.getElementById("MathSqrt_Output").value = Math.sqrt(inputFloat).toString();
    }


}

function mathRoundInput(place, maxDecimal, elementToUseInput, elementToUseOutput, error)
{
    document.getElementById(error).innerHTML = "";
    var floatInput = document.getElementById(elementToUseInput).value;
    if (countDecimals(floatInput) >= maxDecimal)
    {
        document.getElementById(elementToUseOutput).value = roundToNearestX(floatInput, place, maxDecimal).toString();
    }
    else
    {
        document.getElementById(error).innerHTML = "Please enter a valid floating point number greater than " + maxDecimal.toString() + " decimal places.";
    }
    
}

