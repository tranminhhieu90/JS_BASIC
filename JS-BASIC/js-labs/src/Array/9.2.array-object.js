// Giới thiệu Array object
// Static methods
// # Name Desc
// 1 Array.isArray(arr) Kiểm tra arr có phải là mảng không?
// 2 Array.from() Tạo mảng mới từ các dữ liệu khác như Set, Iterable, ...

// Instance props
const numberList = [1, 2, 3];
numberList.length; // 3
// Instance methods
// Nhóm hàm kiểm tra phần tử có tồn tại không?
// # Name Desc
// 1 every(callbackFn) Kiểm tra tất cả phần tử thoả điều kiện
// 2 some(callbackFn) Kiểm tra có một phần tử thoả điều kiện
// 3 indexOf(searchElement) Tìm vị trí đầu tiên của phần tử searchElement
// 4 lastIndexOf(searchElement) Tìm vị trí cuối cùng của phần tử searchElement
// 5 includes(searchElement) Kiểm tra có chứa phần tử searchElement không
// 6 find(callbackFn) Tìm phần tử đầu tiên thoả điều kiện
// 7 findIndex(callbackFn) Tìm vị trí của phần tử đầu tiên thoả điều kiện

// Nhóm hàm thêm xoá phần tử
// # Name Desc
// 1 push(element0, ..., elementN) Thêm cuối mảng
// 2 pop() Xoá cuối mảng
// 3 shift() Xoá đầu mảng
// 4 unshift(element0, ..., elementN) Thêm đầu mảng
// 5 splice(start, deleteCount, item1, ..., itemN) Xoá/thêm giữa mảng
// Javascript cho người mới bắt đầu 2021 🎉 © 2021 Easy Frontend
// 2 / 3
// Nhóm hàm hay sử dụng
// # Name Desc
// 1 forEach(callbackFn) Duyệt mảng
// 2 map(callbackFn) Biến đổi mảng
// 3 filter(callbackFn) Lọc mảng theo điều kiện
// 4 slice(start, end) Lấy mảng con
// 5 reduce() Duyệt mảng và tính toán cho ra kết quả cuối cùng
// Và một số hàm khác
// # Name Desc
// 1 fill(value, start = 0, end = arr.length) Fill value từ start tới end
// 2 join() Biến đổi mảng thành chuỗi
// 3 concat() Nối mảng
// 4 reverse() Ðảo ngược mảng
// 5 sort() Sắp xếp mảng
// Javascript cho người mới bắt đầu 2021 🎉 © 2021 Easy Frontend
// 3 / 3
Array.isArray(123); // false
Array.isArray('Easy Frontend'); // false
Array.isArray(true); // false
Array.isArray([]); // true
Array.isArray([1, 2, 3]); // true
[null, undefined].fill(false); // [false, false]
Array(5).fill(1); // [1, 1, 1, 1, 1]
['easy', 'frontend'].join('-'); // 'easy-frontend'
[1, 2, 3].reserve(); // [3, 2, 1]
