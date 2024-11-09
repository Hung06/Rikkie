let a=[1,2,3,4,5];
let b=[-3,-1,0,1,5];
let c=[1,5,6,7];
for(let i=0;i<a.length;i++){
    if(b.includes(a[i]) && c.includes(a[i])){
        console.log(a[i]);
    }
}