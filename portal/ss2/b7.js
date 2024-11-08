function reverseNumber(n){
    let reversed = parseInt(n.toString().split('').reverse().join(''));
    return reversed;
}
let n= prompt("Nhập số nguyên dương bất kỳ: ");
console.log(reverseNumber(n));