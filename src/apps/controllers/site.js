const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");

const home = async (req, res) => {
  const featured = await ProductModel.find({
    featured: true,
    is_stock: true,
  })
    .sort({ _id: -1 })
    .limit(6);
  const latest = await ProductModel.find({
    is_stock: true,
  })
    .sort({ _id: -1 })
    .limit(6);

  res.render("site/index", { featured, latest });
};
const category = async (req, res) => {
  const id = req.params.id;
  const products = await ProductModel.find({ cat_id: id });
  const category = await CategoryModel.findById(id);
  const title = category.title;
  const total = products.length;
  res.render("site/category", { products, title, total });
};
const product = async (req, res) => {
  const id = req.params.id;
  const product = await ProductModel.findById(id);
  res.render("site/product", { product });
};
const search = (req, res) => {
  res.render("site/search");
};
const cart = (req, res) => {
  res.render("site/cart");
};
const success = (req, res) => {
  res.render("site/success");
};

module.exports = {
  home,
  category,
  product,
  search,
  cart,
  success,
};
