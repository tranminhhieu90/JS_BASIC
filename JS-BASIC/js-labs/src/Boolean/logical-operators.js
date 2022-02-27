// Có 3 logical operators cơ bản: AND, OR và NOT
// # Operator Desc
// 1 && AND
// 2 || OR
// 3 ! NOT
// 4 !! NOT NOT

// AND table
// RULE: ONLY TRUE IF BOTH TRUE
// # A B A && B
// 1 TRUE TRUE TRUE
// 2 TRUE FALSE FALSE
// 3 FALSE TRUE FALSE
// 4 FALSE FALSE FALSE
// OR table
// RULE: ONLY FALSE IF BOTH FALSE
// # A B A || B
// 1 TRUE TRUE TRUE
// 2 TRUE FALSE TRUE
// 3 FALSE TRUE TRUE
// 4 FALSE FALSE FALSE
// NOT table
// Prefer to use Boolean(A) instead of !!A
// # A !A !!A
// 1 TRUE FALSE TRUE
// 2 FALSE TRUE FALSE

// !! dùng để chuyển đổi sang boolean

// Nếu là số dương thì ...
function checkNumber(n) {
  if (n > 0) {
  }
}

// Nếu là số dương chẳn thì ...
function checkNumber2(n) {
  if (n > 0 && n % 2 === 0) {
  }
}
// Nếu là số dương chẵn và lớn hơn 10 thì ...
function checkNumber3(n) {
  if (n > 0 && n > 10 && n % 2 === 0) {
  }
}
// Nếu là số dương chẵn chia hết cho 5 và lớn hơn 10 thì ...
function checkNumber4(n) {
  if (n > 0 && n > 10 && n % 2 === 0 && n % 5 === 0) {
  }
}
// Nếu là số dương chẳn hoặc số âm lẻ thì
function checkNumber4(n) {
  const isEvenPositive = n > 0 && n % 2 === 0;
  const iOddNegative = n < 0 && n % 2 !== 0;
  if (isEvenPositive || iOddNegative) {
  }
}

true > false; // true
true == true; // true
true == false; // false
true != false; // true

// So sánh khác kiểu dữ liệu
// Khi so sánh khác kiểu dữ liệu, js sẽ tự động convert giá trị về dạng number để so sánh.
// Nên để hiểu được phần này, bạn cần nắm được khi convert một giá trị nào đó về number thì nó sẽ thành giá
// trị bao nhiêu?
123 == '123'; // true because '1' will be converted to 1
123 == '0123'; // true because '01' will be converted to 1
false == 0; // true because false will be converted to 0
true == 1; // true because true will be converted to 1
'0' == false; // true
'2' > true; // true vì true thành 1
'123' >= 100; // ???
// Tham khảo: https://getify.github.io/coe

// Strict equality (=== and !==)
// Giữ nguyên giá trị (không tự động convert kiểu dữ liệu) và so sánh với nhau.
// Nếu khác kiểu dữ liệu, lập tức return false
// Nếu cùng kiểu dữ liệu, thì so sánh như cách thức đã đề cập ở phần so sánh cùng kiểu dữ liệu.
111 === '111'; // false because they are different data types
0 === false; // false
'' === 0; // false
1 === 1; // true
'abc' === 'abc'; //

// So sánh với null/undefined
// non-strict ==, null and undefined equal but not any other value.
null == undefined; // true
// strict check ===
null === undefined; // false because they are different type
// other comparisons
// null will converted to 0
// undefined will converted to NaN
null > 0; // false
null == 0; // false
null >= 0; // true WHAT???
