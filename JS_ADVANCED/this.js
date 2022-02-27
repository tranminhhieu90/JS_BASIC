//this chỏ về đối tượng mà nó đang thuộc về.
// Trong 1 phương thức, this tham chiếu tới đối tượng truy cập phướng thức (đối tượng trước dấu .)
// Đứng ngoài phương thức, this tham chiếu tới đối tượng global (window)

// VD1
const iPhone7 = {
  //Thuộc tính - property
  name: 'iPhone 7',
  color: 'Pink',
  weight: 300,
  // PHương thức - Method
  takePhoto() {
    console.log('take photo', this) // this lúc này chính là đối tượng iphone 7
  },
  objChild: {
    name: 'objChild',
    methodChild() {
      console.log('child', this) // this lúc này chính là đối tượng objChild
    }
  }
}
console.log(iPhone7)
console.log(iPhone7.takePhoto())
console.log(iPhone7.objChild.methodChild())

// VD2: Hàm tạo
function Car(name, color, weight) {
  this.name = name,
  this.color = color,
  this.weight = weight,
  this.run = function () {
    console.log('Running...', this) // this đây chính là vinFast
  }
}
const vinFast = new Car('Fadil', 'black', 1200);
console.log(vinFast.run())

// VD3: this với DOM
const button = document.querySelector('button')
button.onclick() = function () {
  console.log(this) //this lúc này chính là obj button
}