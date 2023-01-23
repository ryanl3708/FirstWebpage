'use strict'

function displayPetCount() {

    let output = '';
    let rating = prompt('How many cat-dog pairs do you want to see?');
    for(let i = 0; i < rating; i++){
        output += "<img class='pairs' src=''/>";
    }

    return document.write(output);
}
