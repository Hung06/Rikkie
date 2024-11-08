let n = prompt("Nhập số nguyên dương bất kỳ: ");
for(let i=1;i<=n;i++){
    console.log("*".repeat(i));
}
for(let i=1;i<=n;i++){
    console.log(" ".repeat(n-i) + "*".repeat(i));
}