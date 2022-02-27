// Là kiểu dữ liệu nguyên thuỷ có giá trị true và false

// I - type conversion và type coercion
// Ðiểm tương đồng là đều chuyển đổi dữ liệu từ kiểu này sang kiểu khác.
// Type coersion là ép kiểu tự động (ép kiểu ngầm)
// Type conversion mang ý nghĩa là có thể là ép kiểu tự động như type coersion hoặc ép kiểu tường
// minh (explicit, tức do mình chỉ định nó ép kiểu 🤣 )
// Type coersion
const a = 1 + '2'; // '12' as it auto convert from number 1 to string '1'
// before doing the addition
const b = 1 - '2'; // -1 as it auto convert string '2' to number 2 before
// doing the substraction
const message = 'JS is easy';
if (message) {
  // message here will be converted into boolean automatically;
  console.log('Really!? 🤣 ');
}
// Explicit conversion
const error = 'Something wrong!';
const hasError = Boolean(error); // we ask to convert string error to boolean;
const mark = 9;
const markString = mark.toString(); // or String(mark)
const type = '1';
const typeId = Number.parseInt(type); // or Number(type)
