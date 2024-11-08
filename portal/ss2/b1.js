
let x=6;
while(true){
    let a= prompt("Mời bạn đoán số:");
    if(a>x){
        alert("Số ban nhập lớn hơn số cần tìm.");
    }
    else if(a<x){
        alert("Số bạn nhập nhỏ hơn số cần tìm.");
    }
    else{
        alert("Chúc mừng bạn đã đoán đúng.");
        break;
    }
}