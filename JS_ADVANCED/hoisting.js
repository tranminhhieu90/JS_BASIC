// I - KHÁI NIỆM
// -  Javascript sẽ di chuyển các khai báo biến và hàm lên đầu của đoạn mã,
  // giúp cho chương trình không bị lỗi khi sử dụng biến hoặc hàm trước khi khai báo.
// -  Trong Javascript, bạn có thể định nghĩa một biến sau khi sử dụng nhờ tính năng hoisting.
// -  Javascript sẽ di chuyển toàn bộ các khai báo biến lên đầu chương trình.
//  Vì vậy, những dòng code có sử dụng biến mà chưa khai báo sẽ không bị lỗi.

// Gán nhưng chưa khai báo biến
domain = 'freetuts.net';
// Kết quả: Domain là freetuts.net
document.write("Domain là: " + domain);
// Khai báo
var domain;
// Kết quả: Domain là freetuts.net
document.write("<br/> Domain là: " + domain);


// -  Nếu trong lúc khởi tạo mà bạn gán giá trị cho biến thì kết quả sẽ khác
// Gán nhưng chưa khai báo biến
domain = 'freetuts.net';
// Kêt quả: Domain là freetuts.net
document.write("Domain là: " + domain);
// Khai báo
var domain = 'techtuts.net';
// kêt quả: Domain là techtuts.net
document.write("<br/> Domain là: " + domain);


// -  Nếu khai báo biến trước khi sử dụng thì ta vẫn có kết quả giống nhau.
// Khai báo
var domain;
// Gán nhưng chưa khai báo biến
domain = 'freetuts.net';
// Kết quả: Domain là freetuts.net
document.write("Domain là: " + domain);
// Kết quả: Domain là freetuts.net
document.write("<br/> Domain là: " + domain);

// II - LET , VAR, CONST VỚI HOISTING.
// -  Sử dụng var: Nếu biến chưa gán giá trị thì sẽ trả về undefined.
console.log(counter); // undefined
var counter = 1;
// - Đoạn mã trên sẽ tương đương với đoạn mã dưới đây.
var counter;
console.log(counter); // undefined
counter = 1;

// -   Sử dụng let: Nếu biến chưa gán giá trị thì sẽ xuất hiện thông báo lỗi Cannot access before initialization.
console.log(counter);
let counter = 1;
// "ReferenceError: Cannot access 'counter' before initialization

// III -  HÀM HOISTING
// -  JavaScript cũng lưu trữ các khai báo hàm. Nó sẽ di chuyển các khai báo hàm lên đầu của chương trình.
let x = 20,
    y = 10;
let result = add(x,y);
console.log(result);
function add(a, b){
    return a + b;
}
// -  Trong ví dụ đã sử dụng hàm add rồi mới khai báo sau. 
// Tuy nhiên, javascript vẫn không trả về một lỗi nào cả.
// Lý do là cơ chế hoisting của javascript đã di chuyển các khai báo hàm lên đầu rồi mới thực thi chương trình.
// -  Có nghĩa là đoạn code dưới đây sẽ tương đương:
function add(a, b){
    return a + b;
}
let x = 20,
    y = 10;
let result = add(x,y);
console.log(result);

// IV - Hoisting trong function expressions.
// -  function expressions. Nó là một hàm được khai báo bằng cách gán vào một biến.
var add = function(x, y) {
    return x + y;
}
// -  nếu ta sử dụng một function expressions trước rồi mới khai báo sau
let x = 20,
    y = 10;
let result = add(x,y);
console.log(result);
var add = function(x, y) {
    return x + y;
}
// lỗi add is not a function
// -  Javascript sẽ xem biết add là một biến thông thường,
//  nên khi nó đưa lên đầu thì sẽ là một biến chứ không phải là một hàm.
// Vì vậy, khi sử dụng sẽ xuất hiện lỗi add is not a function.

// V - Hoisting với arrow function
var function_name = () => bieuthuc;
// nếu bạn sử dụng arrow function trước rồi mới khai báo
//  thì sẽ bị lỗi function_name không phải là một hàm.


// -------------------------------
// VD1: HOISTING VỚI VAR VÀ FUNCTION DECLARATION
console.log(age) //undefined
console.log(fullName) //Error fullNAme is not defined
var age = 16;

// VD2: HOISTING VỚI VAR VÀ FUNCTION DECLARATION
console.log(sum(6,9)) //15
function sum(a, b) {
  return a + b
}

// VD3: HOISTING VỚI LET VÀ CONST
{
  console.log(fullName) //Error cannot access 'fullname before initialization
  let fullName = 'hieu tran'
}
// Khi khai báo biến với let và const khi đc hoisted không được tạo giá trị 
// và đưa vào "Temporal Dead zone" (vùng tạm thời không sử dingj được)

//VD4: Bài Tập.

const counter1 = makeCounter();
console.log(counter1());

function makeCounter() {
  let counter = 0
  return increase;

  function increase() {
    return ++counter
  }
}