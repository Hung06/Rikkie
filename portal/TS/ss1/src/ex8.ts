
// số ngẫu nhiên từ 1 đến 10 (bao gồm cả 1 và 10)
let num2: number = Math.floor(Math.random() * 10) + 1;
// 3 lượt đoán
let count: number = 3;
let isWin: boolean = false;
while (count > 0) {
  let guess = prompt("Enter your guess");
  let num3: number = guess !== null ? parseFloat(guess) : 0;
  if (num3 === num2) {
    isWin = true;
    alert("Congratulations! You win the game");
    break;
  }
  else if(num3 > num2) {
    alert("Your guess is too high");
  }
    else {
        alert("Your guess is too low");
    }
  count--;
}
