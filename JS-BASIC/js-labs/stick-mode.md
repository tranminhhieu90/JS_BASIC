"use strict" mode
Từ ES5 có nhiều thay đổi và conflicts với code trước đó, nên cần có cơ chế để quyết định sử dụng
code mới hay cũ.
"use strict" là cái flag để biết mình muốn dùng code mới (tức từ ES5 trở về sau)
Hiện thì nếu ko nhắc gì thêm thì mặc định sẽ có dùng "use strict" nhé mn.
"use strict";
// đặt use strict ở đầu file để apply strict mode cho toàn bộ file js này
x = 5; // bị error khi có strict mode, còn trước đó vẫn chạy được
Khi đã bật "use strict" thì không có cách nào cancel được.
Lưu ý là "use strict" phải được nằm ở đầu file nhen.
Còn nếu chỉ muốn bật strict mode cho một hàm thì đặt nó ở đầu hàm, tuy nhiên hầu như không dùng
cách này nè.
Khi bạn có sử dụng class hoặc module thì strict mode sẽ được bật tự động mà không cần phải thêm
"use strict"
Tham khảo thêm: https://javascript.info/strict-mode
