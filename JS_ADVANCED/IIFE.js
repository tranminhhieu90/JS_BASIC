// IIFE  - Immediately Invoked Function Expresstion
// làm một function expresstion được gọi ngay lập tức
// Self-Invoking Function

// 1. ví dụ
(function () {
  console.log("Now")  
})()

(function (message) {
  console.log("Message: ",message )  
})("Chào ban")

// 2. Phải sử dụng dấu; trước IIFE
let name = "hieu"
;(function () {
  console.log("Now")  
})()
// => xảy ra lỗi is not a function.

// 3. IIFE là hàm privite
;(function myFunc() {
  console.log("Now")  
})()

myFunc() // myFunction is not defined

// 4. Sử dụng khi với những đoạn mã chạy ngay lập tức, không tạo ra những phạm vi mới và 
// những đoạn code chỉ chạy bên trong

// 5. ví dụ

const app = (function () {
  const cars = [];
  return {
    add(car) {
      cars.push(car)
    },
    edit(index, car) {
      car[index] =car 
    },
    delete(index) {
      car.splice(index, 1)
    }
  }
})