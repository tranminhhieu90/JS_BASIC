// Destructuring
// 1. Array
var arr = ["php", "ruby", "dart"];
var [a, b, c] = arr;
// var [a, , c] = arr;
// console.log(a, b, c);

// 2. object
var course = {
  name: "PHP",
  price: 1000,
  image: "cat.jng",
  child: {
    name: "reactjs",
  },
};

var { name, price, ...rest } = course;
// console.log(name, price, rest);

// Xoá 1 property in object
var { name, ...newObject } = course;
// console.log(newObject);

var {
  name: parentName,
  child: { name: childName },
  description = "default description",
} = course;
// console.log(parentName);
// console.log(childName);
// console.log(description);

// Rest
var [x, ...rest] = arr;
// console.log(x, rest);
function logger(...prams) {
  console.log(prams);
}
logger(1, 2, 3, 4, 5);
