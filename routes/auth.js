const express = require('express')
const router = express.Router();
const controller = require('../controllers/auth');
const controllerLot = require('../controllers/lot');

const isLogin = require('../middleware/checklogin');
const {cookiesCleaner} = require('../middleware/auth');

// const { route } = require('./router');
const User = require('../models/User')
const Lot = require('../models/Lot')

const dateFormat = require('dateformat');

router
.route('/')
.get((req, res)=>{
   res.render("index");
})

router
.route('/registration')
.get((req, res)=>{
   res.render("signup");
})
.post(controller.registration);


router
.route('/login')
.get((req, res)=>{
  res.render("signin");
})
.post(controller.login);



router
.route('/logout')
.get(cookiesCleaner, async (req, res, next) => {
  if (req.session) {
    try {
      await req.session.destroy();
      res.clearCookie("user_sid");
      res.redirect("/");
    } catch (error) {
      next(error);
    }
  } else {
    res.redirect("/");
  }
});

router
.route('/account/:id')
.get(isLogin, async (req, res)=>{
  // console.log(req.params.id);
  try {
    const user = await User.findOne({_id:req.params.id})
    // console.log(`********* ${user}`);
    const params = {userName: user.userName,
      userSurname: user.userSurname,
      patronymic: user.patronymic,
      department: user.department,
      position: user.position,
      role: user.role,
      dateStartWork: dateFormat(user.dateStartWork, ' dd mm yyyy'),
      Inlogin: res.locals.isLogin,
      id: res.locals.id
    }
     res.render('personaccount', params)
   
    } catch (error) {
      res.send("что-то не так..")
      next(error);
    }
  })
.post(isLogin, controllerLot.addLot);

module.exports = router;
