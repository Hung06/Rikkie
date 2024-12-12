let s = String(prompt("Nhập chuỗi"));
let arr9 = s.toLowerCase().split("").filter(c => /[a-z0-9]/.test(c));
let isPalindrome = true;

for (let i = 0; i < arr9.length / 2; i++) {
    if (arr9[i] !== arr9[arr9.length - 1 - i]) {
        isPalindrome = false;
        break;
    }
}

if (isPalindrome) {
    console.log("Chuỗi đối xứng");
} else {
    console.log("Chuỗi không đối xứng");
}
