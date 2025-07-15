const x = 1; // do not allow to change the value of the variable
let y = 5; // behaves like a normal variable and allow any value to be assigned

console.log(x, y); // 1 and 5 are printed

y += 10;
console.log(x, y); // 1 15 are printed

y = 'sometext';
console.log(x, y); // 1 sometext are printed

x = 4; // causes an error