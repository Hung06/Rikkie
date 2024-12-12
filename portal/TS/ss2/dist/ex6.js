"use strict";
let stores = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Yakult", count: 100 },
    { id: 3, name: "Butter", count: 100, }
];
let carts = [];
let input6 = prompt("Chọn chức năng C/R/U/D/E");
while (input6 != "E") {
    switch (input6) {
        case "C":
            let name = prompt("Nhập tên sản phẩm");
            let product = stores.find((i) => i.name == name);
            if (product) {
                product.count--;
                carts.push(product);
                let cartItem = carts.find(item => item.name === product.name);
                if (cartItem) {
                    cartItem.count++;
                }
                else {
                    carts.push({ id: product.id, name: product.name, count: 1 });
                }
                console.log("Sản phẩm đã được thêm vào giỏ hàng");
            }
            break;
        case "R":
            console.log("Stores:");
            console.log(stores);
            console.log("Carts:");
            console.log(carts);
            break;
        case "U":
            let updateIndexInput = prompt("Nhập vị trí (index) trong giỏ hàng muốn cập nhật:");
            if (updateIndexInput !== null) {
                let updateIndex = Number(updateIndexInput);
                if (!isNaN(updateIndex) && updateIndex >= 0 && updateIndex < carts.length) {
                    let newCountInput = prompt("Nhập số lượng mới:");
                    if (newCountInput !== null) {
                        let newCount = Number(newCountInput);
                        if (!isNaN(newCount) && newCount >= 0) {
                            let cartItem = carts[updateIndex];
                            let storeItem = stores.find(item => item.id === cartItem.id);
                            if (storeItem) {
                                storeItem.count += cartItem.count - newCount;
                                cartItem.count = newCount;
                                if (cartItem.count === 0) {
                                    carts.splice(updateIndex, 1);
                                }
                                console.log("Cập nhật thành công.");
                            }
                            else {
                                console.log("Không tìm thấy sản phẩm trong kho.");
                            }
                        }
                        else {
                            console.log("Số lượng không hợp lệ.");
                        }
                    }
                    else {
                        console.log("Người dùng đã hủy nhập liệu.");
                    }
                }
                else {
                    console.log("Vị trí không hợp lệ.");
                }
            }
            break;
        case "D":
            let deleteindex = prompt("Nhập vị trí muốn xóa");
            if (deleteindex) {
                let indexd = Number(deleteindex);
                let cartItem = carts[indexd];
                let storeItem = stores.find(item => item.id === cartItem.id);
                if (storeItem) {
                    storeItem.count += cartItem.count;
                    carts.splice(indexd, 1);
                    console.log("Xóa thành công");
                }
                else {
                    console.log("Không tìm thấy sản phẩm trong kho");
                }
            }
            else {
                console.log("Vị trí không hợp lệ");
            }
            break;
        case "E":
            console.log("Cảm ơn bạn đã đến với Rikkei Stores");
            break;
    }
}
