let input7 = prompt("Nhập số cách nhau bằng dấu ',':");
let arr7 = input4 ? input4.split(",").map(Number):[];
let target=Number(prompt("Nhập tổng mong muốn:"));
let result7=[];
for(let i =0;i<arr7.length;i++){
    for(let j=1;j<arr7.length;j++){
        if(arr7[i]+arr7[j]===target){
            result7.push([arr7[i],arr7[j]]);
        }
    }
}
console.log(result7);