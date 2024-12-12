let input = prompt("Nhập số cách nhau bằng dấu ',':");
let arr = input ? input.split(",").map(Number) : [];
let count =0;
for(let i of arr){
    if(i>=10){
        console.log(i);
        count++;
    }
}
// for(let i in arr){
//     if(arr[i]>=10){
//         console.log(arr[i]);
//         count++;
//     }
// }
// arr.forEach((i)=>{
//     if(i>=10){
//         console.log(i);
//         count++;
//     }
// });
console.log("Số phần tử lớn hơn 10 là: "+   count);