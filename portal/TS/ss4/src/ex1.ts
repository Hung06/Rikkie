class Calculator{
    add(a:number,b:number):number{
        return a+b;
    }
    subtract(a:number,b:number):number{
        return a-b;
    }
    multiply(a:number,b:number):number{
        return a*b;
    }
    divide(a:number,b:number):number{
        return a/b;
    }
}
class Main{
    static main(){
        let option:number = 0;
        while(option!==5){
            console.log("1. Cộng");
            console.log("2. Trừ");
            console.log("3. Nhân");
            console.log("4. Chia");
            console.log("5. Thoát");
            option = parseInt(prompt("Chọn chức năng:") || "0");
            const calculator = new Calculator();
            switch(option){
                case 1:
                    const aInput = prompt("Nhập số a:");
                    if (aInput === null) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    const a = parseInt(aInput);
                    if (isNaN(a)) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    const bInput = prompt("Nhập số b:");
                    if (bInput === null) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    const b = parseInt(bInput);
                    if (isNaN(b)) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    console.log("Kết quả: ",calculator.add(a,b));
                    break;
                case 2:
                    const aInput2 = prompt("Nhập số a:");
                    if (aInput2 === null) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    const a2 = parseInt(aInput2);
                    if (isNaN(a2)) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    const bInput2 = prompt("Nhập số b:");
                    if (bInput2 === null) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    const b2 = parseInt(bInput2);
                    if (isNaN(b2)) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    console.log("Kết quả: ",calculator.subtract(a2,b2));
                    break;
                case 3:
                    const aInput3 = prompt("Nhập số a:");
                    if (aInput3 === null) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    const a3 = parseInt(aInput3);
                    if (isNaN(a3)) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    const bInput3 = prompt("Nhập số b:");
                    if (bInput3 === null) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    const b3 = parseInt(bInput3);
                    if (isNaN(b3)) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    console.log("Kết quả: ",calculator.multiply(a3,b3));
                    break;
                case 4:
                    const aInput4 = prompt("Nhập số a:");
                    if (aInput4 === null) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    const a4 = parseInt(aInput4);
                    if (isNaN(a4)) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    const bInput4 = prompt("Nhập số b:");
                    if (bInput4 === null) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    const b4 = parseInt(bInput4);
                    if (isNaN(b4)) {
                        console.log("Vui lòng nhập một số hợp lệ");
                        break;
                    }
                    console.log("Kết quả: ",calculator.divide(a4,b4));
                    break;
                case 5:
                    console.log("Thoát chương trình");
                    break;
            }
        }
    }
}