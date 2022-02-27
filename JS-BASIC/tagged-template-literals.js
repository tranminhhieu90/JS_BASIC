// Tagged template literals
function highLight([first, ...string], ...value) {
  console.log("value", value);
  console.log("first", first);
  console.log("string", string);

  return value
    .reduce(
      (acc, curr) => {
        console.log("accc", acc);
        console.log("curr", curr);
        return [...acc, `<span>${curr}</span>`, string.shift()];
      },
      [first]
    )
    .join("");
}

var branch = "F8";
var course = "Javascript";

const html = highLight`Học lập trình ${course} tại ${branch} !`;

// console.log("html");

// let string = "gicungduocmuonvietgithiviet";
// function spilitNguyenAm(string);
// // chia 2 mang 1 nguyen am, 1 phu am

//c1
// const nguyenAmArr = ["e", "u", "a", "o", "i"];
// const arr = [];
// const arr2 = [];
// string.split("").map((anpha) => {
//   if (nguyenAmArr.includes(anpha.toLocaleLowerCase())) {
//     arr.push(anpha);
//   } else {
//     arr2.push(anpha);
//   }
// });
// console.log(arr);
// console.log(arr2);

// c2
// const arr1 = string.split("").filter((al) => nguyenAmArr.includes(al));
// const arr2 = string.split("").filter((al) => !nguyenAmArr.includes(al));

// c3
// const arr1 = string.split("").reduce((int, current) => {
//   return nguyenAmArr.includes(current) ? [...int, current] : [...int];
// }, []);
// const arr2 = string
//   .split("")
//   .reduce(
//     (int, current) =>
//       !nguyenAmArr.includes(current) ? [...int, current] : [...int],
//     []
//   );
// console.log(arr1);
// console.log(arr2);
