// Clone array
// Issue: Array cũng là tham chiếu, nên cẩn thận khi dùng phép gán.
const numberList = [1, 2, 3];
const anotherList = numberList;
anotherList[0] = 4; // anotherList = [4, 2, 3]
console.log(numberList); // [4, 2, 3]
// Solution: Clone array trước khi thực hiện thay đổi.
const numberList = [1, 2, 3];
const anotherList = [...numberList];
anotherList[0] = 4; // anotherList = [4, 2, 3]
console.log(numberList); // [1, 2, 3] 😍
