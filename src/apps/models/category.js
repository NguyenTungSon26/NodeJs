// B1: gọi kết nối + mongoose để sử dụng phương thức của nó
const mongoose = require("../../common/database")();

// B2: mô tả CategoryModel thoogn qua cú pháp Schema (thông tin cơ bản + timestamps: time tự đông: createdAt,...)
const categorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    slug: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// B3: Tạo CategoryModel từ categorySchema truyền 3 tso: tên tùy í, model categorySchema, qly colention nào
const CategoryModel = mongoose.model("Category", categorySchema, "categories");

// B4: export ra để sử dụng
module.exports = CategoryModel;
