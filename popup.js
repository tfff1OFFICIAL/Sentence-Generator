var start = ["Eat", "Lick", "Magic", "Murder", "Explode", "Edit", "Burn", "Play", "Get"];
var end = ["Bobby", "chocolate", "table", "cup", "tower", "building", "lemon", "pineapple", "game", "Dwarf Fortress", "life", "democracy"];

function generateSentence() {
    var element = document.getElementById("generatedSentence");
    element.innerHTML = start[randomNumber()].toString() + " a " + end[randomNumber()].toString() + ".<br>";
}

function randomNumber() {
    var max = start.length - 1;
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