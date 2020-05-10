/*
Homework 5 - Ajax Applications 
Create a web page with the heading CNIT 133 Homework 5 - Ajax Applications.

The contents of this page can be directly the part 1 that is mentioned here below.

THERE ARE ONLY 2 DAYS TO SUBMIT LATE THIS HOMEWORK!!!

Part 1:

Recreate the 'gethint' Ajax example from W3Schools (Links to an external site.). Use the php file containing the hints and expand them to include several more names as hints (at least 10 more names).

Do some research and include in that page a paragraph presenting a REST API that you could use in an application and the URL to the documentation of that API - it cannot be any Github API, neither BART as both of those two have been mentioned in the lecture! You can start your research here - https://apilist.fun/ (Links to an external site.) - your paragraph or table should contain at least the following information: What type of response file you get (JSON, XML, etc.)? Do you need any type of key to access and use the API? You need also to provide a link to any type of documentation that would help the developer use the API.

Note: It is recommended to upload your php script (file) to the web hosting server, into the same directory where your HTML file resides. Be sure to give your php directory read and execute permissions (chmod 700 or 755 php). Remember that you can use the setup script, after login in Hills (using Terminal in Mac or using PuTTY in Windows), and the script will set up automatically the right permissions to any files and folders from the public_html down in case you get the FORBIDDEN message to the .php program you will upload.
*/

function showHint(str) 
{
    if (str.length == 0) 
    {
      document.getElementById("txtHint").innerHTML = "";
      return;
    } 

    else 
    {
      var xmlhttp = new XMLHttpRequest();

      xmlhttp.onreadystatechange = function() 
      {
        if (this.readyState == 4 && this.status == 200) {
          document.getElementById("txtHint").innerHTML = this.responseText;
        }
      };

      xmlhttp.open("GET", "hw5.php?nameRequest=" + str, true);
      xmlhttp.send();
    }
  }