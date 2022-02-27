// String is immitable  / Nếu đã khởi tạo thì ko thể thay đổi
// ví dụ:
let name = 'Hieu';
//hieu[0] = h
// name = 'hieu
console.log(name); //Hieu

// Instance Methods
// # Name Desc
// 1 charAt(index) Lấy ký tự tại vị trí index
// 2 concat(str [, ...strN]) Nối chuỗi
// 3 includes(searchString [, position]) Có chứa chuỗi nào đó hk?
// 4 startsWith(searchString [, length]) Có bắt đầu với chuỗi searchString?
// 5 endsWith(searchString [, length]) Có kết thúc bằng chuỗi searchString?
// 6 indexOf(searchValue [, fromIndex]) Vị trí đầu tiên có searchValue
// 7 lastIndexOf(searchValue [, fromIndex]) Vị trí cuối cùng có searchValue
// 8 match(regexp) Liên quan tới regular expresion (tạm bỏ qua)
// 9 matchAll(regexp) Liên quan tới regular expresion (tạm bỏ qua)
// 10 padStart(targetLength [, padString]) Thêm vào đầu string
// 11 padEnd(targetLength [, padString]) Thêm vào cuối string
// 12 repeat(count) Nhân chuỗi hiện tại lên count lần
// 13 replace(searchFor, replaceWith) Thay thế chuỗi searchFor đầu tiên bằng replaceWith
// 14 replaceAll(searchFor, replaceWith) Thay thế tất cả chuỗi searchFor bằng replaceWith
// 15 slice(beginIndex [, endIndex]) Lấy chuỗi con
// 16 substring(indexStart [, indexEnd]) Lấy chuỗi con
// 17 split([sep [, limit]]) Tách chuỗi thành mảng các chuỗi con
// 18 trim() Bỏ khoảng trắng đầu + cuối string
// 19 trimStart() Bỏ khoảng trắng đầu string
// 20 trimEnd() Bỏ khoảng trắng cuối string
// 21 toLowerCase() Chuyển chuỗi thành chữ viết thường
// 22 toUpperCase() Chuyển chuỗi thành chữ viết hoa

// Thao tác cơ bản với string
// Cùng mình tìm hiểu một số thao tác cơ bản đối với kiểu dữ liệu string nhé 😉
// Lấy ký tự tại vị trị index
'Easy Frontend'.charAt(0); // E
'Easy Frontend'.charAt(3); // y
const name = 'Easy Frontend';
name.charAt(name.length - 1); // d (the last character)
'Easy Frontend'[0]; // E
'Easy Frontend'[3]; // y
const name = 'Easy Frontend';
name[name.length - 1]; // d (the last character)
// Nối chuỗi
const a = 'Easy';
const b = 'Frontend';
const c = a + ' ' + b; // 'Easy Frontend'
const d = a.concat(' ', b); // 'Easy Frontend'
const e = `${a} ${b}`; // 'Easy Frontend' (recommended)
// Duyệt chuỗi
const name = 'Easy Frontend';
for (let i = 0; i < name.length; i++) {
  console.log(name[i]);
}
// Mình sẽ nói nhiều hơn về mảng trong chương array nhé! 😜
// Chuyển đổi hoa thường
'Easy Frontend'.toLowerCase(); // easy frontend
'Easy Frontend'.toUpperCase(); // EASY FRONTEND

// Tìm kiếm chuỗi con
const name = 'Hello Po';
name.indexOf('o'); // 4
name.lastIndexOf('o'); // 7
// Kiểm tra chứa chuỗi con
const name = 'Easy and Frontend';
name.startsWith('easy'); // false
name.startsWith('Easy'); // true
name.startsWith('and'); // false
name.includes('Easy'); // true
name.includes('and'); // true
name.includes('Frontend'); // true
name.endsWith('Frontend'); // true
name.endsWith('and'); // false
name.endsWith('frontend'); // false
// Tham khảo: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/String

