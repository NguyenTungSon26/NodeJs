const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");
const CommentModel = require("../models/comment");
const transporter = require("../../common/transporter");
const config = require("config");
const ejs = require("ejs");
const path = require("path");

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
  const comments = await CommentModel.find({ prd_id: id }).sort({ _id: -1 });
  res.render("site/product", { product, comments });
};
const search = async (req, res) => {
  /*
  const keyword = req.query.keyword || "";
  const filter = {};
  if (keyword) {
    filter.$text = { $search: keyword };
  }
  const products = await ProductModel.find(filter);
  */
  const keyword = req.query.keyword;
  const products = await ProductModel.find({ $text: { $search: keyword } });
  res.render("site/search", { keyword, products });
};
const comment = async (req, res) => {
  const id = req.params.id;
  const body = req.body;
  const comment = {
    prd_id: id,
    email: body.email,
    body: body.body,
    full_name: body.full_name,
  };
  await new CommentModel(comment).save();
  res.redirect(req.path);
};
const cart = (req, res) => {
  const products = req.session.cart;
  res.render("site/cart", { products, totalPrice: 0 });
};

const addToCart = async (req, res) => {
  const body = req.body;
  let items = req.session.cart;
  let isProductExists = false;
  items.map((product, index) => {
    if (product.id === body.id) {
      product.qty += parseInt(body.qty);
      isProductExists = true;
    }
    return product;
  });
  const product = await ProductModel.findById(body.id);
  if (!isProductExists) {
    items.push({
      id: body.id,
      name: product.name,
      thumbnail: product.thumbnail,
      price: product.price,
      qty: parseInt(body.qty),
    });
  }
  req.session.cart = items;
  res.redirect("/cart");
  // console.log(req.session.cart);
};

const updateCart = (req, res) => {
  const products = req.body.products;
  let items = req.session.cart;
  items.map((item) => {
    if (products[item.id]) {
      item.qty = parseInt(products[item.id].qty);
    }
    return item;
  });
  req.session.cart = items;
  res.redirect("/cart");
};

const delCart = (req, res) => {
  const id = req.params.id;
  let items = req.session.cart;
  const newItems = items.filter((item) => {
    if (item.id != id) {
      return true;
    }
  });
  req.session.cart = newItems;
  res.redirect("/cart");
};

const order = async (req, res) => {
  const body = req.body;
  const viewPath = req.app.get("views");
  const html = await ejs.renderFile(
    path.join(viewPath, "site/email-order.ejs"),
    {
      name: body.name,
      phone: body.phone,
      add: body.add,
      items: req.session.cart,
      totalPrice: 0,
    }
  );
  await transporter.sendMail({
    to: body.mail,
    from: "Vietpro Shop",
    subject: "Xác nhận đơn hàng từ Vietpro Shop",
    html,
  });

  req.session.cart = [];
  res.redirect("/success");
};
const success = (req, res) => {
  res.render("site/success");
};

module.exports = {
  home,
  category,
  product,
  comment,
  search,
  cart,
  addToCart,
  updateCart,
  delCart,
  order,
  success,
};
