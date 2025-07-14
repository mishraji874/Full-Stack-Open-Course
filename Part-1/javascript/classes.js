class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log('hello, my name is ' + this.name);
    }
}

const adam = new Person('Adam', 29);
adam.greet();  // "hello, my name is Adam" gets printed

const janja = new Person('Janja', 32);
janja.greet(); // "hello, my name is Janja" gets printed