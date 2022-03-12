I - Async / await là 1 tính năng của JS giúp chúng ta làm việc với các đoạn code bất đồng bộ giống như các
  đoạn code đồng bộ.
Nó được xây dựng trên promise.

1. async là cách khai báo 1 hàm bất đồng bộ
async function someName() {}
tự động biến 1 hàm thông thường thành promise
Khi gọi tới hàm async nó sẽ xử lý mọi thứ và được trả về kết quả trong hàm của nó.
Async cho phép sử dụng Await.

2. Await - tạm dừng việc thực hiện các hàm async. (Var result = await someAsyncCall ().
Khi được đặt trước một Promise, nó sẽ đợi cho đến khi Promise kết thúc và trả về kết quả.
Await chỉ làm việc với Promises, nó không hoạt động với callbacks.
Await chỉ có thể được sử dụng bên trong các function async.


const executeAsync = async () => {
  await promise1;
  await promise2;
  await promise3;
}

xử lý lỗi trong async thì chúng ta sẽ dử dụng try catch.

3. sau khi khai báo hàm async chúng ta vẫn có thể sử dụng.then như bt. 
// cách 2:
    // Async/Await approach
    // The async keyword will automatically create a new Promise and return it.
    async function getJSONAsync() {
      // The await keyword saves us from having to write a .then() block.
      let json = await axios.get('https://tutorialzine.com/misc/files/example.json');
      // The result of the GET request is available in the json variable.
      // We return it just like in a regular synchronous function.
      return json;
    }
  
    getJSONAsync().then( function(result) {
      // Do something with result.
    });
  
4. Nhược điểm các promise trong async sẽ chạy tuần tự => điều này đôi khi sẽ làm hiệu năng không tố như
promise all