interface Sales{
    name:string;
    sale():void;
}
interface Maketing{
    name:string;
    marketing():void;
}
class RK implements Sales,Maketing{
    name:string;
    constructor (name:string){
        this.name=name;
    }
    marketing(): void {
        console.log("Marketing");
    }
    sale(): void {
        console.log("Sale");
    }
}
class phenikaa implements Sales,Maketing{
    name:string;
    constructor (name:string){
        this.name=name;
    }
    sale(): void {
        console.log("Sale");
    }
    marketing(): void {
        console.log("Marketing");
    }
}
interface Person{
    name:string;
    age:number;
}
type Human={
    name:string;
    age:number;
};
let p1:Person={name :"RK",age:20};
let p2:Human={name :"RK",age:20};