const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  // email: { type: String, unique: true, required: true },
  role: { type: String, default: 'user'},// вновь прибывший, наставник, наблюдатель
  userName: { type: String, required: true }, //имя
  userSurname: { type: String, required: true },//фамилия
  patronymic: { type: String },//отчество
  password: { type: String, required: true },
  position: { type: String, required: true }, //должность
  dateStartWork:{ type: Date, required: true }, //дата начала работы
  department:{ type: String, required: true }, //подразделение
  regDate:  { type: Date, default: Date.now }//дата регистрации
   })

module.exports = mongoose.model('User', userSchema)
