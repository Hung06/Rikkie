let arr=[1,8,3,7,5,2,4];
let n=5;
let arr1=[];
let a=1;
for(let i=0;i<arr.length;i++){
    if(arr[i]+arr[a]==n){
        arr1.push(arr[i]);
        arr1.push(arr[a]);
        break;
    }
    a++;
}
console.log(arr1);