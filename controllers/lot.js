const Lot = require('../models/Lot')

module.exports.addLot = async function (req, res){
  const {itemName, condition, startAt, endAt, description} = req.body
  
  const lot = new Lot({
    itemName, condition, startAt, endAt, description
  })
console.log(lot);
  await lot.save()
      res.status(201).render('personaccount')
  // res.status(201).json({
  //   success: true,
  //   message: 'Пользователь создан'
  // })
}


