// Duyệt mảng và tính toán với hàm reduce()
// Dùng hàm reduce() khi có nhu cầu duyệt qua từng phần tử và tính toán ra một kết quả cuối cùng.
const numberList = [2, 4, 6];
let sum = 0;
for (let i = 0; i < numberList.length; i++) {
  sum += numberList[i];
}
console.log(sum); // 12
// the same with above but using reduce()
numberList.reduce((sum, number) => sum + number); // 12 �

// reduce(arr, callbackFn, initialValue)
// rules:
// - arr should be an array and callbackFn should be a function
// - arr.length = 0 and initialValue === undefined --> throw error
// - arr.length = 0 and initialValue !== undefined --> return initialValue
function reduce(arr, callbackFn, initialValue) {
  if (!Array.isArray(arr) || typeof callbackFn !== 'function') {
    throw new Error('Invalid parameters');
  }
  // arr is an array
  if (arr.length === 0) {
    if (initialValue === undefined) {
      throw new Error('Should have initialValue when arr is empty');
    }
    return initialValue;
  }
  const hasInitialValue = initialValue !== undefined;
  const startIndex = hasInitialValue ? 0 : 1;
  let accumulator = hasInitialValue ? initialValue : arr[0];
  for (let i = startIndex; i < arr.length; i++) {
    accumulator = callbackFn(accumulator, arr[i], i);
  }
  return accumulator;
}

function calcSum(prevSum, number) {
  return prevSum + number;
}
reduce([2, 4, 6], calcSum, 0);
reduce(
  [2, 4, 6],
  function (prevSum, number) {
    return prevSum + number;
  },
  0
);
reduce(
  [2, 4, 6],
  (prevSum, number) => {
    return prevSum + number;
  },
  0
);
const result = reduce([2, 4, 6], (prevSum, number) => prevSum + number, 0);
console.log(result);