// Làm việc với substring
// Sử dụng 1 trong 3 hàm đều được. Nhưng mà để đỡ rối, nhớ một hàm để sử dụng là slice thôi.
// substr thì theo MDN, nó được đánh dấu là deprecated.
// slice và substring sử dụng khá tương đồng
// slice thì hỗ trợ số âm. Số âm thì được đếm ngược từ cuối chuỗi.
// substring thì xem số âm là số 0
// substring cho phép start > end, trong khi slice thì không hỗ trợ.
// # Name Desc
// 1 slice(start, end) negative means count from end, start can't be greater than end
// 2 substring(start, end) negative means 0, start can be greater than end
// 3 substr deprecated as in MDN docs
// slice
'Easy Frontend'.slice(0, 4); // 'Easy'
'Easy Frontend'.slice(2); // 'sy Frontend'
'Easy Frontend'.slice(-3); // 'end'
'Easy Frontend'.slice(-3, -1); // 'en'
// substring
'Easy Frontend'.substring(0, 4); // 'Easy'
'Easy Frontend'.substring(2); // 'sy Frontend'
'Easy Frontend'.substring(-3); // 'Easy Frontend'
'Easy Frontend'.substring(-3, -1); // ''
// slice vs substring
'Easy Frontend'.slice(4, 0); // ''
'Easy Frontend'.substring(4, 0); // 'Easy'

// Tìm kiếm và thay thế chuỗi
// # Name Desc
// 1 replace(searchFor, replaceWith) Tìm kiếm và thay thế một searchFor bởi replaceWith
// 2 replaceAll(searchFor, replaceWith) Tìm kiếm và thay thế tất cả searchFor bởi replaceWith
// Lưu ý: tạm thời bỏ qua việc sử dụng với Regexp
'easy frontend'.replace(' ', '-'); // easy-frontend
'easy frontend'.replace(' ', ''); // easyfrontend
'easy frontend'.replace('easy', 'Easy'); // Easy frontend
'easy frontend'.replace('easy', ''); // ' frontend'
// replace the first match only
'easy easy frontend'.replace('easy', ''); // ' easy frontend'
'learn easy frontend'.replaceAll(' ', '-'); // 'learn-easy-frontend'
'learn easy frontend easy'.replaceAll('easy', ''); // 'learn frontend '
// replace with regexp (Regular Expression)
'super 123 cool'.replaceAll(/[0-9]/gi, '');

// Tìm hiểu về split and join
// string to array: split()
// array to string: join()
// split()
// Hàm dùng để phân tách chuỗi hiện tại thành một mảng các chuỗi con.
'easy'.split(); // ['easy']
'easy'.split(' '); // ['easy']
'easy'.split('-'); // ['easy']
'easy'.split('as'); // ['e', 'y']
'easy'.split(''); // ['e', 'a', 's', 'y']
// count words
const name = 'Easy Frontend';
const words = name.splits(' '); // ['Easy', 'Frontend']
console.log(words.length); // 2
// join(separator)
// Hàm dùng để gộp các items của một mảng thành một chuỗi.
const words = ['Easy', 'Frontend'];
words.join(); // 'Easy,Frontend' as default separator is comma
words.join(''); // 'EasyFrontend'
words.join(' '); // 'Easy Frontend'
words.join('-'); // 'Easy-Frontend'

// Write a function to transform a string:
// The first letter in UPPERCASE
// The rest in lowercase
// Eg: capitalize('easy FRontend') --> 'Easy frontend'
function capitalize(str) {
  if (str === '') return '';
  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();
  // return firstLetter.concat(rest);
  return `${firstLetter}${rest}`;
}

// Bài tập string - Check có chứa chuỗi con
// Check if a string contains an email address with @gmail.com or not.

function hasEmail(str) {
  return str.includes('@gmail.com');
  // return str.indexOf('@gmail.com') >= 0;
  // return str.lastIndexOf('@gmail.com') >= 0;
}
console.log(hasEmail('abc abc@gmail.com def'));
console.log(hasEmail('abc abc@gmail def'));

