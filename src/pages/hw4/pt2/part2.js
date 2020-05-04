/*
Part 2: 
Create a webpage that contains a script using a form that allows the user to input several lines of text and a search character and uses the String method charAt to determine the number of occurrences of the search character within the text. Use a form textarea for the text and a form input box for the search character. If the search character is found within the text, display the number of occurrences of the search character in another input box or a textarea (of course, those should be disabled for users to type anything). If the search character is not found within the text then display within a new window (using the window.open() method), the message, 'Search character not found in text string!' along with the search character - make sure that the output input box (or textarea) would be cleared if that error message is showing, meaning it would not show any previous result. Your new window should be a width of 300 pixels, height of 100 pixels, and should not obscure any of the main content already on the page.

Remember that if does not matter if the user types a lowercase letter to search - the match should be done and accepted if the text contains the same letter either in lowercase or uppercase - letter "t" would be found twice in this text "This time"!

For a tip on how to use the charAt() to count the number of occurrences of a character, take a look at https://hills.ccsf.edu/~cdasilva/cnit133/objex3.html 
*/

function searchString()
{
    var charFound = false;      // If char has been found
    var paragraphString = document.getElementById("stringParseArea").value;
    paragraphString = paragraphString.toLowerCase();
    var charToSearchFor = document.getElementById("characterSearch").value;
    var numOfChar = 0;

    // find specific char in string
    for (var i = 0; i < paragraphString.length; ++i)
    {
        if (charToSearchFor === paragraphString.charAt(i))
        {
            charFound = true;
            ++numOfChar;
        }
    }

    // char not found
    if (!charFound)
    {
        loadErrorWindow();
        return;
    }

    // char found
    document.getElementById("searchedChar").innerHTML = charToSearchFor;
    document.getElementById("numOfCharOccurances").innerHTML = numOfChar;
}

function loadErrorWindow()
{
    window.open("notFount.html", "ErrorWindow", "width=300, height=100");
}