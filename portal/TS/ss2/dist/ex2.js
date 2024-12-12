"use strict";
let input2 = prompt("Nhập số cách nhau bằng dấu ',':");
let arr2 = input2 ? input2.split(",").map(Number) : [];
let newarr2 = arr2.sort((a, b) => a - b);
console.log("Giá trị Min là :" + newarr2[0]);
console.log("Giá trị Max là :" + newarr2[newarr2.length - 1]);
