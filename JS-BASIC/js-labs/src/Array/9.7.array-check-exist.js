// Kiểm tra sự tồn tại của phần tử
// Nhóm hàm kiểm tra phần tử có tồn tại không?
// # Name Desc
// 1 every(callbackFn) Kiểm tra tất cả phần tử thoả điều kiện
// 2 some(callbackFn) Kiểm tra có một phần tử thoả điều kiện
// 3 indexOf(searchElement) Tìm vị trí đầu tiên của phần tử searchElement
// 4 lastIndexOf(searchElement) Tìm vị trí cuối cùng của phần tử searchElement
// 5 includes(searchElement) Kiểm tra có chứa phần tử searchElement không
// check if all numbers is even
[1, 2, 4].every((x) => x % 2 === 0); // false
[2, 4, 6].every((x) => x % 2 === 0); // true
// check if exist one number is even
[1, 2, 4].some((x) => x % 2 === 0); // true
[1, 3, 5].some((x) => x % 2 === 0); // false
[1, 1, 1].indexOf(1); // 0
[1, 1, 1].lastIndexOf(1); // 2
['easy', 'frontend', 'easy'].indexOf('easy'); // 0
['easy', 'frontend', 'easy'].lastIndexOf('easy'); // 2
['easy', 'frontend', 'easy'].includes('easy'); // true
['frontend'].includes('easy'); // false
// every v1
function checkIfAllEven(numberList) {
  if (!Array.isArray(numberList)) return false;
  let isValid = true;
  for (let i = 0; i < numberList.length; i++) {
    const number = numberList[i];
    if (number % 2 !== 0) {
      isValid = false;
      break;
    }
  }
  return isValid;
}
console.log(checkIfAllEven([2, 1, 3]));
console.log(checkIfAllEven([2, 4, 6]));
// every v2
function checkIfAllEven(numberList) {
  if (!Array.isArray(numberList)) return false;
  for (let i = 0; i < numberList.length; i++) {
    if (numberList[i] % 2 !== 0) return false;
  }
  return true;
}
console.log(checkIfAllEven([2, 1, 3]));
console.log(checkIfAllEven([2, 4, 6]));
