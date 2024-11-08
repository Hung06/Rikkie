let a=prompt("Nhập số nguyên dương bất kỳ:");
function fibonacci(a){
    if(a===0){
        return 0;
    }
    if(a===1){
        return 1;
    }
    return fibonacci(a-1)+fibonacci(a-2);
}
let x=0;
for(let i=0;i<=a;i++){
    if(x+fibonacci(i)>a){
        break;
    }
    else{
        x+=fibonacci(i);
        console.log(fibonacci(i));
    }
}
