const login = (req, res) => {
  res.render("admin/login", { data: {} });
};

const postLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let error;
  if (email == "") {
    error = "Email không được để trống !";
  } else if (password == "") {
    error = "Mật khẩu không được để trống !";
  } else if (email == "vietpro.edu.vn@gmail.com" && password == "123456") {
    res.redirect("/admin/dashboard");
  } else {
    error = "Tài khoản không hợp lệ!";
  }
  res.render("admin/login", { data: { error: error } });
  console.log(error);
};
const logout = (req, res) => {
  res.send("/admin/logout");
};

module.exports = {
  login: login,
  logout: logout,
  postLogin: postLogin,
};
