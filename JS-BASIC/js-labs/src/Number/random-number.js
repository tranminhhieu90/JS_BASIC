// Random number in JS
// . Random một số ngẫu nhiên trong khoảng [0, n]
// . Random một số ngẫu nhiên trong khoảng [a, b] với a < b
// Gợi ý sử dụng hàm Math.random() để làm việc này, nhưng hàm này chỉ trả về trong khoảng [0, 1]

// 1. . Random một số ngẫu nhiên trong khoảng [0, n]
function randomNumber(n) {
  if (n <= 0) return -1;
  const random = Math.random() * n;
  return Math.round(random);
}

// 2. Random một số ngẫu nhiên trong khoảng [a, b] với a < b
function randomNumberInRange(a, b) {
  if (a >= b || a <= 0 || b <= 0) return -1;
  const random = Math.random() * (b - a);
  return Math.round(random + a);
}
randomNumberInRange(10, 99);
randomNumberInRange(100, 999);
randomNumberInRange(1000, 9999);

// 3. Write a function to calculate the area of a rectangle
function calcAreaOfRec(a, b) {
  if (a <= 0 || b <= 0) return -1;
  return a * b;
}
// 4.Write a function to calculate perimeter of a rectangle
function calcAreaOfCircle() {
  if (a <= 0 || b <= 0) return -1;
  return (a + b) * 2;
}

// 5. Write a function to calculate the area of a circle
// S = PI * R * R
function calcAreaOfCircle(radius) {
  if (radius) return -1;
  return Math.PI * radius * radius;
}

// 6.Write a function to check if a number is odd/even
function checkIsOdd(n) {
  if (n < 0) return -1;
  return n % 2 === 0;
}
// 7. Write a function to check if a number is divisible by 5
function checkIsDivisibleBy5(n) {
  if (n < 0) return -1;
  return n % 5 === 0;
}
// 8.  Write a function to check if a number is perfect square

function checkIsPerfectSquare(n) {
  if (n < 0) return -1;
  return Number.isInteger(Math.sqrt(n));
}
checkIsPerfectSquare(25);
