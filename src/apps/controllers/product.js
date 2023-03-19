const ProductModel = require("../models/product");

const index = async (req, res) => {
  const products = await ProductModel.find().populate({ path: "cat_id" });
  console.log(products);
  res.render("admin/products/product", { products: products });
};
const create = (req, res) => {
  res.render("admin/products/add_product");
};
const edit = (req, res) => {
  res.render("admin/products/edit_product");
};
const del = (req, res) => {
  res.send("/admin/products/delete/:id");
};

module.exports = {
  index: index,
  create: create,
  edit: edit,
  del: del,
};
