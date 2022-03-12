// I - Promise
// 1. Sync
// code chạy tuần tự từ trên xuống dưới, thằng nào viết trước chạy trước;
// console.log("1");
// console.log("2");

// 2. Async
// setTimeout; setInterval; fetch; file reading;

// 3. Paint, callback hell,
// setTimeout(function () {
//   console.log(1);
//   setTimeout(function () {
//     console.log(2);
//     setTimeout(function () {
//       console.log(3);
//     });
//   });
// });

// 4. Cách tạo ra 1 Promise
// - B1 khởi tạo 1 đối tượng promise
// - B2 tạo ra 1 executer
// var promise = new Promise(function (resolve, reject) {
//   resolve([
//     {
//       id: 1,
//       name: "JS",
//     },
//   ]);
//   reject("co loi");
// });
// B3 sử dụng đối tượng promise và đối tượng này sẽ trả về 3 phương thức và đều nhận vào 1 callback
// promise
//   .then(function (courses) {
//     // thực thi khi resolve được gọi
//     console.log("successfully", courses);
//   })
//   .catch(function (error) {
//     // thực thi khi reject được gọi
//     console.log("error", error);
//   })
//   .finally(function () {
//     // thực thi khi reject or resolve được gọi
//     console.log("done");
//   });

// B4 trả lời về promise
// - Là 1 khái niệm sinh ra để xử lý những thao tác bất đồng bộ,
//  trước khi có promise thì chúng ta có thể sử dụng callback => sinh ra callback hell
// - Để tạo ra 1 promise chúng ta sử dụng từ khoá new Promise trong contructor sẽ truyền vào 1 function
// trong function sẽ nhận vào 2 hàm resolve và reject.
// - Để sử dụng 1 promise chúng ta sử dụng qua những phương thức .then() và catch()
// và cả 2 đều nhận vào 1 callback function

// 5. Promise chain
// var promise = new Promise(
//   // Executer
//   function (resolve, reject) {
//     // logic;
//     resolve([
//       {
//         id: 1,
//         name: "JS",
//       },
//     ]);
//     // reject("co loi");
//   }
// );

// promise
//   .then(function (courses) {
//     // thực thi khi resolve được gọi
//     console.log("successfully", courses);
//     // return 1;

//     // TH return về 1 promise
//     return new Promise(function (resolve) {
//       setTimeout(() => resolve(1), 3000);
//     });
//   })
//   .then(function (data) {
//     // thực thi khi resolve được gọi
//     console.log(data);
//     return 2;
//   })
//   .catch(function (error) {
//     // thực thi khi reject được gọi
//     console.log("error", error);
//   })
//   .finally(function () {
//     // thực thi khi reject or resolve được gọi
//     console.log("done");
//   });

// 6. Ví dụ
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
  .then(function () {
    console.log(3);
    return sleep(1000);
  })
  .then(function () {
    console.log(4);
    return sleep(1000);
  }).catch(function(error){
    console.log(error)
  })

  // trong promise chain nếu TH có 1 promise trả về reject thì phải xử 
  // lý trong phương thức catch

  // 7. Promise.resolve, Promise.reject, Promise.all
  // TH1: Tạo ra 1 promise.resolve()

  // var promise = Promise.resolve('success');
  // promise.then(function(value){
  //   console.log('value',value)
  // }).catch(function(err){
  //   console.log('err',err)
  // })

  // đoạn mã trên sẽ ko bao giờ chạy vào catch trừ khi trong then có 1 promise trả về reject

  // 8. Promise.all
  // chạy song song các promise, khi cần kết quả của các promise mới làm được việc gì đó chung

  // var promise1 = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve([1])
  //   }, 2000)
  // })

  // var promise2 = new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve([2,3])
  //   }, 3000)
  // })

  // var promise3 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     reject('co loi')
  //   }, 3000)
  // })

  // Promise.all([promise1, promise2,promise3 ])
  // .then((result)=>{
  //   var result1 = result[0]
  //   var result2 = result[1]
  //   console.log([...result1, ...result2])
  // }).catch((err) => {
  //   console.log('err',err)
  // })

  // promise2.all có thể rút ngắn các thời gian chạy các promise nhưng nếu có 1 promise bị lỗi thì 
  // tất cả cả promise còn lại sẽ bị lỗi theo

  // II - VÍ DỤ

  const users = [
    {
      id: 1,
      name: "Hieu tran"
    },
    {
      id: 2,
      name: "Duy Pham"
    },
    {
      id: 3,
      name: "Do Nguyen"
    }
  ]

  const comments = [
    {
      id: 1,
      content: "Chua co khoa hoc Reactjs a",
      user_id: 1
    },
    {
      id: 2,
      content: "Chuan bi co anh nhe",
      user_id: 2
    },
    {
      id: 3,
      content: "OK tks em",
      user_id: 1
    }
  ]

  function getComment() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(comments)
      },2000)
    })
  }

  function getUserById(userIds) {
    return new Promise((resolve) => {
      var result  = users.filter(user => {
        return userIds.includes(user.id)
      })
      setTimeout(() => {
        resolve(result)
      },2000)
    })
  }

  getComment()
    .then((comments) => {
    var userIds = comments.map(comment => comment.user_id)
    return userIds
  })
    .then((userIds) => {
      return getUserById(userIds).then((users) => {
        return {
          users: users,
          comments: comments
        }
      })
  })
    .then((data) => {
    console.log('data',data)
  })