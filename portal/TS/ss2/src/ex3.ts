let input3 = prompt("Nhập số cách nhau bằng dấu ',':");
let arr3 = input3 ? input3.split(",").map(Number) : [];
let newarr3=[];
for(let i of arr3){
    newarr3.unshift(i);
}
console.log("Mảng sau khi đảo ngược là: "+newarr3);