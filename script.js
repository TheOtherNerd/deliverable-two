let happiness=0;
let energy=0;
var i=0;
//var petName;
//var userInput;

function feed(){
    energy = energy + 2;
    i++;
}

function pet(){
    happiness = happiness + 1;
    i++;
}

function walk(){
    if(energy == 0){
        alert("Not enough energy to walk!");
    } else {
        happiness = happiness + 2;
        energy = energy - 1;
        i++;
    }
}
function petgame(){

    var petName= prompt("What is your pet's name?");
    
    do{
    var userInput= prompt("feed, pet, or walk?");

    if (userInput == "feed"){
        feed();
        
    } else if (userInput == "pet"){
        pet();
    } else if (userInput == "walk"){
        walk();
    } else {
        alert("Sorry, not a valid command...");
    }
   
    }  while (i < 6);

    if (i == 6){
        console.log (petName + " has " + happiness + " happiness and " + energy + " energy!");
    }
}
