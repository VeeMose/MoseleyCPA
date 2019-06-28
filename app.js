// this is the name section
function askName() {
    name = prompt ("Hello, what is your name?");
}
askName();

var end = 0;

while (end <= 3) {
        if (name !== "Jim") {
        askName();
        end++;
    } else {
        alert ("Thanks," + " " + name);
    break;
    }
}


//this is the color section
function nameColor () {
    var color = prompt ("What color do you like?");
    document.body.style.background = color;
}

nameColor ();

