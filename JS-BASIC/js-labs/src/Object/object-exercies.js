// . Create an object student with name is Easy Frontend and age is 18.

// v1
const student = {};
(student.name = 'Hieu'), (student.age = 18);

// v2
const student = {
  name: 'Hieu',
  age: 18,
};
// . Check if an object is empty (means have no keys)
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}
// . Get average mark of an object
// calcAvgMark({math: 10, english: 8}) ==> 9
function calcAvgMark(mark) {
  if (!mark) return -1;
  const length = Object.keys(mark).length;
  let sum = 0;
  for (const key in mark) {
    const value = mark[key];
    sum += value;
  }
  return (sum / length).toFixed(1);
}

console.log(calcAvgMark({ math: 10, english: 7 }));

// clone object don't use spread operator
function cloneObject(obj) {
  // your code here
  if (Object.keys(obj) === 0) return -1;
  const newObj = {};
  Object.assign(newObj, obj);
  return newObj;
}

// check 2 object isEqual
function isEqual(obj1, obj2) {
  // your code here
  if (!obj1 || !obj2) return -1;
  if (Object.keys(obj1).length === 0 && Object.keys(obj2).length === 0) return true;
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    let isEqual = false;
    for (let key in obj1) {
      if (obj1[key] === obj2[key]) {
        isEqual = true;
      } else {
        isEqual = false;
      }
    }
    return isEqual;
  }
}
