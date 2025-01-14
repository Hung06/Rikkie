"use strict";
function getFirstNumber(arr) {
    return arr[0];
}
console.log(getFirstNumber([1, 2, 3, 4, 5]));
function getFirstString(str) {
    return str[0];
}
console.log(getFirstString('hello'));
function getFirstUser(users) {
    return users[0];
}
console.log(getFirstUser([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]));
function getFirst(input) {
    return input[0];
}
console.log(getFirst([1, 2, 3, 4, 5]));
console.log(getFirst("Hello"));
console.log(getFirst([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]));
function merge(ObjA, ObjB) {
    return Object.assign(ObjA, ObjB);
}
const mergedObj = merge({ name: 'John' }, { age: 30 });
let margeObject2 = merge({ status: true }, { number: 30 });
console.log(mergedObj, name);
function count(input) {
    let result = "";
    if (input.length === 0) {
        result = "No Element";
    }
    else if (input.length === 1) {
        result = "1 Element";
    }
    else {
        result = `${input.length} Elements`;
    }
    return result;
}
console.log(count("Hello"));
console.log(count([1, 2, 3, 4, 5]));
console.log(count([]));
function extractAndConvert(obj, key) {
    return `Value: ${obj[key]}`;
}
console.log(extractAndConvert({ name: "Hello", age: 18 }, "name"));
console.log(extractAndConvert({ name: "Hello", age: 18 }, "age"));
class Storage1 {
    constructor(data) {
        this.data = data;
    }
    getData() {
        return this.data;
    }
    setData(data) {
        this.data = data;
    }
}
const numberStorage = new Storage1(100);
console.log(numberStorage.getData());
numberStorage.setData(200);
console.log(numberStorage.getData());
const stringStorage = new Storage1('Hello');
