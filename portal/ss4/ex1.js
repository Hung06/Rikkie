function ex1(a,b){
    let c=[];
    for( let i=0 ;i<a.length;i++){
        for(let j=1;j<a.length;j++){
            if(a[i]+a[j]===b && i!==j){
                c.push([a[i], a[j]]);
                a.splice(i,1);
            }
        }
        
    }
    return c;
}
let a=[1,4,6,1,2,7,9,3,12];
let b=8;    
console.log(ex1(a,b));

