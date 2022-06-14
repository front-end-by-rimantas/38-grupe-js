console.clear();

class Dog {
    constructor(name) {
        this.name = name;
        this.boneCount = 0;
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

    newBone() {
        return `${this.name}: ${'🦴'.repeat(++this.boneCount)}!`;
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
rex.changeVoice('bark');
console.log(rex.voice());                   // Rex: Bark bark!