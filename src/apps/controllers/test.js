// const CategoryModel = require("../models/category");
const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");
const UserModel = require("../models/user");
const CommentModel = require("../models/comment");

const test = async (req, res) => {
  const users = await UserModel.find({});
  console.log(users);
};
// ProductModel.find({}, (err, docs) => {
//   console.log(docs);
// });
// CategoryModel.find({}, (err, docs) => {
//   // console.log(err);
//   console.log(docs);
// });
// UserModel.find({}, (err, docs) => {
//   console.log(docs);
// });
// CommentModel.find({}, (err, docs) => {
//   console.log(docs);
// });
// const category = {
//   title: "China Mobile",
//   description: "China Mobile Description",
//   slug: "china-mobile",
// };
// new CategoryModel(category, { versionKey: false }).save();
// CategoryModel.updateOne(
//   { _id: "6416a883f9956257c0117088" },
//   { title: "Dien Thoai Son" }
// ).exec((err, docs) => {
//   console.log(err);
//   console.log(docs);
// });
// CategoryModel.updateMany(
//   { title: "China Mobile" },
//   { title: "China Mobile 2.0" }
// ).exec((err, docs) => {
//   console.log(err);
//   console.log(docs);
// });
// CategoryModel.deleteOne({ title: "China Mobile 2.0" }).exec((err, docs) => {
//   console.log(err);
//   console.log(docs);
// });
// ProductModel.find({ _id: "5f8a15cb2eec5d5bbf48670d" })
//   .populate({ path: "cat_id" })
//   .exec((err, docs) => {
//     console.log(err);
//     console.log(docs[0].cat_id.title);
//   });
// const st1 = 10;
//resove - reject
// const promise = new Promise((res, rj) => {
//   setTimeout(() => {
//     const st2 = 5;
//     res(st2);
//   }, 2000);
// });
// promise.then((res) => {
//   console.log(st1 + res);
// });

const test2 = (req, res) => {};

module.exports = {
  test: test,
  test2: test2,
};
