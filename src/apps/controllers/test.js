const test = (req, res) => {
  res.render("test");
};
const test2 = (req, res) => {
  console.log(req.body.password);
};

module.exports = {
  test: test,
  test2: test2,
};
