let stores = [
	{ id: 1, name: "Milk", count: 100}, 
	{id: 2, name: "Yakult", count: 100},
	{id: 3, name: "Butter", count: 100,}
];

let carts=[];
// Cho người dùng nhập vào 5 chữ cái C/R/U/D/E
// C – Cho người dùng nhập vào tên sản phẩm muốn mua. Nếu có thêm chúng vào carts khi đó count trong stores của sản phẩn đó giảm đi 1
// R – In ra toàn bộ các sản phẩm trong stores và carts
// U – Hỏi người dùng vị trí update trong carts. Nếu tồn tại cho người dùng nhập vào số lượng muốn thay đổi và khi đó count trong stores cũng cập nhật theo. Update xong in lại stores và carts
// D – Hỏi người dùng vị trị của sản phẩm muốn xóa trong carts. Tiến hành xóa và in ra lại
// E – Biến chương trình thành vòng lặp vĩnh cứu và khi người dùng nhập vào E thì sẽ thoát khỏi chương trình và thông báo “Cảm ơn bạn đã đến với Rikkei Stores”
let input6 = prompt("Chọn chức năng C/R/U/D/E");
while(input6!="E"){
    switch(input6){
        case "C":
            let name = prompt("Nhập tên sản phẩm");
            let product = stores.find((i)=>i.name==name);
            if(product){
                product.count--;
                carts.push(product);
                let cartItem = carts.find(item => item.name === product.name);
                if (cartItem) {
                    cartItem.count++; // Tăng số lượng trong carts
                } else {
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
                            } else {
                                console.log("Không tìm thấy sản phẩm trong kho.");
                            }
                        } else {
                            console.log("Số lượng không hợp lệ.");
                        }
                    } else {
                        console.log("Người dùng đã hủy nhập liệu.");
                    }
                } else {
                    console.log("Vị trí không hợp lệ.");
                }
            }
            break;
        case "D":
            let deleteindex=prompt("Nhập vị trí muốn xóa");
            if(deleteindex){
                let indexd=Number(deleteindex);
                let cartItem = carts[indexd];
                let storeItem = stores.find(item => item.id === cartItem.id);
                if(storeItem){
                    storeItem.count+=cartItem.count;
                    carts.splice(indexd,1);
                    console.log("Xóa thành công");
                }
                else{
                    console.log("Không tìm thấy sản phẩm trong kho");
                    }
                }
            else{
                console.log("Vị trí không hợp lệ");
            }
            break;
        case "E":
            console.log("Cảm ơn bạn đã đến với Rikkei Stores");
            break;
    }
}
