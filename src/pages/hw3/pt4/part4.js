// Part 4:
// Given the following table of data about several of our states from the 2018 census, create a webpage that enables the user to enter a state name (full or just the two characters that represent the state) and have the State Name, State Capital, and population appear in separate input box or textarea. DO NOT USE ALERT!!! The user should be able to start the script by pressing the button, "State Info". Just use the states that are given in the following table for your array. Allow for the user to enter the name of the state in either lower case or upper case letters. Note that solving this problem involves a two-dimensional array. Make sure you validate the input for a correct state abbreviation or state name. If the input is invalid then display an error message.  If the user enter a state that is not part of the list, show a message to the user but if the user retypes the state and click the Submit button and the state is valid, then the "error" message should not be shown and, instead, you should show the information that is coming from the table below - for example, suppose the user typed "california" (all in lowercase), you could show a message with something as:
// "Thanks for your inquiry, here is the information you requested:
// State abbr = CA
// State Name = California
// Capital = Sacramento
// Population = 39,557,045"

// State Abbr	State Name	Capital	Population
// AL	Alabama	Montgomery	4,887,871
// AK	Alaska	Juneau	737,438
// AZ	Arizona	Phoenix	7,171,646
// AR	Arkansas	Little Rock	3,010,825
// CA	California	Sacramento	39,557,045
// CO	Colorado	Denver	5,694,564


// Dictonaries - State abbreviations and the data for each state
var abbrState = 
{
    "AL": "alabama",
    "AK": "alaska",
    "AZ": "arizona",
    "AR": "arkansas",	
    "CA": "california",
    "CO": "colorado",
    "CT": "connecticut",
    "DE": "delaware",
    "FL": "florida",
    "GA": "georgia",
    "HI": "hawaii",
    "ID": "idaho",
    "IL": "illinois",
    "IN": "indiana",
    "IA": "iowa",
    "KS": "kansas",
    "KY": "kentucky",
    "LA": "louisiana",
    "ME": "maine",
    "MD": "maryland",
    "MA": "massachusetts",
    "MI": "michigan",
    "MN": "minnesota",
    "MS": "mississippi",
    "MO": "missouri",
    "MT": "montana",
    "NE": "mebraska",
    "NV": "nevada",
    "NH": "new hampshire",
    "NJ": "new jersey",
    "NM": "new mexico",
    "NY": "new york",
    "NC": "north carolina",
    "ND": "North dakota",
    "OH": "ohio",
    "OK": "oklahoma",
    "OR": "oregon",
    "PA": "pennsylvania",
    "RI": "rhode island",
    "SC": "south carolina",
    "SD": "south dakota",
    "TN": "tennessee",
    "TX": "texas",
    "UT": "utah",
    "VT": "vermont",
    "VA": "virginia",
    "WA": "washington",
    "WV": "west virginia",
    "WI": "wisconsin",
    "WY": "wyoming"
};
var stateAbbr =
{
    "alabama": "AL",
    "alaska": "AK",
    "arizona":	"AZ",
    "arkansas":	"AR",
    "california": "CA",
    "colorado":	"CO",
    "connecticut":	"CT",
    "delaware": "DE",
    "florida": "FL",
    "georgia": "GA",
    "hawaia": "HI",
    "idaho": "ID",
    "illinois":	"IL",
    "indiana": "IN",
    "iowa":	"IA",
    "kansas": "KS",
    "kentucky":	"KY",
    "louisiana": "LA",
    "maine": "ME",
    "maryland":	"MD",
    "massachusetts": "MA",
    "michigan":	"MI",
    "minnesota": "MN",
    "mississippi": "MS",
    "missouri":	"MO",
    "montana": "MT",
    "nebraska": "NE",
    "nevada": "NV",
    "new hampshire": "NH",
    "new jersey": "NJ",
    "new mexico": "NM",
    "new york":	"NY",
    "north carolina": "NC",
    "north dakota": "ND",
    "ohio": "OH",
    "oklahoma":	"OK",
    "oregon": "OR",
    "pennsylvania":	"PA",
    "rhode island":	"RI",
    "south carolina": "SC",
    "south dakota": "SD",
    "tennessee": "TN",
    "texas": "TX",
    "utah":	"UT",
    "vermont": "VT",
    "virginia": "VA",
    "washington": "WA",
    "west virginia": "WV",
    "wisconsin": "WI",
    "wyoming": "WY"
};
var stateData = 
{
    "alabama": ["Montgomery", 4887871],
    "alaska": ["Juneau", 710231],
    "arizona": ["Phoenix", 6392017],
    "arkansas": ["Little Rock", 2915918],
    "california": ["Sacramento", 39254523],
    "colorado": ["Denver", 5029196],
    "connecticut": ["Hartford", 3574097],
    "delaware": ["Dover", 897934],
    "florida": ["Tallahassee", 18801310],
    "georgia": ["Atlanta", 9687653],
    "hawaii": ["Honolulu", 1360301],
    "idaho": ["Boise", 1567582],
    "illinois": ["Springfield", 12830632],
    "indiana": ["Indianapolis", 6483802],
    "iowa": ["Des Moines", 3046355],
    "kansas": ["Topeka", 2853188],
    "kentucky": ["Frankfort", 4339367],
    "louisiana": ["Baton Rouge", 4533372],
    "maine": ["Augusta", 1328361],
    "maryland": ["Annapolis", 5773552],
    "massachusetts": ["Boston", 6547629],
    "michigan": ["Lansing", 9883640],
    "minnesota": ["Saint Paul", 5303925],
    "mississippi": ["Jackson", 2967397],
    "missouri": ["Jefferson City", 5988927],
    "montana": ["Helena", 989415],
    "nebraska": ["Lincoln", 1826341],
    "nevada": ["Carson City", 2700551],
    "new hampshire": ["Consord", 1316470],
    "new jersey": ["Trenton", 8791894],
    "new mexico": ["Santa Fe", 2059179],
    "new york": ["Albany", 19378102],
    "north carolina": ["Raleigh", 9535483],
    "North dakota": ["Bismarck", 672591],
    "ohio": ["Columbus", 11536504],
    "oklahoma": ["Oklahoma City", 3751351],
    "oregon": ["Salem", 3831074],
    "pennsylvania": ["Harrisburg", 12702379],
    "rhode island": ["Providence", 1052567],
    "south carolina": ["Columbia", 4625364],
    "south dakota": ["Pierre", 814180],
    "tennessee": ["Nashville", 6346105],
    "texas": ["Austin", 25145561],
    "utah": ["Salt Lake City", 2763885],
    "vermont": ["Montpelier", 625741],
    "virginia": ["Richmond", 8001024],
    "washington": ["Olympia", 6724540],
    "west virginia": ["Charleston", 1852994],
    "wisconsin": ["Madison", 5686986],
    "wyoming": ["Cheyenne", 563626]
};


