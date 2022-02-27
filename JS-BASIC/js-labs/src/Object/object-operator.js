// Property value shorthand
const name = 'Easy Frontend';
const age = 18;
const student = {
  name: name, // key and value variable have the same name
  age: age, // key and value variable have the same name
};
// shorthand (recommended)
const student = {
  name,
  age,
};

// Object destructuring
const student = {
  name: 'Easy Frontend',
  age: 18,
};
// old way
const name = student.name;
const age = student.age;
// new way usign object destructuring
const { name, age } = student; // recommended

// Kiểm tra key có trong object không?
// Dùng in operator để kiểm tra một key có tồn tại trong object không.
const student = {
  name: 'Easy Frontend',
  age: 18,
};
'name' in student; // true
'age' in student; // true
'isHero' in student; // false

// Clone object
const student = {
  name: 'Easy Frontend',
  age: 18,
};
const moreProps = {
  isHero: true,
  gender: 'male',
};
// v1: using Object.assign()
const clonedStudent = Object.assign({}, student, moreProps);
// v2: using spread operator (shorter, easier to read)
const clonedStudent2 = {
  ...student,
  ...moreProps,
};

// Deep clone object
const student = {
  name: 'Easy Frontend',
  age: 18,
  mark: {
    math: 10,
    english: 7,
  },
};
const clonedStudent = {
  ...student,
};
clonedStudent.mark.math = 1;
console.log(student.mark.math); // 1  haha
// solution, clone nested levels if any
const clonedStudent = {
  ...student,
  mark: {
    ...student.mark,
  },
};
clonedStudent.mark.math = 1;
console.log(student.mark.math); // 10 works now

// https://github.com/immerjs/immer
