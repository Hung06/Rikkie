"use strict";
let numberlist;
numberlist = [1, 2, 3, 4, 5];
let studentlist;
studentlist = ["A", "B", "C", "D", "E"];
for (let i = 0; i < numberlist.length; i++) {
    console.log(numberlist[i]);
}
for (let student of studentlist) {
    console.log(student);
}
for (let index in studentlist) {
    console.log(index);
}
let phonelist;
phonelist = ["0987654321", "0123456789", "0123456789"];
let random;
random = [1, "Hello", true, 1.5];
let person = {
    name: "John",
    age: 30,
    gender: true,
    hobbies: ["Reading", "Walking", "Coding"],
};
let students = [
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
let roles;
roles = ["Admin", "Editor", "Contributor"];
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 10] = "ADMIN";
    Role[Role["EDITOR"] = 11] = "EDITOR";
    Role[Role["AUTHOR"] = 12] = "AUTHOR";
})(Role || (Role = {}));
;
console.log(Role.ADMIN);
console.log(Role.EDITOR);
console.log(Role.AUTHOR);
let role = {
    ADMIN: 0,
    EDITOR: 1,
    AUTHOR: 2,
};
let unionType;
unionType = 10;
unionType = "Hello";
function sum(number1, number2) {
    return number1 + number2;
}
let numbers = [1, 2, 3, 4, 5];
let newarr = numbers.map(function (element, index) {
    return element * element;
});
console.log(newarr);
function map(arr, fn) {
    let result = [];
    for (let i in arr) {
        let mapElement = fn(arr[i], +i);
        result.push(mapElement);
    }
    return result;
}
let resulmap = map([3, 3, 5, 7], function (element, index) {
    return element * element;
});
console.log(resulmap);