/// <Summary>
/// Gets the input from the user on what state they're asking for
/// </Summary>
function getStateInput()
{
    // Ensure error is cleared
    document.getElementById("errorArea").innerHTML = "";

    // Gets inputof the state
    var curStateInput = document.getElementById("stateInput").value;
    var finalStringToPrint = "";



    // Error check: if key doesnt exist, send error and return
    if (curStateInput.length == 0)
    {
        console.log(abbrState[curStateInput.toUpperCase()]);
        document.getElementById("errorArea").innerHTML = "No state entered. Enter a valid state and submit again...";
        return;
    }
    else if (curStateInput.length <= 2 && abbrState[curStateInput.toUpperCase()] == undefined)
    {
        // Errored, key doesnt exists
        console.log(abbrState[curStateInput.toUpperCase()]);
        document.getElementById("errorArea").innerHTML = "State entered does not exists. Enter a valid state and submit again...";
        return;
    }
    else if (curStateInput.length > 2 && stateAbbr[curStateInput.toLowerCase()] == undefined)
    {
        // Errored, key doesnt exists
        console.log(stateAbbr[curStateInput.toLowerCase()]);
        document.getElementById("errorArea").innerHTML = "State entered does not exists. Enter a valid state and submit again...";
        return;
    }



    
    // If the length is 2, then it's a state abbreviation
    if (curStateInput.length == 2)
    {
        var curStateData = stateData[abbrState[curStateInput.toUpperCase()]];
        var formattedStateName = abbrState[curStateInput.toUpperCase()].slice(0,1).toUpperCase() + abbrState[curStateInput.toUpperCase()].slice(1, abbrState[curStateInput.toUpperCase()].length);

        finalStringToPrint += "<p>State entered successfully. Here is the state information requested:<br>State abbr = " + curStateInput.toUpperCase() + "<br>State Name = " + formattedStateName + "<br>Capital = " + curStateData[0] + "<br>Population = " + curStateData[1];
    }
    // Using full state name
    else
    {
        var curStateData = stateData[curStateInput.toLowerCase()];
        var formattedStateName = curStateInput.slice(0,1).toUpperCase() + curStateInput.slice(1, curStateInput.length).toLowerCase();

        finalStringToPrint += "<p>State entered successfully. Here is the state information requested:<br>State abbr = " + stateAbbr[curStateInput.toLowerCase()] + "<br>State Name = " + formattedStateName + "<br>Capital = " + curStateData[0] + "<br>Population = " + curStateData[1] + "</p>";
    }
    document.getElementById("Output").innerHTML = finalStringToPrint;
}