// Tìm kiếm phần tử
// Nhóm hàm kiểm tra phần tử có tồn tại không?
// # Name Desc
// 1 find(callbackFn) Tìm phần tử đầu tiên thoả điều kiện
// 2 findIndex(callbackFn) Tìm vị trí của phần tử đầu tiên thoả điều kiện
[2, 1, 3].find((x) => x % 2 === 0); // 2
[2, 1, 3].findIndex((x) => x % 2 === 0); // 0
['easy', 'frontend'].find((x) => x.length > 4); // 'frontend'
['easy', 'frontend'].findIndex((x) => x.length > 4);
1;
// Tham khảo: https://developer.mozilla.org/enUS/docs/Web/JavaScript/Reference/Global_Objects/Array/find
// Callback là gì?
// A callback function is a function passed into another function as an argument, which is then invoked
// inside the outer function to complete some kind of routine or action.
// Tạm dịch nôm na, callback là tham số của hàm có kiểu dữ liệu là hàm 🤣 .
function main(callbackFn) {
  // processing ...
  // do another stuff
  callbackFn();
}
function callback() {
  console.log('call me when needed');
}
main(callback);
function main(onFinish) {
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    sum += i;
  }
  onFinish(sum);
}
function handleOnFinish(sum) {
  console.log('Sum is:', sum);
}
main(handleOnFinish);
