const mongoose = require('mongoose')
const Schema = mongoose.Schema

const lotSchema = new Schema({
  itemName: {type: String},
  condition: { type: String},
  startAt:{type: Date},
  endAt:{type: Date},
  description: { type: String},
 })

module.exports = mongoose.model('Lot', lotSchema)
