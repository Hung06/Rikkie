// let student={
//     name:'Nguyen Van A',
//     age:20,
//     gender:1,
//     hobbies:["football","music","movie"],
//     address:{
//         number:18,
//         street:"Nguyen Du",
//         provider:"Hai Ba Trung",
//         city:"Ha Noi",
//         zipcode:1000,
//     },
//     seyHello:function(){
//         console.log("Hello, I am "+this.name);
//     },
//     seybye:function(){
//         console.log("Goodbye, See you later");
//     },
//     introduce:function(name){
//         console.log(`Hello,${name}. I am ${this.name}`);
//     }

// };
// // // console.log(student);
// // for(let i=0;i<student.hobbies.length;i++){
// //     console.log(`I, ${student.name} really love ${student.hobbies[i]} `);
// // }
// // // hien thi dia chi
// // console.log(`I live at ${student.address.number} ${student.address.street} ${student.address.provider} ${student.address.city} ${student.address.zipcode}`);


// // for (let key in student){
// //     console.log(student[key]);
// // }
// // student.seyHello();
// // student.introduce("Nguyen Van B");

// //Create

// student.girlfriend=['jisso','rose','lisa'];
// delete student.girlfriend;
// console.log(student);

// let studentList=[
//     {
//         id:1,
//         name:'Nguyen Van A',
//         age:20,

//     },
//     {
//         id:2,
//         name:'Nguyen Van B',
//         age:21,

//     },
//     {
//         id:3,
//         name:'Nguyen Van C',
//         age:22,

//     }
// ];
// console.log(`Moi em  ${studentList[1].name} len van phong`);
// for(let index in studentList){
//     console.log(`moi anh ${studentList[index].name},${studentList[index].age} tuoi len van phong`);
// }

let phoneList=[
    {
        id:1,
        phone:'0392105999',
        name:'Nguyen Van A',
    },
    {
        id:2,
        phone:'0392105999',
        name:'Nguyen Van B',
    },
    {
        id:4,
        phone:'0392105999',
        name:'Nguyen Van C',
    }
];
function showphoneList(){
    for(let index in phoneList){
        console.log(`ID: ${phoneList[index].id}, Name: ${phoneList[index].name}, Phone: ${phoneList[index].phone}`);
    }
}
function checkName(name){}

//C/R/U/D
while (true) {
    switch (prompt('Mời chọn chức năng C/R/U/D/E').toUpperCase()) {
        case 'C':
            let newname = prompt('Mời nhập tên');
            let contact = phoneList.find(contact => contact.name === newname);
            if (contact) {
                console.log('Tên đã tồn tại');
                showphoneList();
            } else {
                let phone = prompt('Mời nhập số điện thoại');
                phoneList.push({
                    id: phoneList[length-1].id + 1,
                    phone: phone,
                    name: newname,
                });
                showphoneList();
            }
            break;

        case 'R':
            showphoneList();
            break;

        case 'U':
            let nameUpdate = prompt('Mời nhập tên cần sửa');
            let contactToUpdate = phoneList.find(contact => contact.name === nameUpdate);
            if (contactToUpdate) {
                let newphone = prompt('Mời nhập số điện thoại mới');
                contactToUpdate.phone = newphone;
                showphoneList();
            } else {
                console.log('Liên hệ bạn vừa tìm kiếm không tồn tại');
                showphoneList();
            }
            break;

        case 'D':
            let deleteName = prompt('Mời nhập tên cần xóa');
            let index = phoneList.findIndex(contact => contact.name === deleteName);
            if (index !== -1) {
                phoneList.splice(index, 1);  // Xóa phần tử tại chỉ số index
                console.log('Đã xóa liên hệ');
                showphoneList();
            } else {
                console.log('Liên hệ bạn vừa tìm kiếm không tồn tại');
                showphoneList();
            }
            break;

        case 'E':
            console.log('Goodbye');
            

        default:
            console.log('Chức năng không hợp lệ, vui lòng chọn lại');
            break;
    }
}
