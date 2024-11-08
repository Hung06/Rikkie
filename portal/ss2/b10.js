let n = parseInt(prompt("Nhập số nguyên dương bất kỳ: "));
for(let i=n;i>=1n;i--){
    console.log("*".repeat(i));
}
for(let i=n;i>=1n;i--){
    console.log(" ".repeat(n-i)+ "*".repeat(i));
}
