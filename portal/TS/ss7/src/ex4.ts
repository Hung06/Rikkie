function extractAndConvert1<T extends object,U extends keyof T>(obj:T,key:U):string{
    return `Value: ${obj[key]}`;
}
console.log(extractAndConvert1({name: "Hello", age: 18}, "name")); // ` Value: "Hello" `
console.log(extractAndConvert1({name: "Hello", age: 18}, "age")); // ` Value: 18 `