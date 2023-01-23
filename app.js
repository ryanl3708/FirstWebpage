'use strict'

function captcha(){
    var isHuman = 1;
    while (isHuman !== "y"){
        var isHuman = prompt("Are you Human? (type y if yes)")
    }
}

function animalPics(){
    let numPet;
    let output = "";
    let userChoice = prompt("Are you a Cats person or a Dog person? (Type c or d)");
    while (userChoice != "c" && userChoice != "d") {
            userChoice = prompt("Are you a Cats person or a Dog person? (Type c or d)");
    }   
    if (userChoice == "c"){
        numPet = prompt("How many Cats do you want to see? (0~5)");
        while (numPet < 0 || numPet > 5){
            numPet = prompt("How many Cats do you want to see? (0~5)");
        } 
        document.write("<p id='cattext'> Hello Cat Person! </p>");
        for(let i=0; i < numPet; i++){
            output += "<img class='catsss' src='img/cat2.jpg'/>";
        }     
    } else if (userChoice == "d"){
        numPet = prompt("how many Dogs do you want? (0~5)");
        while (numPet < 0 || numPet > 5){
            numPet = prompt("how many Dogs do you want? (0~5)");
        }
        document.write("<p id='dogtext'> Hello Dog person! </p>");
        for(let i=0; i < numPet; i++){
            output += "<img class='dogsss' src='img/dog2.jpg'/>";
        }
    }
    document.write(output);
}
// function displayPetCount() {

//     let output = '';
//     let rating = prompt('How many cat-dog pairs do you want to see?');
//     for(let i = 0; i < rating; i++){
//         output += "<img class='pairs' src=''/>";
//     }

//     return document.write(output);
// }