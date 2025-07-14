const sum = (p1, p2) => {
    console.log(p1);
    console.log(p2);
    return p1 + p2;
}

const result = sum(5, 10);
console.log(result); // 15 printed

// if there is a single parameter, we can omit the parentheses
const square = p => {
    console.log(p);
    return p * p;
}

// If the function only contains a single expression then the braces are not needed. In this case, the function only returns the result of its only expression. Now, if we remove console printing, we can further shorten the function definition:
const squareShort = p => p * p;

// This form is particularly handy when manipulating arrays - e.g. when using the map method:
const t = [1, 2, 3];
const tSquared = t.map(p => p * p);
console.log(tSquared); // [1, 4, 9]

// function declaration
function product(a, b) {
    return a * b;
}

const result2 = product(5, 10);
console.log(result2); // 50 printed

// function expression
const average = function (a, b) {
    return (a + b) / 2;
}

const result3 = average(5, 10);
console.log(result3); // 7.5 printed