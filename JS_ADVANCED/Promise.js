I.Khái niệm cần nắm rõ:
JS là ngôn ngữ đồng bộ, nhưng lại có các thao tác động bộ. 
JS là single Thread, (chạy đơn luồng). code chạy từ trên xuống.

1. Sync là gì: Xử lý đồng bộ, chạy theo từng bước, KHi nào bước 1 thực hiện xong thì mới bắt đầu thực hiện bước 2.
Hay hiểu cách khác là các đoạn code sẽ chạy tuần tự từ trên xuống dưới, từ trái qua phải.
Điều này sẽ sinh ra 1 trạng thái gọi là trạng thái chờ.
  
- Async là gì: Xử lý bất đồng bộ, tức là chương trình có thể bỏ qua 1 bước nào đó.
Dẫn đến quy trình hoạt động có thể không chặt chẽ và quản lý sẽ khó khăn.
Các  async thường gặp như là :setTimeout; setInterval; fetch; file reading => không thể xác định khi nào hoàn thành
2. Dùng callback để xử lý các thao tác bất động bộ đó.
Callback: là 1 hàm được truyền qua đối số và được gọi lại trong hàm truyền đối số.

function myFunction(callback) {
  if (typeof callback === "function") {
    callback("English");
    console.log("Đã học xong");
  }
}
function myCallBack(major) {
  console.log(`Bắt đầu học: ${major}`);
}
3. Nếu trong hàm callback lại có các thao tác bất đồng bộ và được gọi trong hàm khác thì 
vẫn không giải quyết được bài toán chạy tuần tự

function myFunction(callback) {
  if (typeof callback === "function") {
    callback("English");
    console.log("Đã học xong");
  }
}
function myCallBack(major) {
   setTimeout(() => {
  console.log(`Bắt đầu học: ${major}`);
  }, 3000);
}

II - Khái niệm promise:
1. Callback hell: các đoạn code viết phụ thuộc và lồng nhau,
 do các hàm tiếp theo phải chờ kết quả từ hàm trước trả về;
setTimeout(function (){
  console.log('1');
  setTimeout(function (){
    console.log('2');
    setTimeout(function (){
      console.log('3');
      setTimeout(function (){
        console.log('4');
      }, 1000) 
    }, 1000) 
  }, 1000)  
}, 1000)
2. Cách tạo ra 1 promise: 
Là một khái niệm được sinh ra để giải quyết các thao tác bất đồng bộ.
Để tạo ra 1 đối tượng promise chúng ta sẽ dùng từ khoá new Promise.
Trong contructor sẽ nhận vào 1 hàm và trong hàm sẽ nhận vào 2 tham số đều là hàm đó là:
resolve và reject 
var promise = new Promise(
   //Excutor
  function (resolve, reject) {
    //Logic
    // Thanh cong : resolve ()
    // That bai: reject ()
    resolve([
      {
      id: 1,
      name: "JS",
      },
    ]);
    reject("co loi");
  });

Khi sử dụng đối tượng promise này sẽ trả về 3 phương thức, then, catch, finally, và mỗi
phương thức này đều nhận vào 1 callback

promise.then(function (courses) {
    // thực thi khi resolve được gọi
    console.log("successfully", courses);
  })
  .catch(function (error) {
    // thực thi khi reject được gọi
    console.log("error", error);
  })
  .finally(function () {
    // thực thi khi reject or resolve được gọi
    console.log("done");
  });

3. Promise chain:
- Khi promise nếu trả về resolve thì chúng ta có thể sử dụng nhiều phương thức then => gọi là promise chain.
kết quả return của hàm then đằng trước sẽ là tham số đầu vào cho hàm then phía sau. Nếu ko return thì sẽ trả về undefined.
- Nếu hàm then trước ko return về 1 promise nó sẽ chạy ngay đoạn code của hàm then tiếp theo.
 CÒn nếu trả về 1 promise thì hàm then tiếp theo phải chờ code của promise của hàm then trước đó rồi mới chạy.
- Trong chuỗi then liên tiếp nhau nếu như có 1 hàm then  bị lỗi thì sẽ chạy luôn vào catch và bỏ qua các hàm then còn lại.
  
- Nếu 1 promise trả về cả resolve và reject thì nó sẽ chỉ chạy then và không chạy vào catch.

  promise
  .then(function () {
    return 1;
  })
  .then(function (data) {
    console.log(data)
    return 1;
  })

-------------------
  promise
  .then(function () {
    return new Promise((resolve) => {
          setTimeout(resolve(100), 1000);
    });
  })
  .then(function (data) {
    console.log(data)
    return 1;
  })
---------------------
  function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  }
  sleep(1000)
    .then(function () {
      console.log(1);
      return sleep(1000);
    })
    .then(function () {
      console.log(2);
      // return sleep(1000);
      return new Promise(function(resolve, reject) {
        reject('Coloi')
      })
    })


4. Promise resolve, reject, all. 
Có thể tạo nhanh 1 promise  
new promise = new Promise.resolve()
new promise = new Promise.reject()

- promise.all: chạy song song các các logic bất đồng bộ không phụ thuộc vào nhau.
cần kết quả cảu 2 promise trả về để làm gì đó.
Nhận đối số là 1 mảng các promise => trả về 1 promise.
=> trả về kết quả là 1 mảng kết quả trong hàm then ()
Nhưng nếu có 1 promise bị lỗi thì tất cả những promise còn lại sẽ bị lỗi và chạy luôn vào catch