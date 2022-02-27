const student = {
  id: 1,
  name: 'Van A',
  name: 'Van B', // same key come later will take precedence
  isHero: true,
  'key has space': 'super', // key with spaces should be wrapped in quotes
  sayHi() {
    console.log('Hello!');
  },
};


// Lấy value của key
// Dùng dot operator để truy cập key của object
// Dùng square brackets để truy cập dynamic key của object, kể cả key có space.
const student = {
 id: 1,
 name: 'Van A',
 isHero: true,
 'avg mark': 9,
}
console.log(student.name);
console.log(student.avg mark); // Syntax Error
console.log(student['avg mark']); // 9
const key = 'avg mark';
console.log(student.key); // undef
console.log(student[key]); // 9