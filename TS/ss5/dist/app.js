"use strict";
class Animal {
    constructor(type) {
        this._type = type;
    }
    get type() {
        return this._type;
    }
    set type(type) {
        this._type = type;
    }
    sound() {
        console.log('this is a animal sound');
    }
}
class Dog extends Animal {
    constructor(name, gender) {
        super('carnivore');
        this.name = name;
        this.gender = gender;
    }
    sound() {
        super.sound();
        console.log(`this is ${this.name}, i am a ${this.gender ? "male" : "female"} dog`);
    }
    introduce(input) {
        if (typeof input === 'string') {
            console.log(`my name is ${input}`);
        }
        else if (typeof input === 'boolean') {
            console.log(`i am a ${input}`);
        }
        else {
            console.log('input is not a string or boolean');
        }
    }
}
let dog = new Dog('dogfy', true);
dog.sound();
