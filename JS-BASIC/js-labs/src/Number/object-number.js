// Number - A primitive wrapper object
// Use Number as a function
// When used as a function, Number(value) converts a string or other value to the Number type. If the
// value can't be converted, it returns NaN.
Number(123); // 123
Number('123'); // 123
Number('abc'); // NaN
// Static properties
// # Prop Value Desc
// 1 Number.EPSILON 2.220446049250313e-16 Ðộ chênh lệch nhỏ nhất giữa 2 số
// 2 Number.MIN_VALUE 5e-324 Số dương nhỏ nhất (gần tới số 0)
// 3 Number.MAX_VALUE 1.7976931348623157e+308 Số dương lớn nhất
// 4 Number.MIN_SAFE_INTEGER -9007199254740991 2^53 - 1
// 5 Number.MAX_SAFE_INTEGER 9007199254740991 2^53 - 1
// 6 Number.NaN NaN Not a Number
// 7 Number.NEGATIVE_INFINITY -Infinity Âm vô cùng
// 8 Number.POSITIVE_INFINITY Infinity Dương vô cùng

// Convert to numbers (parseInt and parseFloat)
Number('123'); // 123
Number.parseInt('1.5'); // 1
Number.parseFloat('1.5'); // 1.5
Number('123.5a'); // NaN
Number.parseInt('123.5a'); // 123
Number.parseFloat('123.5a'); // 123.5
Number(null); // 0
Number(undefined); //NaN
Number(true); // 1
Number(false); // 0
Number([]); //0
Number([4, 5]); //NaN
Number([5]); //5

// Phân biệt toFixed() và toPrecision()
// toFixed() và toPrecision() đều chuyển từ number thành string
// toFixed(digits) thì cố định số lượng digits sau dấu chấm.
// toPrecision(digits) thì làm tròn tới digits số có nghĩa.
const n = 123.525;
n.toFixed(); // 124 as default value for arg is 0
n.toFixed(0); // 124
n.toFixed(1); // 123.5
n.toFixed(2); // 123.53
n.toFixed(3); // 123.525
n.toFixed(4); // 123.5250
n.toFixed(5); // 123.52500
const n = 123.525;
n.toPrecision(); // 123.525 similar to n.toString()
n.toString(); // 123.525
n.toPrecision(0); // error argument must be between 1 and 100
n.toPrecision(1); // 100
n.toPrecision(2); // 120
n.toPrecision(3); // 124
n.toPrecision(4); // 123.5
n.toPrecision(5); // 123.53
n.toPrecision(6); // 123.525
n.toPrecision(7); // 123.5250
n.toPrecision(8); // 123.52500
