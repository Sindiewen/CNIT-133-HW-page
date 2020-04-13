// Part 1:
// Part 1a: Create a webpage that contains a script, using the for statement, that calculates the product and sum of every fourth integer from 5 to 21 inclusive and then displays the results, along with some accompanying text.

// (Note: You should print a line that contains the result of 5 * 9 * 13 * 17 * 21 and a second line that contains the result of 5 + 9 + 13 + 17 + 21). 

// Part 1b: On the same webpage as Part 1b, create a script, using the while or do while statement, that calculates the product and sum of every third integer from 3 to 21 inclusive an then displays the results, along with some accompanying text.

// (Note: You should print a line that contains the result of 3 * 6 * 9 * 12 * 15 * 18 * 21 and a second line that contains the result of 3 + 6 + 9 + 12 + 15 + 18 + 21).

// Use jQuery UI to allow the user to drag an element to a specific area of the page - can be any type of element. For more on jQuery UI draggable see the example in this page (Links to an external site.).

$( function() {
    $( "#draggableBox" ).draggable();
  } );



var sum = 0;
var sumString = "";
var product = 1;
var productString = "";

var loopStartingNum;
var loopEndingNum;
var loopIterationAmmount;

function runProg()
{
    part1A();
    part1B();
}


function part1A()
{
    sum = 0
    sumString = "";
    product = 1;
    productString = "";
    loopStartingNum = 5;
    loopEndingNum = 21;
    loopIterationAmmount = 4;

    for (var i = loopStartingNum; i <= loopEndingNum; i+=loopIterationAmmount)
    {
        sum += i;
        product *= i;

        updateStrings(i);
    }

    // console.log(sumString);
    // console.log(productString);
    document.getElementById("part1ASum").innerHTML = sumString;
    document.getElementById("part1AProduct").innerHTML = productString;
}

function part1B()
{
    sum = 0;
    sumString = ""
    product = 1;
    productString = "";
    loopStartingNum = 3;
    loopEndingNum = 21;
    loopIterationAmmount = 3;

    var i = loopStartingNum;
    while(i <= loopEndingNum)
    {
        sum += i;
        product *= i;
        updateStrings(i);

        i += loopIterationAmmount;
    }

    // console.log(sumString);
    // console.log(productString);
    document.getElementById("part1BSum").innerHTML = sumString;
    document.getElementById("part1BProduct").innerHTML = productString;
}

function updateStrings(i)
{
    if (i != loopEndingNum)
    {
        sumString += i.toString() + " + ";
        productString += i.toString() + " * ";
    }
    else
    {
        sumString += i.toString() + " = " + sum.toString();
        productString += i.toString() + " = " + product.toString();
    }
}
