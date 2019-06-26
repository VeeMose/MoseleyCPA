var name = prompt ("Hello, what is your name?");
alert ("Thanks," + " " + name);

var color = prompt ("What color do you like?");
document.body.style.background = color;

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) (
    greeting = "Good evening";
) else if (hourNow > 12) (
    greeting = "Good afternoon";
) else if (hourNow > 0) (
    greeting = "Good morning";
)   else (
    greeting = "Welcome!";
)
document.write('<h3>' + greeting + "</h3>");