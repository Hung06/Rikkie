"use strict";
let input4 = prompt("Nhập số cách nhau bằng dấu ',':");
let arr4 = input4 ? input4.split(",").map(Number) : [];
for (let i = 0; i < arr4.length; i++) {
    for (let j = 1; j < arr4.length; j++) {
        if (arr4[i] > arr4[j]) {
            let temp = arr4[i];
            arr4[i] = arr4[j];
            arr4[j] = temp;
        }
    }
}
console.log("Mảng sau khi sắp xếp là: " + arr4);
