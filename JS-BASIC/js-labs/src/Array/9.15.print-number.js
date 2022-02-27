// Array exercises
// 1. Print numbers: 1 -> 10
// 2. Print even numbers [2, 4, 6, 8, 10]
// 3. Print even numbers but less than n
// 1. Print numbers: 1 -> 10
function printNumbers() {
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}
printNumbers();
// 2. Print even numbers [2, 4, 6, 8, 10]
function printEvenNumbers() {
  for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) console.log(i);
  }
}
printEvenNumbers();
function printEvenNumbers() {
  for (let i = 2; i <= 10; i += 2) {
    console.log(i);
  }
}
printEvenNumbers();
// 3. Print even numbers but less than n
function printEvenNumbersN(n) {
  if (n < 2) return;
  for (let i = 2; i < n; i += 2) {
    console.log(i);
  }
}
printEvenNumbersN(99);
