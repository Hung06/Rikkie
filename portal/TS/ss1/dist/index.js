"use strict";
console.log('Hello World');
let num = 12;
let str = "Hello";
let check = true;
num = 123;
check = false;
let firstName = "john";
let lastName = "doe";
let fullName = firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1);
console.log(fullName);
let str1 = "Hello World";
let result = "";
for (let i = 0; i < str1.length; i++) {
    if (str1.indexOf(str1[i]) === i) {
        result += str1[i];
    }
}
console.log(result);
function toNumber(a) {
    const num = typeof a === 'string' ? parseInt(a) : a;
    if (isNaN(num)) {
        throw new Error('Invalid number');
    }
    return num;
}
function add(a, b) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    return num1 + num2;
}
function subarray(a, b) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    return num1 - num2;
}
function multiply(a, b) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    return num1 * num2;
}
function divide(a, b) {
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if (num2 === 0) {
        throw new Error('Invalid number');
    }
    return num1 / num2;
}
console.log(add(1, 2));
console.log(subarray(1, 2));
console.log(multiply(1, 2));
console.log(divide(1, 2));
console.log(add('1', '2'));
console.log(subarray('1', '2'));
console.log(multiply('1', '2'));
console.log(divide('1', '2'));
console.log(add('1', 'a'));
console.log(subarray('1', 'a'));
