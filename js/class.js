console.clear();

class Dog {
    constructor(name) {
        this.name = name;
    }

    sayHi() {
        return `${this.name}: Labas!`;
    }

    sayGoodbye(otherName = 'mielas drauge') {
        return `${this.name}: Iki ${otherName}!`;
    }

    voice() {
        return `${this.name}: Au au!`;
    }
}

const rex = new Dog('Rex');
console.log(rex.sayHi());
console.log(rex.sayGoodbye('Maryte'));
console.log(rex.voice());                   // Rex: Au au!
console.log(rex.newBone());                 // Rex: 🦴!
console.log(rex.newBone());                 // Rex: 🦴🦴!
console.log(rex.newBone());                 // Rex: 🦴🦴🦴!
console.log(rex.newBone());                 // Rex: 🦴🦴🦴🦴!
