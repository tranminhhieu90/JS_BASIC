// Tham trị và tham chiếu
// # Name Data Type
// 1 Primitive Type / Value Type boolean, number, string, null, undefined, symbol
// 2 Reference Type object, array, function

// Phép gán với object
// primitive type
const a = 5;
let b = a;
b = 10;
console.log(a); // 5
// reference type
const student1 = { name: 'Easy Frontend' };
const student2 = student1;
student2.name = 'Hau Nguyen';
console.log(student1.name); // Hau Nguyen ???
// So sánh object
// Khi so sánh tham chiếu (object, array, function) thì địa chỉ tham chiếu sẽ được đem ra so sánh. Nếu
// cùng trỏ về một địa chỉ tham chiếu thì sẽ trả về true, còn lại là false.
const student1 = { name: 'Easy Frontend' };
const student2 = student1; // copy reference from student1 to student2
student1 === student2; // true as they both point to the same reference
const student1 = { name: 'Easy Frontend' }; // reference 1
const student2 = { name: 'Easy Frontend' }; // reference 2
student1 === student2; // false as they are different refs
// Trường hợp bạn cần so sánh 2 objects, có thể xem xét so sánh các key primitive types của 2 objects.

// Pass by value vs Pass by reference
function changePrimitive(name, age) {
  name = 'Easy Frontend';
  age = 18;
}
let name = 'Easy';
let age = 17;
changePrimitive(name, age);
console.log(name); // 'Easy'
console.log(age); // 17
function changeReference(student) {
  student.name = 'Easy Frontend';
  student.age = 18;
}
const student = {
  name: 'Easy',
  age: 17,
};
changeReference(student);
console.log(student.name); // 'Easy
