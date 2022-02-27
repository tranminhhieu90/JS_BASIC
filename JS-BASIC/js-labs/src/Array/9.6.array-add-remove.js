// Thêm xoá phần tử
// Nhóm hàm thêm xoá phần tử
// # Name Desc
// 1 push(element0, ..., elementN) Thêm cuối mảng
// 2 pop() Xoá cuối mảng
// 3 shift() Xoá đầu mảng
// 4 unshift(element0, ..., elementN) Thêm đầu mảng
// 5 splice(start, deleteCount, item1, ..., itemN) Xoá/thêm giữa mảng
// Add new items at the end
const numberList = [1, 2, 3];
numberList.push(4, 5);
console.log(numberList); // [1, 2, 3, 4, 5]
// Remove items at the end
const numberList = [1, 2, 3];
const lastNumber = numberList.pop();
console.log(numberList, lastNumber); // [1, 2], 3
// Add new items at the beginning
const numberList = [1, 2, 3];
numberList.unshift(0);
console.log(numberList); // [0, 1, 2, 3]
// Add new items at the beginning
const numberList = [1, 2, 3];
const firstNumber = numberList.shift();
console.log(numberList, firstNumber); // [2, 3], 1
// Add/remove items at the middle of an array
const numberList = [3, 5, 7];
numberList.splice(0, 0, 2, 4);
console.log(numberList);
// Javascript cho người mới bắt đầu 2021 🎉 © 2021 Easy Frontend
2 / 2;
// 09-06-add-remove.js
const numberList = [1, 3, 5, 7]; // [1, 3, 2, 4, 7]
numberList.splice(2, 1, 2, 4);
console.log(numberList);
const numberList = [1, 3, 5, 7]; // [1, 3, 2, 4, 7]
numberList.splice(2, 0, 4, 4);
console.log(numberList);
const numberList = [1, 3, 5, 7];
numberList.pop();
numberList.pop();
console.log(numberList);
// [1, 2, 3]
// [1, 2, 3, empty]
// [0, 1, 2, 3]
