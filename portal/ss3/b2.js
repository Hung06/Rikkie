let a = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
let count=[];
for(let i=0;i<a.length;i++){
    let num = a[i];
    if(count[num]){
        count[num]++;
        
    }else{
        count[num]=1;
    }
}
for(let i=0;i<count.length;i++){
    if(count[i]>1){
        console.log(i);
    }
}
