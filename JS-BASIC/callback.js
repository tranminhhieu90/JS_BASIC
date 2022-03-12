// I - Callback: là 1 hàm được truyền qua đối số và được gọi lại trong hàm truyền đối số/
function myCallBack(major) {
  // setTimeout(() => {
    console.log(`Bắt đầu học: ${major}`);
  // }, 3000);
}

function myFunction(callback) {
  if (typeof callback === "function") {
    callback("English");
    console.log("Đã học xong");
  }
}

myFunction(myCallBack);


// Nếu hàm callback xử lý các side effect mất nhiều thời gian
//  và được gọi trong 1 hàm khác thì vẫn không giải quyết được bài toàn chạy tuần tự.

// II - Ví dụ viết base hàm map bằng CallBack

// Array.prototype.map2 = function (callBack) {
//   // console.log("this", this); this chính là thằng gọi đến phương thức
//   var output = [],
//     arrLength = this.length;
//   for (var i = 0; i < arrLength; i++) {
//     const result = callBack(this[i], i);
//     output.push(result);
//   }
//   return output.join("");
// };

// var courses = ["js", "php", "ruby"];
// const htmls = courses.map2(function (course, index) {
//   return `<h2>${course}</h2>`;
// });

// console.log(htmls);
