const multer = require("multer");
const config = require("config");
module.exports = multer({
  // trong dest đường dãn tới thư mục lưu trữ tạm thời dữ liệu upload lên
  dest: config.app.tmp,
});
