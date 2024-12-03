console.log('Hello World');
let num: number = 12;
let str: string = "Hello";
let check: boolean = true;

// Gán lại giá trị cho các biến
// Hợp lệ vì cùng kiểu dữ liệu
num = 123;
check = false;

//Không hợp lệ vì khác kiểu dữ liệu
// str = 12;


// Nối chuỗi và viết hoa chữ cái đầu tiên
// Khai báo 2 biến firstName và lastName có kiểu dữ liệu string và gán giá trị cho chúng. 
// Tiến hành ghép 2 chuỗi lại với dấu cách ở giữa và gán giá trị đã được ghép cho biến fullName. 
// Trước khi ghép thì kiểm tra xem các chữ cái đầu đã viết hoa chưa, nếu chưa thì viết hoa chữ cái đầu trong hai chuỗi.
let firstName: string = "john";
let  lastName: string = "doe";
let fullName:string = firstName.charAt(0).toUpperCase() + firstName.slice(1) + " " + lastName.charAt(0).toUpperCase() + lastName.slice(1);
console.log(fullName);

// Lọc ký tự trùng lặp trong chuỗi
// Khai báo một biến kiểu string và gán giá trị cho biến đó là một câu bất kỳ. Hãy lọc tất cả các ký tự bị trùng lặp ra khỏi chuỗi đó.
let str1: string = "Hello World"; 
// chuyển thành helo wrd
let result: string = "";
for (let i = 0; i < str1.length; i++) {
    if (str1.indexOf(str1[i]) === i) {
        result += str1[i];
    }
}
console.log(result);

// Xây dựng hàm tính toán
// Xây dựng các hàm thực hiện các phép toán cộng, trừ , nhân, chia, mỗi hàm có 2 tham số và trả về kết quả của phép tính. Kiểu dữ liệu của tham số có thể là number hoặc string. Nếu kiểu dữ liệu là string thì trong hàm phải kiểm tra xem có thể chuyển về dạng số được không, nếu có thể thì thực hiện phép tính như bình thường, nếu không thì thông báo không hợp lệ.
function toNumber(a: number | string ): number {
    const num = typeof a === 'string' ? parseInt(a) : a;
    if(isNaN(num)){
        throw new Error('Invalid number');
    }
    return num;
}
function add(a: number | string , b:number |string):number{
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    return num1 + num2;
}
function subarray(a: number | string , b:number |string):number{
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    return num1 - num2;
}
function multiply(a:number | string , b:number | string):number{
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    return num1 * num2;
}
function divide(a:number | string , b:number | string):number{
    let num1 = toNumber(a);
    let num2 = toNumber(b);
    if(num2 === 0){
        throw new Error('Invalid number');
    }
    return num1 / num2;
}

console.log(add(1,2));
console.log(subarray(1,2));
console.log(multiply(1,2));
console.log(divide(1,2));
console.log(add('1','2'));
console.log(subarray('1','2'));
console.log(multiply('1','2'));
console.log(divide('1','2'));
console.log(add('1','a'));
console.log(subarray('1','a'));

