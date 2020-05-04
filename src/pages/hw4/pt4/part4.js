/*Write a script that displays a top navigation bar containing a link to your Homework 1 and five other links that will be to the cover page for each of your Homework2 - Homework6. When you mouseover on any of these other links then display a drop-down menu that contains the links of their homework parts (part 1, part 2, etc.). If applicable then also include links to any extra credit pages that you have done. Make sure that all links are working. You can use strictly JavaScript or else jQuery - using CSS only will not be acceptable. You can check this example here - https://hills.ccsf.edu/~cdasilva/cnit132/jQuerydropdown/index.html (Links to an external site.) (the links are not working, not pointing to anything but it demonstrates that when I hover on an item of the main menu, it will show the submenu ONLY for that item). Another great example can be seen in this article - http://smashinghub.com/simple-jquery-drop-down-menu-tutorial.htm (Links to an external site.)
A simpler example can be seen here - https://hills.ccsf.edu/~cdasilva/cnit132/simpledropdown.html
*/// so i guess theres no js here
// good lol

$(document).ready(function(){
    $('nav li ul').hide().removeClass('fallback');
    $('nav li').hover(
        function(){
            $('ul', this).stop().slideDown(200);
        },
        function(){
            $('ul', this).stop().slideUp(200);
        }
    );
});