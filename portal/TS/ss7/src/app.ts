function getFirstNumber(arr:number[]):number {
    return arr[0];
}
console.log(getFirstNumber([1,2,3,4,5])); // 1
function getFirstString(str:string):string {
    return str[0];
}
console.log(getFirstString('hello')); // h
interface User{
    id:number;
    name:string;
}
function getFirstUser(users:User[]):User {
    return users[0];
}
console.log(getFirstUser([{id:1,name:'John'},{id:2,name:'Jane'}])); // {id:1,name:'John'}
type InputType=number|User;
type TotalInputType=InputType[]|string;
type Rtype=number|User|string;
function getFirst(input:TotalInputType):Rtype{
    return input[0];
}
console.log(getFirst([1,2,3,4,5])); // 1
console.log(getFirst("Hello")); // a
console.log(getFirst([{id:1,name:'John'},{id:2,name:'Jane'}])); // {id:1,name:'John'}

// function getFirst2<T>(input:T[]){

// }
// getFirst2<number>([1,2,3,4,5]);
// getFirst2<string>(['Hello']);
// getFirst2<User>([{id:1,name:'John'},{id:2,name:'Jane'}]);


function merge<T extends object,U extends object>(ObjA:T,ObjB:U){
    return Object.assign(ObjA,ObjB);
}
const mergedObj=merge<{name:string},{age:number}>({name:'John'},{age:30});
let margeObject2=merge<{status:boolean},{number:number}>({status:true},{number:30});
console.log(mergedObj,name); // {name:'John',age:30}
interface Lenght{
    length:number;
}

function count<T extends Lenght>(input:T):string{
    let result="";
    if(input.length===0){
        result="No Element";
    }else if(input.length===1){
        result="1 Element";
    }
    else {
        result=`${input.length} Elements`;
    }
    return result;
}
console.log(count("Hello")); // 5 Elements
console.log(count([1,2,3,4,5])); // 5 Elements
console.log(count([])); // No Element

// extractAndConvert({name: "Hello", age: 18}, "name") // ` Value: "Hello" `
// extractAndConvert({name: "Hello", age: 18}, "age") // ` Value: 18 `
function extractAndConvert<T extends object,U extends keyof T>(obj:T,key:U):string{
    return `Value: ${obj[key]}`;
}
console.log(extractAndConvert({name: "Hello", age: 18}, "name")); // ` Value: "Hello" `
console.log(extractAndConvert({name: "Hello", age: 18}, "age")); // ` Value: 18 `

class Storage1<T>{
    private data:T;
    constructor(data:T){
        this.data=data;
    }
    getData():T{
        return this.data;
    }
    setData(data:T) :void{
        this.data=data;
    }
}
const numberStorage=new Storage1<number>(100);
console.log(numberStorage.getData()); // 100
numberStorage.setData(200);
console.log(numberStorage.getData()); // 200
const stringStorage=new Storage1<string>('Hello');