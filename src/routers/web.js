const express = require("express");
const router = express.Router();

//Import Controller
const AuthController = require("../apps/controllers/auth");
const AdminController = require("../apps/controllers/admin");
const ProductController = require("../apps/controllers/product");
const UserController = require("../apps/controllers/user");
const CategoryController = require("../apps/controllers/category");

const Home = (req, res) => {
  res.send("<h1>Home Page</h1>");
};
router.get("/", Home);

router.get("/admin/login", AuthController.login);
router.post("/admin/login", AuthController.postLogin);
router.get("/admin/logout", AuthController.logout);
router.get("/admin/dashboard", AdminController.index);
router.get("/admin/products", ProductController.index);
router.get("/admin/products/create", ProductController.create);
router.get("/admin/products/edit/:id", ProductController.edit);
router.get("/admin/products/delete/:id", ProductController.del);

// Router User
router.get("/admin/users", UserController.index);
router.get("/admin/users/create", UserController.create);
router.get("/admin/users/edit/:id", UserController.edit);
router.get("/admin/users/delete/:id", UserController.del);

// Router Category
router.get("/admin/categories", CategoryController.index);
router.get("/admin/categories/create", CategoryController.create);
router.get("/admin/categories/edit/:id", CategoryController.edit);
router.get("/admin/categories/delete/:id", CategoryController.del);

module.exports = router;
