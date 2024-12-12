let numberlist: number[];
numberlist = [1, 2, 3, 4, 5];

let studentlist: string[];
studentlist=["A","B","C","D","E"];

for(let i=0; i<numberlist.length; i++){
    console.log(numberlist[i]);
}
// for .. of lấy ra toàn bộ phần tử có trong mảng và không quan tâm đến chỉ số
for(let student of studentlist){
    console.log(student);
}
// for .. in lấy ra toàn bộ phần tử có trong mảng và quan tâm đến chỉ số
for(let index in studentlist){
    console.log(index);
}

// Create
// thêm đầu mảng .unshift()
// thêm cuối mảng .push()
// thêm ở giữa mảng .splice()

// delete
// xóa đầu mảng .shift()
// xóa cuối mảng .pop()
// xóa ở giữa mảng .splice()

// danh sách số điện thoại
let phonelist:Array<string>;

phonelist = ["0987654321", "0123456789", "0123456789"]; 

let random : any[];
random = [1, "Hello", true, 1.5];
type Person = {
    name: string;
    age: number;
    gender: boolean;
    hobbies: string[];
}
let person: Person={
    name: "John",
    age: 30,
    gender : true,
    hobbies: ["Reading", "Walking", "Coding"],
};

let students: {
    id:number;
    name:string;
    age:number;
}[]=[
    {
        id: 1,
        name: "John",
        age: 30,
    },
    {
        id: 2,
        name: "Marry",
        age: 25,
    },
    {
        id: 3,
        name: "Peter",
        age: 35,
    },
];


// Tuple : mảng có kiểu dữ liệu khác nhau trong mỗi phần tử của mảng và độ dài cố định
let roles : [string, string, string];
roles =[ "Admin", "Editor", "Contributor"];


// Enum : kiểu dữ liệu liệt kê
enum Role{
    ADMIN =10,
    EDITOR,
    AUTHOR,
};
console.log(Role.ADMIN);
console.log(Role.EDITOR);
console.log(Role.AUTHOR);
let role ={
    ADMIN:0,
    EDITOR:1,
    AUTHOR:2,
};
// Type alias : định nghĩa kiểu dữ liệu
type StringOrNumber = string | number;

// union type : kiểu dữ liệu hỗn hợp
let unionType: StringOrNumber;
unionType = 10;
unionType = "Hello";


// function type : kiểu dữ liệu hàm
function sum(number1: number, number2: number): number{
    return number1 + number2;
}
// TS 1 function có thể nhận 1 function khác làm tham số
//  phương thức map() của mảng
let numbers: number[] = [1, 2, 3, 4, 5];
let newarr =numbers.map(function(element,index){
    return element*element;
})

console.log(newarr);

function map (
    arr: number[],
    fn: (element: number, index: number) => number): number[] {
        let result: number[]= [];
    for(let i in arr){
        let mapElement:number =fn(arr[i],+i);
        result.push(mapElement);
    }
    return result;
}
let resulmap=map([3,3,5,7],function(element,index){
    return element * element;    
}
)
console.log(resulmap);