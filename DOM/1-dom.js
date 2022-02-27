// I - HTML DOM
// 1. Dom viết tắt của Document Object Model theo tiêu chuẩn của W3c
// 2. HTML dom được xây dựng như 1 tree object
// 3. DOM gồm 3 thành phần chính:
// - Element chính là các thành phần (thẻ tag)
// - Attribute là các thuộc tính (class, href, title ...)
// - Text: hiển thị text
// 4. Node: là các điểm giao nhau có thể là element, attribute hoặc text.
// 5. HTML và js có thể getComputedStyle, change, add, delete html element

// --------------------------------
// II - JAVASCRIPT
// cung cấp các method để truy cập vào html dom

// ------------------------------
// III - Document Object trong javascript
// là đại diện cho cả website chứa tất cả các element của website
console.log(document);

// IV - Get Element Method
// Có thể get Element qua ID, class, tag name, CSS selector, HTML Collection
// 1. get Element by id
// const headingNode = document.getElementById("heading"); // trả về 1 element duy nhất
// nếu các element trùng id nó sẽ lấy element id đầu tiên

// 2. get element by class name
// const headingNodes = document.getElementsByClassName("heading"); // trả về 1 HTML Collection (1 mảng các element)
// console.log(headingNodes);

// 3. get element by tag name
// const headingNodes = document.getElementsByTagName("h1"); // trả về 1 HTML Collection (1 mảng các element)
// console.log(headingNodes);

// 4. get element by  CSS selector
const headingNode = document.querySelector(".heading"); // trả về 1 element có class đầu tiên
const headingNode = document.querySelector("html .box . heading-2"); // trả về 1 element có class đầu tiên
const headingNode = document.querySelector(".box . heading-2:first-child");
const headingNode = document.querySelector(".box . heading-2:nth-child(2)");
const headingNode = document.querySelectorAll(".heading");
console.log(headingNode[0]);

// 5. get element by  HTML collection
// document.forms["form-1"];
// document.forms.testForm;

// 6. Other ways get element
var boxNode = document.querySelector(".box-1");
console.log(boxNode.querySelectorAll("li"));
console.log(boxNode.getElementsByTagName("li"));

// 7. Summary
// - getElementById  -> trả về 1 element
// - getElementByClassName
// - getElementByTagName
// - querySelector  -> trả về 1 element
// - querySelectorAll

// 8. HTML collection
// form, images, anchor...

// V - TEXT NODE
// 1. innerTExt, textContent
var heading = document.querySelector(".heading");
console.log(heading.textContent);
heading.textContent = "New heading ";
// - Điểm khác biệt giữa innerText và textContent:
// innerText sẽ trả về những text mà mình có thể nhìn thấy.
// textContent trả về nguyên bản text cho dù có bị display: none
// 2. innerHTML, outerHTML
var boxElement = document.querySelector(".box");
boxElement.innerHTML = "<h1>New heading</h1>";
