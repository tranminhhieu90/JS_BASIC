// Khai báo biến dùng let và const
// I- toán tử gắn

let idx = 1;
const incrementPrefix = ++idx; //2 cộng trước rồi gắn sau

const incrementSuffix = idx++; // 1  gắn rồi mới cộng

const number = +'2'; //convert to number

// không nên dùng nested ternary

// II - Function
// 1. function declaration
function sayHello(name) {
  console.log('Well come', name);
}
// return  kết quả trả về của hàm
// // Quy tắc khi dùng hàm
// đặt tên là động từ
// hàm chỉ nên làm 1 nhiệm vụ
// nên dưới 30 dòng code
// return kiểu dữ liệu đồng nhất
// comment nếu logic phức tạp
// nên tối da truyền 3 tham số
