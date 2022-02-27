// 1. Convert hours to seconds
function convertHoursToSeconds(hours) {
  if (hours < 0) return -1;
  if (hours === 0) return 0;
  const SECONDS_PER_HOUR = 3600;
  return hours * SECONDS_PER_HOUR;
}
// 2. Given 3 numbers, find max
function findMax(a, b, c) {
  let max = a;
  if (max < b) max = b;
  if (max < c) max = c;
  return max;
}

// 3. Given 3 numbers, find max even number
function findMaxEven(a, b, c) {
  let max = Number.NEGATIVE_INFINITY;
  if (a % 2 === 0 && a > max) max = a;
  if (b % 2 === 0 && b > max) max = b;
  if (c % 2 === 0 && c > max) max = c;
  return max;
}

// 4. Get the ones of a number having 3 digits
function extractTheOnes(n) {
  if (n.toString().length !== 3) return -1;
  return n % 10;
}
// 5.  Get the tens of a number having 3 digits
function extractTheTens(n) {
  if (n.toString().length !== 3) return -1;
  // 223 % 100
  // 23
  // 23 / 10 = 2.3 --> 2
  return Math.trunc((n % 100) / 10);
}
// 6.Get the hundreds of a number having 3 digits
function extractTheHundreds(n) {
  if (n.toString().length !== 3) return -1;
  // 523 / 100 = 5.23 --> 5
  return Math.trunc(n / 100);
}

// 7.Sum all digits of a number having 3 digits
function sumDigits(n) {
  if (n.toString().length !== 3) return -1;
  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);
  return ones + tens + hundreds;
}
// 8. Call taxi
function getTaxiCount(passengersCount) {
  if (passengersCount < 0) return -1;
  if (passengersCount <= 4 || (passengersCount >= 4 && passengersCount <= 7)) return 1;
  const surplusNumber = passengersCount % 7;
  const quotientNumber = passengersCount / 7;
  if (surplusNumber === 0) return quotientNumber;
  if (surplusNumber < 4) return Math.trunc(quotientNumber) + 1;
  if (surplusNumber > 4) return Math.ceil(quotientNumber);
}
// 9. Tìm chữ số max của 2 số nguyên dương
function getMaxDigit(n) {
  // your code here
  if (n < 0 || n >= 1000) return -1;
  const totalDigit = n.toString().length;
  if (totalDigit === 1) return n;
  if (totalDigit === 2) {
    const ones = n % 10;
    const tens = Math.trunc((n % 100) / 10);
    return ones < tens ? tens : ones;
  }
  if (totalDigit === 3) {
    const ones = n % 10;
    const tens = Math.trunc((n % 100) / 10);
    const hundreds = Math.trunc(n / 100);
    return Math.max(ones, tens, hundreds);
  }
}

// 9.2 v2
function getMaxDigit(n) {
  // your code here
  if (n < 0 || n >= 1000) return -1;
  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);
  return Math.max(ones, tens, hundreds);
}
// 10. So sánh 2 số nguyên
function compareNumbers(a, b) {
  if (a === b) {
    return 0;
  } else {
    return a - b < 0 ? -1 : 1;
  }
}
// 11. Check số đối xứng, số đối xứng là số đọc từ trái qua phải cũng giống như từ phải sang trái
function isSymmetricNumber(n) {
  // your code here
  // let isSymmetricNumber = false;
  // const numberLength = n.toString().length;
  // if (n < 0 || n > 999) isSymmetricNumber = false;
  // if (numberLength === 1) isSymmetricNumber = true;
  // if (numberLength === 2 && n % 11 === 0) isSymmetricNumber = true;
  // if (numberLength === 3) {
  //   const ones = n % 10;
  //   const hundreds = Math.trunc(n / 100);
  //   isSymmetricNumber = ones === hundreds;
  // }
  // return isSymmetricNumber;

  if (n < 0 || n > 999) return false;
  const ones = n % 10;
  const tens = Math.trunc((n % 100) / 10);
  const hundreds = Math.trunc(n / 100);
  if (tens === 0 && hundreds === 0) return true;
  if (tens === ones && hundreds === 0) return true;
  if (hundreds === ones) return true;
  return false;
}
