let a = [1,2,5,3,1,2,3,6,7,2];
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

    if(count[i]==1){
        console.log(i);
    }
    
}
