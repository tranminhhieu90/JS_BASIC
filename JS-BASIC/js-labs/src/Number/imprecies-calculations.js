0.3 === 0.1 + 0.2; // true or false ???
console.log((0.1).toFixed(20));
console.log((0.2).toFixed(20));
console.log((0.1 + 0.2).toFixed(20));
console.log((0.3).toFixed(20));
console.log(0.1 + 0.2 == 0.3);
console.log(0.1 + 0.2 === 0.3);
console.log(Math.abs(0.1 + 0.2 - 0.3) < Number.EPSILON);
console.log((0.1 + 0.2).toFixed(1) === (0.3).toFixed(1));
// Lưu ý:
// Không phải số nào cũng được lưu chính xác trong Javascript (thực ra việc này cũng xảy ra ở những
// ngôn ngữ khác do dùng chung chuẩn lưu dữ liệu)
// Khi làm việc với số thực cần lưu về vấn đề này để xử lý cho đúng.
// So sánh so thực bằng nhau thì dùng hằng số EPSILON hoặc toFixed() để làm tròn số trước khi so
// sánh nhé.
