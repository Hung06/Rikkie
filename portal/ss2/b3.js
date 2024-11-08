let a= prompt("Nhập số nguyên dương bất kỳ:");
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
for(let i=2;i<=a;i++){
    if(songuyento(i)){
        console.log(i);
    }
}