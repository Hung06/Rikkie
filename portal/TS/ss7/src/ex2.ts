type InputType2=number|User;
type TotalInputType2=InputType2[]|string;
type Rtype2=number|User|string;
function getFirst2(input:TotalInputType2):Rtype2{
    return input[0];
}
console.log(getFirst2([1,2,3,4,5])); // 1
console.log(getFirst2("Hello")); // a
console.log(getFirst2([{id:1,name:'John'},{id:2,name:'Jane'}])); // {id:1,name:'John'}