const object1 = {
  name: 'Arto Hellas',
  age: 35,
  education: 'PhD',
}

const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

console.log(object1.name); // prints 'Arto Hellas'
const fieldName = 'age';
console.log(object1[fieldName]); // prints 35, using a variable to access the property

// You can also add properties to an object on the fly by either using dot notation or brackets:

object1.address = 'Helsinki'
object1['secret number'] = 12341