// Part 2:
// Create a webpage that contains a script that will calculate compound interest on a principal of $1000 for interest rates of 5, 6, and 7%, for years 1 through 10. The formula to use is : A = P(1 + r)n where

// P is the principal (the initial amount you borrow or deposit) 

// r is the annual rate of interest (percentage)

// n is the number of years the amount is deposited

// A is the amount of money accumulated after n years, including interest

// Output in table format the year followed by the total amount calculated for each of the interest rates of 5% - 7%. (Be sure to include decimals for the cents.) Your 3rd column should contain the corresponding interest rate. For example, the first 5 table rows should display as:


// Year	Amount on deposit	Interest Rate
// 1	1050.00	0.05
// 2	1102.50	0.05
// 3	1157.63	0.05
// 4	1215.51	0.05
// There is NO INPUT for this problem as well! The 3 tables (one for 5%, another for 6% and another for 7%) should be shown as soon as the page is opened (loaded in the browser). This problem can be resolved with one loop inside the other.

// Use jQuery or you can use CSS to alternate the background colors of the rows of the table but notice that the first row should be maroon (dark red and the font should be white).

// For more information on calculating compound interest, see this link (Links to an external site.). 

function calculateInterest(p_Principal, r_interestRatePercent, n_Years)
{
    /*A = P(1 + r)n where
    P is the principal (the initial amount you borrow or deposit) 
    r is the annual rate of interest (percentage)
    n is the number of years the amount is deposited
    A is the amount of money accumulated after n years, including interest
    */
    return (p_Principal * Math.pow(1 + r_interestRatePercent, n_Years));
}

function calculateCompoundInterestRate()
{
    var maxYearsToCalculate = 10;
    var principal = 1000;
    var interestPercent = [0.05, 0.06, 0.07];
    var tableCalculateRow = "";
    var tableID = ["table5%", "table6%", "table7%"];

    // Calculate interest for each of the separate tables
    for (var i = 0; i < interestPercent.length; ++i)
    {
        // Singular table - each indevidual year
        for (var j = 0; j < maxYearsToCalculate; ++j)
        {
            // Get current interest rate for this iteration
            var curIteratedInterest = calculateInterest(principal, interestPercent[i], j+1);

            // set string for the calculated row
            var jPlus1 = j+1; // because javascript is dumb and i can't do i+1 inside a string to get 2 instead of 11 it's a separate variable :/
            // if odd number set row to one color
            if (jPlus1 % 2 != 0)
            {
                tableCalculateRow = "<td class='oddRow'>" + jPlus1  + "</td><td class='oddRow'>" + curIteratedInterest.toFixed(2) + "</td><td class='oddRow'>" + interestPercent[i].toString() + "</td>";
            }
            else // even, another color
            {
                tableCalculateRow = "<td class='evenRow'>" + jPlus1  + "</td><td class='evenRow'>" + curIteratedInterest.toFixed(2) + "</td><td class='evenRow'>" + interestPercent[i].toString() + "</td>";
            }

            // append string to table
            document.getElementById(tableID[i]).innerHTML += tableCalculateRow;
        }
    }
    
}

