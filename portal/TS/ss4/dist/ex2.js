"use strict";
class GeometryCalculator {
    circleArea(radius) {
        return Math.PI * radius * radius;
    }
    circlePerimeter(radius) {
        return 2 * Math.PI * radius;
    }
    triangleArea(base, height) {
        return 0.5 * base * height;
    }
    trianglePerimeter(a, b, c) {
        return a + b + c;
    }
    rectangleArea(width, height) {
        return width * height;
    }
    rectanglePerimeter(width, height) {
        return 2 * (width + height);
    }
    parallelogramArea(base, height) {
        return base * height;
    }
    parallelogramPerimeter(a, b) {
        return 2 * (a + b);
    }
    rhombusArea(d1, d2) {
        return 0.5 * d1 * d2;
    }
    rhombusPerimeter(side) {
        return 4 * side;
    }
}
class Main2 {
    run() {
        const geometryCalculator = new GeometryCalculator();
        let choice = 0;
        while (choice !== 11) {
            console.log("1. Diện tích hình tròn");
            console.log("2. Chu vi hình tròn");
            console.log("3. Diện tích tam giác");
            console.log("4. Chu vi tam giác");
            console.log("5. Diện tích hình chữ nhật");
            console.log("6. Chu vi hình chữ nhật");
            console.log("7. Diện tích hình bình hành");
            console.log("8. Chu vi hình bình hành");
            console.log("9. Diện tích hình thoi");
            console.log("10. Chu vi hình thoi");
            console.log("11. Thoát");
            switch (choice) {
                case 1:
                    let radius = prompt("Nhập bán kính hình tròn: ");
                    let radiusNumber = Number(radius);
                    if (!radius || isNaN(radiusNumber)) {
                        console.log("Bán kính không hợp lệ");
                    }
                    else {
                        console.log("Diện tích hình tròn: ", geometryCalculator.circleArea(radiusNumber));
                    }
                    break;
                case 2:
                    let radius2 = prompt("Nhập bán kính hình tròn: ");
                    let radiusNumber2 = Number(radius2);
                    if (!radius2 || isNaN(radiusNumber2)) {
                        console.log("Bán kính không hợp lệ");
                    }
                    else {
                        console.log("Chu vi hình tròn: ", geometryCalculator.circlePerimeter(radiusNumber2));
                    }
                    break;
                case 3:
                    let base = prompt("Nhập cạnh đáy: ");
                    let baseNumber = Number(base);
                    let height = prompt("Nhập chiều cao: ");
                    let heightNumber = Number(height);
                    if (!base || !height || isNaN(baseNumber) || isNaN(heightNumber)) {
                        console.log("Cạnh đáy hoặc chiều cao không hợp lệ");
                    }
                    else {
                        console.log("Diện tích tam giác: ", geometryCalculator.triangleArea(baseNumber, heightNumber));
                    }
                    break;
                case 4:
                    let a = prompt("Nhập cạnh a: ");
                    let aNumber = Number(a);
                    let b = prompt("Nhập cạnh b: ");
                    let bNumber = Number(b);
                    let c = prompt("Nhập cạnh c: ");
                    let cNumber = Number(c);
                    if (!a || !b || !c || isNaN(aNumber) || isNaN(bNumber) || isNaN(cNumber)) {
                        console.log("Cạnh a, b hoặc c không hợp lệ");
                    }
                    else {
                        console.log("Chu vi tam giác: ", geometryCalculator.trianglePerimeter(aNumber, bNumber, cNumber));
                    }
                    break;
                case 5:
                    let width = prompt("Nhập chiều rộng: ");
                    let widthNumber = Number(width);
                    let height2 = prompt("Nhập chiều cao: ");
                    let heightNumber2 = Number(height2);
                    if (!width || !height2 || isNaN(widthNumber) || isNaN(heightNumber2)) {
                        console.log("Chiều rộng hoặc chiều cao không hợp lệ");
                    }
                    else {
                        console.log("Diện tích hình chữ nhật: ", geometryCalculator.rectangleArea(widthNumber, heightNumber2));
                    }
                    break;
                case 6:
                    let width2 = prompt("Nhập chiều rộng: ");
                    let widthNumber2 = Number(width2);
                    let height3 = prompt("Nhập chiều cao: ");
                    let heightNumber3 = Number(height3);
                    if (!width2 || !height3 || isNaN(widthNumber2) || isNaN(heightNumber3)) {
                        console.log("Chiều rộng hoặc chiều cao không hợp lệ");
                    }
                    else {
                        console.log("Chu vi hình chữ nhật: ", geometryCalculator.rectanglePerimeter(widthNumber2, heightNumber3));
                    }
                    break;
                case 7:
                    let base2 = prompt("Nhập cạnh đáy: ");
                    let baseNumber2 = Number(base2);
                    let height4 = prompt("Nhập chiều cao: ");
                    let heightNumber4 = Number(height4);
                    if (!base2 || !height4 || isNaN(baseNumber2) || isNaN(heightNumber4)) {
                        console.log("Cạnh đáy hoặc chiều cao không hợp lệ");
                    }
                    else {
                        console.log("Diện tích hình bình hành: ", geometryCalculator.parallelogramArea(baseNumber2, heightNumber4));
                    }
                    break;
                case 8:
                    let a2 = prompt("Nhập cạnh a: ");
                    let aNumber2 = Number(a2);
                    let b2 = prompt("Nhập cạnh b: ");
                    let bNumber2 = Number(b2);
                    if (!a2 || !b2 || isNaN(aNumber2) || isNaN(bNumber2)) {
                        console.log("Cạnh a hoặc b không hợp lệ");
                    }
                    else {
                        console.log("Chu vi hình bình hành: ", geometryCalculator.parallelogramPerimeter(aNumber2, bNumber2));
                    }
                    break;
                case 9:
                    let d1 = prompt("Nhập đường chéo 1: ");
                    let d1Number = Number(d1);
                    let d2 = prompt("Nhập đường chéo 2: ");
                    let d2Number = Number(d2);
                    if (!d1 || !d2 || isNaN(d1Number) || isNaN(d2Number)) {
                        console.log("Đường chéo 1 hoặc đường chéo 2 không hợp lệ");
                    }
                    else {
                        console.log("Diện tích hình thoi: ", geometryCalculator.rhombusArea(d1Number, d2Number));
                    }
                    break;
                case 10:
                    let side = prompt("Nhập cạnh: ");
                    let sideNumber = Number(side);
                    if (!side || isNaN(sideNumber)) {
                        console.log("Cạnh không hợp lệ");
                    }
                    else {
                        console.log("Chu vi hình thoi: ", geometryCalculator.rhombusPerimeter(sideNumber));
                    }
                    break;
                case 11:
                    console.log("Kết thúc chương trình");
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ");
                    break;
            }
        }
    }
}
