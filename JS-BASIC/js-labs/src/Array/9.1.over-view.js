// Khai báo mảng
// Ðặt tên nên dùng suffix là List. Eg: dùng numberList thay vì numbers
// Mỗi phần tử có thể có một kiểu dữ liệu khác nhau.
// khai báo mảng rỗng
const numberList = [];
const numberList = [1, 2, 3]; // a list of numbers
const wordList = ['Easy', 'Frontend']; // a list of strings
const flagList = [true, false, false]; // a list of boolean
// a list of students
const studentList = [
  { id: 1, name: 'Van A' },
  { id: 2, name: 'Thi B' },
  { id: 3, name: 'Van C' },
];

// a list of list
const board = [
  [1, 2],
  ['a', 'b', 'c'],
  [true, false, false, false],
];
// a list of mixed data type
const mixedList = [1, 2, 'word', true, null, undefined, { id: 1, name: 'Easy' }, [1, 2, 3]];

// Mảng 2 chiều
const board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
board[0]; // [1, 2, 3]
board[1]; // [4, 5, 6]
board[2]; // [7, 8, 9]
board[0][1]; // 2
board[1][2]; // 6
