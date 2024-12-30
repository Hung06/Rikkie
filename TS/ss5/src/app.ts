class Animal{
    protected _type: string;
    constructor(type: string){
        this._type = type;
    }
    get type():string{
        return this._type;
    }
    set type(type: string){
        this._type = type;
    }
    sound(){
        console.log('this is a animal sound');  
    }

}
class Dog extends Animal{
    private name: string;
    private gender: boolean;
    constructor( name: string,gender: boolean){
        super('carnivore');
        this.name = name;
        this.gender=gender
    }
    override sound(){
        super.sound();
        console.log(`this is ${this.name}, i am a ${this.gender?"male":"female"} dog`);

    }
    introduce(input:string):void;
    introduce(input:boolean):void;
    introduce(input:string|boolean):void{
       if(typeof input === 'string'){
           console.log(`my name is ${input}`);  
       }else if(typeof input === 'boolean'){
              console.log(`i am a ${input}`);
       }else{
              console.log('input is not a string or boolean');
         }
    }
}
let dog = new Dog('dogfy',true);
dog.sound();