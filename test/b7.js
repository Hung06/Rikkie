let bookStore = ["Tôi thấy hoa vàng trên cỏ xanh", "Đắc nhân tâm", "Nhà giả kim", "Harry Potter", "Sapiens"];
let cart = [];
function showBookStore() {
    console.log("Danh sách sách có sẵn trong cửa hàng:");
    bookStore.forEach((book, index) => {
        console.log(`${index + 1}. ${book}`);
    });
}
let x=true;
while(x){
    switch(prompt("1. Hiển thị danh sách sách\n2. Thêm sách vào giỏ hàng\n3. Hiển thị giỏ hàng\n4. Xóa sách khỏi giỏ hàng\n5. Kết thúc mua sắm")){
    case "1":
        showBookStore();
        break;
    case "2":
        let index = prompt("Nhập số thứ tự sách muốn thêm vào giỏ hàng");
        if (index >= 1 && index <= bookStore.length) {
            cart.push(bookStore[index - 1]);
            console.log("Đã thêm sách vào giỏ hàng");
        } else {
            console.log("Số thứ tự sách không hợp lệ");
        }
        break;

    case "3":
        console.log("Danh sách sách trong giỏ hàng:");
        cart.forEach((book, index) => {
            console.log(`${index + 1}. ${book}`);
        });
        break;
    case "4":
        let bookIndex = prompt("Nhập số thứ tự sách muốn xóa khỏi giỏ hàng");
        if (bookIndex >= 1 && bookIndex <= cart.length) {
            cart.splice(bookIndex - 1, 1);
            console.log("Đã xóa sách khỏi giỏ hàng");
        } else {
            console.log("Số thứ tự sách không hợp lệ");
        }
        break;
    case "5":
        x=false;
        break;
    }
}