let Arr=[1,2,3,3,4,5,4,4,4,5,5];
let a=[];
for(let i=0;i<Arr.length;i++){
    for(let j=i+1;j<Arr.length;j++){
        if (Arr[i] != Arr[j] && a.includes(Arr[i]) == false){
            a.push(Arr[i]);
            break;
        }
        break;
    }
}
console.log(a);