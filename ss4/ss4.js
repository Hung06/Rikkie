//
console.log("Hello, this is my todo list");

//Cho  người dùng nhập vào các từ khóa C/R/U/D để điều khiển ứng dụng todoList
//Khi người dùng nhập vào C : hỏi người dùng todo mới cần phải thêm vào trong todoList
//-Thêm todo mới vào todoList
//-Hiển thị toàn bộ công việc trong todoList ra màn hình
//Khi người dùng nhập vào R : hiển thị toàn bộ công việc trong
//U : hỏi người dùng vị trí công việc cần update và công việc mới cần update
//-Update công việc mới vào vị trí công việc cần update
//D : hỏi người dùng vị trí công việc cần xóa
//-Xóa công việc ở vị trí đó
// let todoList = [
//     "wake up at 6:00",
//     "go to the gym",
//     "eat breakfast",
// ];
// function showtodoList(){
//     for(let i=0;i<todoList.length;i++){
//         console.log(`${i+1}.${todoList[i]}`);
//     }
// }
// lopp=true;
// while(loop=true){
//     let userInput= prompt("Chọn chức năng bạn muốn thực hiện (C/R/U/D)"
//     ).toUpperCase();
//     if(userInput ==="C"){
//         let newTodo=prompt("Nhập công việc mới");
//         todoList.push(newTodo);
//         showtodoList();

//     }else if(userInput ==="R"){
//         showtodoList();

//     }else if(userInput==="U"){
//         let updateIndex=+prompt("Nhập vị trí công việc cần update");
//         let newTodo=prompt("Nhập công việc mới");
//         todoList[updateIndex]=newTodo;
//         showtodoList();

//     }else if(userInput==="D"){  
//         let deleteIndex=prompt("Nhaapj vị trí công việc cần xóa");
//         todoList.splice(deleteIndex,1);
//         showtodoList(); 

//     }else if(userInput==="E"){
//         loop=false;
//         console.log("Cam on ban da su dung ung dung");

//     }
// }


// Mô phỏng lại chường trình rút tiền ATM
//Đối số(Arguements) 

// fakeATM("100k","12345","ACB");

// fakeATM("1000k","123456","AGB");
// let result=fakeATM(1000,"123456","AGB");
// console.log(result);
// function fakeATM(money,pin,bank){
//     //xây dựng login tính toán
//     console.log("So sánh mã pin với CSDL",pin);
//     console.log(`Kiểm tra xem còn bao nhiêu tờ tiền ${money}`);
//     console.log(`Kiểm tra xem ATM có hỗ trợ thẻ ${bank} hay không`);
//     return money*100;
// }


// let arr=[1,4,6,1,2,7,9,3,12]
// function bai1(arr,n){
//     for(let i=0;i<arr.length-1;i++){
//         for(let j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]===n){
//                 let a1=[arr[i],arr[j]];
//                 return a1;
//             }
//         }
//     }
    
// }
// let n=prompt("Nhập số n");
// console.log(`Các cặp số có tổng bằng ${n} là ${bai1(arr,n)}`);



// let a="hello world";
// let b=prompt("Nhập chuỗi b");
// function bai2(a,b){
//     let x=0;
//     for(let i=0;i<b.length;i++){
//         for(let j=0;j<a.length;j++){
//             if(b[i]===a[j]){
//                 x++;
//                 break;
//             }
//         }
//     }
//     if(x===b.length){
//         return true;
//     }
//     return false;
// }
// console.log(bai2(a,b));




let arr=[-1,2,3,5,-6,4,2,9];

function bai3(arr){
    let a2=[];
    let x=arr[0];
    for(let i=1;i<arr.length;i++){
        if(x+arr[i]>x && x+arr[i]>arr[i]){
            x+=arr[i];
            a2.push(arr[i]);
        }
        else{
            x=arr[i];
        }
    }
    console.log(a2);
}
bai3(arr);
