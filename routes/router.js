const express = require('express')
const router = express.Router();
const isLogin = require('../middleware/checklogin')
const Task = require('../models/Task')
const User = require('../models/User')



router
.route('/')
.get(isLogin, async (req, res)=>{
  const tasks = await Task.find({})
  let obj = {
    Inlogin: res.locals.isLogin,
    id: res.locals.id,
    userName: res.locals.userName,
  }
  if(obj.id == '5fa4f76751b78da9ed0b5cf3'){
    const users = await User.find({})
    
    return res.render("adminpage", {users, ...obj});
  }
  res.render("checklist", {tasks, ...obj});
})
.post(async (req, res) => {
  const {statusChecked} = req.body
  const {id} = req.body
  // console.log(req.body);
  // console.log(id);
  // console.log(statusChecked);
  await Task.findByIdAndUpdate(`${id}`, {$set: { completed: statusChecked }});
})

router
.route('/edit/:id')
.get(isLogin, async (req, res)=>{
  console.log(req.params.id);
  try {
    const user = await User.findOne({_id:req.params.id})
    const params = {role: user.role,
      userName: user.userName,
      userSurname: user.userSurname,
      patronymic: user.patronymic,
      password: user.password,
      position: user.position,
      dateStartWork: user.dateStartWork,
      department: user.department,
      regDate: user.regDate,
         }
         console.log(user);
    let obj = {
      Inlogin: res.locals.isLogin,
      id: res.locals.id,
      userName: res.locals.userName,
    }
     res.render('edit', params)
   
    } catch (error) {
      res.send("что-то не так..")
      next(error);
    }





  
  
})
.post(async (req, res) => {
  
  
})
module.exports = router;

