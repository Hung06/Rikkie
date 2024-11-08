let n = prompt("Nhập số nguyên dương bất kỳ: ");
function tong(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=1/(i*i*i);
    }
    return sum.toFixed(5);
}
console.log(tong(n));