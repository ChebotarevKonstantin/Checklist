const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports.registration = async function(req, res){
  const {userSurname, userName, patronymic, password, position, department, dateStartWork} = req.body
  const salt = bcrypt.genSaltSync(10)
  const hashedPassword = bcrypt.hashSync(password, salt)
console.log((req.body));
  const user = new User({
    userSurname, userName, patronymic, password: hashedPassword, position, department, dateStartWork 
      })
  req.session.user = user
  console.log( req.session.user );

  await user.save()
  // res.status(201).redirect('/')
  res.status(201).json({
    success: true,
    message: 'Пользователь создан'
  })
}

module.exports.login = async function(req, res){
  const {userName, password} = req.body
  console.log(req.body);
  const candidate = await User.findOne({userName})
  if (candidate) {
    if (bcrypt.compareSync(password, candidate.password)) {
      req.session.user = candidate
      // res.status(200).redirect('/')
      res.status(200).json({
        success: true,
        message: 'Пользователь зашел'
      })
     } else {
      res.status(404).json({
        success: false,
        message: 'Неверный пароль'
      })
    }
  } else {
    res.status(404).json({
      success: false,
      message: 'Пользователь не найден'
    })
  }
}

