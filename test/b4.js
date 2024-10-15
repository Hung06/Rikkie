let Arr=[5, 2, 3, 4, 1];
let x=Arr[0];
for(let i=0;i<Arr.length;i++){
    for(let j=i+1;j<Arr.length;j++){
        if(Arr[j]<Arr[i]){
            let temp=Arr[j];
            Arr[j]=Arr[i];
            Arr[i]=temp;
        }
    }
    
}
console.log(Arr);
