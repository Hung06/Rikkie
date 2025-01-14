"use strict";
function extractAndConvert1(obj, key) {
    return `Value: ${obj[key]}`;
}
console.log(extractAndConvert1({ name: "Hello", age: 18 }, "name"));
console.log(extractAndConvert1({ name: "Hello", age: 18 }, "age"));
