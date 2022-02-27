// Viet ham de tao ra mag gom cac so nam trong khoang [a, b];
// a b thoa dieu kien -100 < a < b < 100;
// VD: createArrayInRangeV1(1, 5) ===> [1,2,3,4,5]
// VD: createArrayInRangeV1(-2, 1) ===> [-2,-1,0,1]
// using for...i
function createArrayInRangeV1(a, b) {
  // your code here
  if (a < -100 || b > 100) return -1;
  if (a > b) return -1;
  const arr = [];
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr;
}

// using Array.from()
function createArrayInRangeV2(a, b) {
  // your code here
  if (a < -100 || b > 100) return -1;
  if (a > b) return -1;
  return Array.from({ length: b - a + 1 }, (v, i) => a + i);
}
