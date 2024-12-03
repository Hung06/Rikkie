"use strict";
let num2 = Math.floor(Math.random() * 10) + 1;
let count = 3;
let isWin = false;
while (count > 0) {
    let guess = prompt("Enter your guess");
    let num3 = guess !== null ? parseFloat(guess) : 0;
    if (num3 === num2) {
        isWin = true;
        alert("Congratulations! You win the game");
        break;
    }
    else if (num3 > num2) {
        alert("Your guess is too high");
    }
    else {
        alert("Your guess is too low");
    }
    count--;
}
