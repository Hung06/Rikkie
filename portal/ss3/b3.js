let a=[1,2,5,7];
let b=[10,5,7,3,1];
function findmin(a){
    for(let i=1;i<100;i++){
            if(a.includes(i)==false){
                console.log(i);
                break;
            }
    }
}
findmin(a);
findmin(b);

