// Hàm chuyển đổi string thành số và kiểm tra tính hợp lệ
function toNumber(value: number | string): number {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) {
        throw new Error(`Invalid number: ${value}`);
    }
    return num;
}

// Hàm cộng
function add(a: number | string, b: number | string): number {
    const numA = toNumber(a); // Chuyển a thành số
    const numB = toNumber(b); // Chuyển b thành số
    return numA + numB; // Cộng và trả về kết quả
}

// Hàm trừ
function subtract(a: number | string, b: number | string): number {
    const numA = toNumber(a);
    const numB = toNumber(b);
    return numA - numB; // Trừ và trả về kết quả
}

// Hàm nhân
function multiply(a: number | string, b: number | string): number {
    const numA = toNumber(a);
    const numB = toNumber(b);
    return numA * numB; // Nhân và trả về kết quả
}

// Hàm chia
function divide(a: number | string, b: number | string): number {
    const numA = toNumber(a);
    const numB = toNumber(b);
    if (numB === 0) {
        throw new Error("Cannot divide by zero.");
    }
    return numA / numB; // Chia và trả về kết quả
}
let x=false
    // Lấy đầu vào từ người dùng và chuyển thành số nếu cần
let a: string | number | null = prompt("Nhập số thứ 1: ");
let b: string | number | null = prompt("Nhập số thứ 2: ");

// Kiểm tra nếu giá trị nhập vào là null, nếu có thì gán giá trị mặc định hoặc thông báo lỗi
if (a === null || b === null) {
    console.error("Bạn cần nhập đầy đủ giá trị!");
} else {
    // Chuyển đổi giá trị nhập từ chuỗi thành số
    a = Number(a);
    b = Number(b);

    // Kiểm tra nếu giá trị nhập vào là hợp lệ
    if (isNaN(a) || isNaN(b)) {
        console.error("Giá trị nhập vào không hợp lệ!");
    } else {
        // Chọn phép toán và thực hiện
        switch (prompt("Chọn phép toán: \n1. Cộng\n2. Trừ\n3. Nhân\n4. Chia")) {
            case '1':
                console.log(add(a, b));
                break;
            case '2':
                console.log(subtract(a, b));
                break;
            case '3':
                console.log(multiply(a, b));
                break;
            case '4':
                try {
                    console.log(divide(a, b));
                } catch (error) {
                    if (error instanceof Error) {
                        console.error(error.message);
                    } else {
                        console.error("An unknown error occurred.");
                    }
                }
                break;
            default:
                console.log("Lựa chọn không hợp lệ.");
        }
    }
}
