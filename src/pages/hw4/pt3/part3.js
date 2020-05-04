/* Part 3: 
Create a webpage that does the following:

Input a telephone number as a string in the format (999) 999-9999. The script should use String method split to extract the area code as a token, the first 3 digits of the phone number as a token, and the last 4 digits of the phone number as a token. Display the area code (the area code only contains NUMBERS!!!) in one text box, the first 3 digits of the phone number in another text box, and the last 4 digits of the phone number in a third text box.

Make sure that when the user is typing the phone number it will automatically put the phone number in the (999) 999-9999 format - I suggest that you use the jQuery mask for input. But you can use Regex to validate the input of the user if you prefer instead of the jQuery mask but, in that case, DO NOT PRESENT the final result if the user does not enter the phone number in the right format! 

More information about jQuery mask: How to use it - https://dobsondev.com/2017/04/14/using-jquery-mask-to-mask-form-input/
*/

// Validates phone numbers of style (123) 456-7890
var phoneRegEx = /^(\()(\d{3})(\))(\s)(\d{3})(-\d{4})$/;


function validatePhone()
{
    document.getElementById("areaCode").value = ""; 
    document.getElementById("last4").value = "";
    document.getElementById("errorMsg").innerHTML = "Please enter ";
    var phoneNumber = document.getElementById("phoneNumber").value;


    if (phoneRegEx.test(phoneNumber))
    {
        console.log("is a valid number");

        // separate area code and the last 4 digit into text boxes
        document.getElementById("areaCode").value = phoneNumber[1] + phoneNumber[2] + phoneNumber[3]; 
        document.getElementById("last4").value = phoneNumber[10] + phoneNumber[11] + phoneNumber[12] + phoneNumber[13]; 
    }
    else
    {
        document.getElementById("errorMsg").innerHTML = "Please enter a valid phone number.";
    }
}