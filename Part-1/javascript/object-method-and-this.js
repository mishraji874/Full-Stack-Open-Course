const arto = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',

  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}

arto.greet()  // "hello, my name is Arto Hellas" gets printed

const arto2 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}


arto2.growOlder = function() {
  this.age += 1
}

console.log(arto2.age)   // 35 is printed
arto2.growOlder()
console.log(arto2.age)   // 36 is printed

const arto3 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },

  doAddition: function(a, b) {
    console.log(a + b)
  },
}

arto3.doAddition(1, 4)        // 5 is printed

const referenceToAddition = arto3.doAddition
referenceToAddition(10, 15)   // 25 is printed

arto3.greet()       // "hello, my name is Arto Hellas" gets printed

const referenceToGreet = arto3.greet
referenceToGreet() // prints "hello, my name is undefined"

const arto4 = {
  name: 'Arto Hellas',
  greet: function() {
    console.log('hello, my name is ' + this.name)
  },
}


setTimeout(arto4.greet, 1000);

// There are several mechanisms by which the original this can be preserved. One of these is using a method called bind:
setTimeout(arto4.greet.bind(arto4), 1000);