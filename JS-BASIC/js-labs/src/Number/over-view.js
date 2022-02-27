// cách viết nhiều số 0
const number = 1e6;
const smallNumber = 0.0001; // có thể viết thành 1e-4
console.log('dsđ');

// increment
let count = 1;
const n = count++; // 1 postfix, return first, then increase
let count = 1;
const n = ++count; // 2 prefix, increase first, then return
// decrement
let count = 1;
const n = count--; // 1 postfix, return first, then decrease
let count = 1;
const n = --count; // 0 prefix, decrease first, then return
// unary plus: attempts to convert to number if it's not a number
const n = +'123'; // 123
// unary negation: return the negation of the operand
const n = -'123'; // -123
// exponentiation operator
const n = 2 ** 3; // means 2^3

// Assignment operators
// addition assignment
let n = 1;
n += 1; // 2, similar to n = n + 1
// subtraction assignment
let n = 1;
n -= 1; // 0 similar to n = n - 1
// multiplication assignment
let n = 1;
n *= 3; // 3 similar to n = n * 3
// division assignment
let n = 1;
n /= 2; // 0.5 similar to n = n / 2
