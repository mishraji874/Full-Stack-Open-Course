const t = [1, -1, 3];

t.push(5); // allows to end the number at the end of the array

console.log(t.length); // prints 4, the length of the array
console.log(t[1]); // prints -1, the second element of the array because the indexing in array starts from 0 not from 1.

t.forEach(value => {
    console.log(value); // prints each element of the array
});

const t2 = t.concat(5); // creates a new array by concatenating 5 to the end of t

console.log(t); // [1, -1, 3, 5] is printed
console.log(t2); // [1, -1, 3, 5, 5] is printed, t2 is a new array and does not change t

// map example
const t3 = [1, 2, 3];

const m1 = t.map(value => value * 2); // creates a new array with each element multiplied by 2
console.log(m1); // [2, 4, 6] is printed

// map can also transform the array into completely different
const m2 = t.map(value => '<li>' + value + '</li>');
console.log(m2); // ['<li>1</li>', '<li>-1</li>', '<li>3</li>', '<li>5</li>'] is printed

// destructuring example
const t4 = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t4

console.log(first, second)  // 1 2 is printed
console.log(rest)          // [3, 4, 5] is printed