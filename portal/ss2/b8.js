let n= prompt("Nhập số nguyên dương bất kỳ: ");
function songuyento(a){
    if(a<2){
        return false;
    }else{
        for(let i=2;i<=Math.sqrt(a);i++){
            if(a%i==0){
                return false;
            }
        }
    }
    return true;
}
let x=0;
for(let i=1;i<=n*n;i++){
    if(songuyento(i)){
        console.log(i);
        x++;
    }
    if(x==n){
        break;
    }
}