function islogin(req, res, next) {
  if (req.session && req.session.user) {
    res.locals.isLogin = true
    res.locals.id = req.session.user._id
    res.locals.userName = req.session.user.userName

  } else {
    // res.locals.isLogin = false
    return res.render("index");

  }
  next()
}
module.exports = islogin
