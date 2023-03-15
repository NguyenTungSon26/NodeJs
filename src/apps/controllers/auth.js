const login = (req, res) => {
  res.send(`
  <form method="post">
  <input type="text" name="mail"/>
  <input type="text" name="pass"/>
  <input type="submit" name="sbm" value="Login"/>
</form>`);
};

const postLogin = (req, res) => {
  console.log(req.body.mail);
};
const logout = (req, res) => {
  res.send("/admin/logout");
};

module.exports = {
  login: login,
  logout: logout,
  postLogin: postLogin,
};
