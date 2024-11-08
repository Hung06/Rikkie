let a = parseInt(prompt("Nhập số nguyên dương a: "));
let b = parseInt(prompt("Nhập số nguyên dương b: "));
let c = parseInt(prompt("Nhập số nguyên dương c: "));
let d = parseInt(prompt("Nhập số nguyên dương d: "));

function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

let e = gcd(a, b); 
e = gcd(e, c);   
e = gcd(e, d);

alert("Ước chung lớn nhất của bốn số là: " + e);
