let a = [1, 5, 6, 3, 2, 1, 1, 5, 6, 7];
let n = parseInt(prompt("Nhập số nguyên dương bất kỳ: "), 10);
let sum = 0;
let b = [];

for (let i = 0, start = 0; i < a.length; i++) {
    sum += a[i];
    b.push(a[i]);
    while (sum > n && start <= i) {
        sum -= b.shift();
        start++;
    }
    if (sum === n) {
        console.log(b);
        break;
    }
}

if (sum !== n) {
    console.log("Không có dãy con nào có tổng bằng " + n);
}
