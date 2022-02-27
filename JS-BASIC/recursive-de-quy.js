// Đệ quy là gì ?là một hàm gọi lại chính nó
// 1. Xác định điểm dừng.
// 2. Logoc handle => Tạo điểm dừng
function deQuy(num) {
  if (num < 0) {
    return;
  }
  deQuy()
}

deQuy(10)

// 3. Ví dụ
function countDown(num) {
  if (num > 0) {
    return countDown(num -1)
  }
  return num;
}

countDown(3);

function loop(start, end, callback) {
  if (start < end) {
    callback(start)
    return loop(start + 1, end. callback)
  }
}

var arr = ['JS, "PHP, "Ruby']
loop(0, arr.length, function (index) {
  console.log([arr[index]])
})
// 4. Giai thừa

function giaiThua(number) {
  var output = 1;
  for (var i = number; i > 0; i--){
    output = output * i
  }
  return output;
}
console.log((giaiThua(6)))


function giaiThua(number) {
  if (number > 0) {
    return number * giaiThua(number -1)
  }
  return 1;
}
console.log((giaiThua(6)))