// Write a JavaScript function to parameterize a string.
// Eg: parameterize('Code JS Is Fun') --> 'code-js-is-fun'
function parameterize(str) {
  // return str.toLowerCase().replaceAll(' ', '-');
  return str.toLowerCase().split(' ').join('-');
}
console.log(parameterize('Code JS Is Fun'));

// Create a function truncate(text, maxlength) that checks the length of the text and, if it exceeds
// maxlength – replaces the end of str with the ellipsis character "…", to make its length equal to maxlength.
function truncate(text, maxLength) {
  if (text === '') return '';
  if (maxLength === 0 || text.length <= maxLength) return text;
  if (text.length > maxLength) return `${text.slice(0, maxLength - 1)}\u2026`;
}

function removeVowel(str) {
  // your code here
  let string = str;
  if (str === '') return '';
  if (str.includes('u')) str = str.replace('u', '');
  if (str.includes('e')) str = str.replace('e', '');
  if (str.includes('o')) str = str.replace('o', '');
  if (str.includes('a')) str = str.replace('a', '');
  if (str.includes('i')) str = str.replace('i', '');
  return str.trim();
}

//format number to 2 digits
function formatSecondsV1(seconds) {
  // your code here
  if (seconds < 0 || seconds > 60) return -1;
  return seconds.toString().padStart(2, '0');
}

// using slice()
function formatSecondsV2(seconds) {
  // your code here
  if (seconds < 0 || seconds > 60) return -1;
  return `0${seconds}`.slice(-2);
}

// using indexOf()
function isSecureUrlV1(url) {
  // your code here
  if (url === '') return -1;
  let isSecure = false;
  if (url.indexOf('https') > -1 || url.indexOf('wss') > -1) isSecure = true;
  return isSecure;
}

//check secure urls
// using startsWith()
function isSecureUrlV2(url) {
  if (url === '') return -1;
  let isSecure = false;
  if (url.startsWith('https') || url.startsWith('wss')) isSecure = true;
  return isSecure;
}

// rút trích domain from email
// extractDomainV1('hieu@gmail.com') ===> gmail.com
// extractDomainV1('hieu@abc.com') ===> abc.com
// using split
function extractDomainV1(email) {
  // your code here
  if (email === '') return '';
  return email.split('@')[1];
}

// using indexOf() and slice()
function extractDomainV2(email) {
  // your code here
  if (email === '') return '';
  return email.slice(email.indexOf('@') + 1);
}

// trả về fullName khi biết firstNAme and lastName
// getFullName('Alice') --> 'Alice'
// getFullName('Alice', '') --> 'Alice'
// getFullName('', 'Nguyen') --> 'Nguyen'
// getFullName('Bob', 'Tran') --> 'Bob Tran'
// getFullName('john', 'pHAm') --> 'John Pham'
function getFullName(firstName, lastName) {
  // your code here
  const newFirstName = capitalize(firstName);
  const newLastName = capitalize(lastName);
  return `${newFirstName} ${newLastName}`.trim();
}

function capitalize(str) {
  if (str === undefined || str === '') return '';
  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();
  return `${firstLetter}${rest}`;
}

// truy tim mat ma
// bỏ đi các chữ hoa trong string truyen vao
// findSecret('SUPERCODE') --> ''
// findSecret('SUPERhelloCODE') -> 'hello'

function findSecret(code) {
  // your code here
  if (code === '') return '';
  return code
    .split('')
    .filter((character) => character !== character.toUpperCase())
    .join('');
}

// conver seconds to "hh:mm:ss"
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
  // your code here
  if (seconds < 0 || seconds > 86400) return -1;
  const hours = Math.trunc(seconds / SECONDS_PER_HOUR)
    .toString()
    .padStart(2, '0');
  const minutes = Math.trunc((seconds % SECONDS_PER_HOUR) / SECONDS_PER_MIN)
    .toString()
    .padStart(2, '0');
  const second = Math.trunc((seconds % SECONDS_PER_MIN) % SECONDS_PER_MIN)
    .toString()
    .padStart(2, '0');
  return [hours, minutes, second].join(':');
}
