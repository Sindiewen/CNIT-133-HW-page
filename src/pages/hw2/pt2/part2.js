// Variables
// var formInputs = ["#formInput1", "#formInput2", "#formInput3", "#formInput4", "#formInput5"];
var textInputs = ["textInput1", "textInput2", "textInput3", "textInput4"];
var errorAreas = ["errorArea1", "errorArea2", "errorArea3", "errorArea4"];


/// <Summary>
/// Processes the input given by the user>
/// </Summary>
function process()
{
// // sets temp variable for storing final average
// var hwAverage = document.getElementById(textInputs[0]).value;
// var midtermScore = document.getElementById(textInputs[1]).value;
// var finalScore = document.getElementById(textInputs[2]).value;
// var participationAverage = document.getElementById(textInputs[3]).value;
var finalAverageScore = 0; //(0.5 * hwAverage) + (0.2 * midtermScore) + (0.2 * finalScore) + (0.1 * participationAverage);
var studentLetterGrade;

var invalueInputFlag = false;

    // Check for valid input
    for(let i = 0; i < textInputs.length; ++i)
    {
        var inputNum = document.getElementById(textInputs[i]).value;

        // Check if input is a number
        if (inputNum < 0 || inputNum > 100)
        {
            document.getElementById(errorAreas[i]).innerHTML = "Invalid number input. Number entered must be non negative and less than 100." 
            invalueInputFlag = true;
        }
        else
        {
            switch(i)
            {
                case 0: // Homework average
                    finalAverageScore += 0.5 * inputNum;
                    break;
                
                case 1: // midterm and final score 
                case 2:
                    finalAverageScore += 0.2 * inputNum;
                    break;

                case 3: // participation score
                    finalAverageScore += 0.1 * inputNum;
                    finalAverageScore = Math.round(finalAverageScore);

                    // Get final letter grade
                    if (finalAverageScore <= 100 && finalAverageScore >= 90)
                        studentLetterGrade = "A";
                    else if(finalAverageScore >= 80)
                        studentLetterGrade = "B";
                    else if(finalAverageScore >= 70)
                        studentLetterGrade = "C";
                    else if(finalAverageScore >= 60)
                        studentLetterGrade = "D";
                    else
                        studentLetterGrade = "F";

                    break;
            }
        }
    }

    // If flag not hit, display counters
    if (!invalueInputFlag)
    {
        document.getElementById("resultLetterGrade").value = studentLetterGrade;
        document.getElementById("resultNumberGrade").value = finalAverageScore;
        if (studentLetterGrade == "D" || studentLetterGrade == "F")
        {
            document.getElementById("resultArea").innerHTML = "Student must retake class."
        }
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
