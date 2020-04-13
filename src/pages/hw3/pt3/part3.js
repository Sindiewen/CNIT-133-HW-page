// Part 3:
// Create a 2nd webpage that contains a script that utilizes 2 pulldown menus. The first one should utilize an onchange event handler. The second should utilize a button with an onclick event handler to navigate to a page after an option is selected. Each pulldown menu should include at least 3 URL destinations. 

function dropdownButton(dropdownmenu)
{
    document.getElementById(dropdownmenu).classList.toggle("show");

    var dropdownsClass = document.getElementsByClassName("dropdown-content");
    console.log(dropdownsClass[i].id === dropdownmenu);
    for (var i = 0; i < dropdownsClass.length; i++)
    {
        if (dropdownsClass[i].classList.contains('show') && !dropdownsClass[i].id === dropdownmenu)
        {
            dropdownsClass[i].classList.remove('show');
        }
    }
}

window.onclick = function(event)
{
    if (!event.target.matches('.dropdownButton'))
    {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++)
        {
            if (dropdowns[i].classList.contains('show'))
            {
                dropdowns[i].classList.remove('show');
            }
        }
    }
}