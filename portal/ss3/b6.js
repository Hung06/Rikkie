let a= [1, 3, 2, 3, 6, 7, 10, 8, 9];
let c=[];
let l=[];
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        c.push(a[i]);
    }else{
        l.push(a[i]);
    }
}
c.sort((a, b) => a - b);

l.sort((a, b) => a - b);

let x=c.concat(l);
console.log(x);