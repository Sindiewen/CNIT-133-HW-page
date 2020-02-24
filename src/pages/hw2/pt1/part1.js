/* JQuery for validation
displays error message if form input is not a number
*/

// $(document).ready(function(){
//     $("#formInput1").validate({
// 	  // Rules for each input item
// 	  rules: 
// 	  {
//         num1: { required: true, number: true, min: 0, max: 10},
//       }
//     });	  
//     $("#formInput2").validate({
// 	  // Rules for each input item
// 	  rules: 
// 	  {
// 		num2: { required: true, number: true, min: 0, max: 10}
// 	  }
// 	});	  
//     $("#formInput3").validate({
// 	  // Rules for each input item
// 	  rules: 
// 	  {
// 		num3: { required: true, number: true, min: 0, max: 10}
// 	  }
// 	});	  
//     $("#formInput4").validate({
// 	  // Rules for each input item
// 	  rules: 
// 	  {
// 		num4: { required: true, number: true, min: 0, max: 10}
// 	  }
// 	});	  
//     $("#formInput5").validate({
// 	  // Rules for each input item
// 	  rules: 
// 	  {
// 		num5: { required: true, number: true, min: 0, max: 10}
// 	  }
// 	});	  
// });


// Variables
// var formInputs = ["#formInput1", "#formInput2", "#formInput3", "#formInput4", "#formInput5"];
var textInputs = ["textInput1", "textInput2", "textInput3", "textInput4", "textInput5"];
var errorAreas = ["errorArea1", "errorArea2", "errorArea3", "errorArea4", "errorArea5"];


/// <Summary>
/// Processes the input given by the user>
/// </Summary>
function process()
{
    var negativeCounter = 0;
    var zeroCounter = 0;
    var positiveCounter = 0;
    var invalueInputFlag = false;

    // Check for valid input
    for(let i = 0; i < textInputs.length; ++i)
    {
        var inputNum = document.getElementById(textInputs[i]).value;

        // Check if input is a number
        if (isNaN(inputNum))
        {
            document.getElementById(errorAreas[i]).innerHTML = "Invalid input. Input is not a number.";
            invalueInputFlag = true;
        }
        else
        {
            if (inputNum < 0)
            {
                ++negativeCounter;
            }
            else if (inputNum == 0)
            {
                ++zeroCounter;
            }
            else
            {
                ++positiveCounter;
            }
        }
    }

    // If flag not hit, display counters
    if (!invalueInputFlag)
    {
        document.getElementById("resultArea").innerHTML = "Number of Negative Numbers: " + negativeCounter + " | Number of Zeroes: " + zeroCounter + " | Number of Positive Numbers: " + positiveCounter;
    }
}

/// <Summary>
/// Resets the input and the errors
/// </Summary>
function reset()
{
    for (let i = 0; i < textInputs.length; ++i)
    {
        document.getElementById(textInputs[i]).value = "";
        document.getElementById(errorAreas[i]).innerHTML = "";
    }

    document.getElementById("resultArea").innerHTML = "";

}
