let NV=["Hùng","Huy","Trang"];
let x=true;
function showNV(){
    for(let i=0;i<NV.length;i++){
        console.log(`${i+1}. ${NV[i]}`);
    }
}
while(x){
    switch(prompt("Chọn C,R,U,D,E").toUpperCase()){
    case "C":
        let b=prompt("Nhập tên cần thêm");
        NV.push(b);
        showNV();
        break;
    case "R":
        showNV();
        break;
    case "U":
        let c=prompt("Nhập vị trí cần sửa");
        let d=prompt("Nhập tên mới");
        NV[c]=d;
        showNV();
        break;
    case "D":
        let e=prompt("Nhập vị trí cần xóa");
        NV.splice(e,1);
        showNV();
        break;
    case "E":
        x=false;
        break;
    }

}