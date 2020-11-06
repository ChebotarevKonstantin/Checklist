const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = new Schema({
  taskName: { type: String, required: true }, //название заданя
  taskText: { type: String, required: true }, //текст задания
  taskDateFinish:{ type: String, required: true }, //дата исполнения
  department:{ type: String, required: true }, //подразделение стажировки
  mark:{ type: Number}, //оценка по шкале
  completed: {type: Boolean},
  control:{ type: String, required: true }, //наставник
  flag: {type: String, default: 'общее' } //флаг
    })

module.exports = mongoose.model('Task', taskSchema)
