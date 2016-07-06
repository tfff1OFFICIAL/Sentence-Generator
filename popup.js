var start = ["Eat", "Lick", "Magic", "Murder", "Explode", "Edit", "Burn", "Play", "Get"];
var end = ["that Bobby", "a chocolate", "a table", "a cup", "a tower", "a building", "a lemon", "a pineapple", "a game", "some Dwarf Fortress", "some dwarf", "a life", "a democracy", "some eyebrows"];

function generateSentence() {
    var element = document.getElementById("generatedSentence");
    element.innerHTML = start[randomNumber("start")].toString() + " " + end[randomNumber("end")].toString() + ".<br>";
}

function randomNumber(type) {
    var max
    if (type == "start") {
        max = start.length - 1;
    }
    else if (type == "end") {
        max = end.length - 1;
    }
    var min = 0;
           
    var Number = Math.floor(Math.random()*(max-min+1)+min);
    console.log("Number is: " + Number.toString());
    return Number;
}

document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById("generateBtn");
    button.addEventListener("click", function() {
        generateSentence();
    });
});