const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../apps/middlewares/auth");
const UploadMiddlewave = require("../apps/middlewares/upload");

//Import Controller
const AuthController = require("../apps/controllers/auth");
const TestController = require("../apps/controllers/test");
const AdminController = require("../apps/controllers/admin");
const ProductController = require("../apps/controllers/product");
const UserController = require("../apps/controllers/user");
const CategoryController = require("../apps/controllers/category");
const SiteController = require("../apps/controllers/site");

const Home = (req, res) => {
  res.send("<h1>Home Page</h1>");
};

//Router Site
router.get("/", SiteController.home);
router.get("/category", SiteController.category);
router.get("/product", SiteController.product);
router.get("/search", SiteController.search);
router.get("/cart", SiteController.cart);
router.get("/success", SiteController.success);

//Router Admin
router.get("/test", TestController.test);
router.post("/test2", TestController.test2);
router.get("/admin/login", AuthMiddleware.checkLogin, AuthController.login);
router.post(
  "/admin/login",
  AuthMiddleware.checkLogin,
  AuthController.postLogin
);
router.get("/admin/logout", AuthController.logout);

router.get(
  "/admin/dashboard",
  AuthMiddleware.checkAdmin,
  AdminController.index
);

router.get(
  "/admin/products",
  AuthMiddleware.checkAdmin,
  ProductController.index
);
router.get(
  "/admin/products/create",
  AuthMiddleware.checkAdmin,
  ProductController.create
);
router.post(
  "/admin/products/store",
  UploadMiddlewave.single("thumbnail"),
  AuthMiddleware.checkAdmin,
  ProductController.store
);
router.get(
  "/admin/products/edit/:id",
  AuthMiddleware.checkAdmin,
  ProductController.edit
);
router.post(
  "/admin/products/update/:id",
  UploadMiddlewave.single("thumbnail"),
  AuthMiddleware.checkAdmin,
  ProductController.update
);
router.get(
  "/admin/products/delete/:id",
  AuthMiddleware.checkAdmin,
  ProductController.del
);

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
