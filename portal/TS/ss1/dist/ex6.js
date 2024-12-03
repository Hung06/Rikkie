"use strict";
function toNumber(value) {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) {
        throw new Error(`Invalid number: ${value}`);
    }
    return num;
}
function add(a, b) {
    const numA = toNumber(a);
    const numB = toNumber(b);
    return numA + numB;
}
function subtract(a, b) {
    const numA = toNumber(a);
    const numB = toNumber(b);
    return numA - numB;
}
function multiply(a, b) {
    const numA = toNumber(a);
    const numB = toNumber(b);
    return numA * numB;
}
function divide(a, b) {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numB === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return numA / numB;
}
let x = false;
let a = prompt("Nhập số thứ 1: ");
let b = prompt("Nhập số thứ 2: ");
if (a === null || b === null) {
    console.error("Bạn cần nhập đầy đủ giá trị!");
}
else {
    a = Number(a);
    b = Number(b);
    if (isNaN(a) || isNaN(b)) {
        console.error("Giá trị nhập vào không hợp lệ!");
    }
    else {
        switch (prompt("Chọn phép toán: \n1. Cộng\n2. Trừ\n3. Nhân\n4. Chia")) {
            case '1':
                console.log(add(a, b));
                break;
            case '2':
                console.log(subtract(a, b));
                break;
            case '3':
                console.log(multiply(a, b));
                break;
            case '4':
                try {
                    console.log(divide(a, b));
                }
                catch (error) {
                    if (error instanceof Error) {
                        console.error(error.message);
                    }
                    else {
                        console.error("An unknown error occurred.");
                    }
                }
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    }
}
