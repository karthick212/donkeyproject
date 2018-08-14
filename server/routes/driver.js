const express = require('express')
const router = express.Router()
const Request = require('request')
// const driverActivity = require('../controller/driver-Controller')
// const jwt = require('jsonwebtoken')

// router.get('/FetchAllDetails', function (req, res, next) {
//   driverActivity.FetchAllDetails((err, rows) => {
//     if (err) {
//       res.json(err)
//     } else {
//       res.json(rows)
//     }
//   })
// })

// router.get('/detail', function (req, res, next) {
//   console.log('di')
// })


// OTP-API
// var otpchecking = "http://manage.rkadsindia.in/SendSMS/sendmsg.php?uname=DCARGO&pass=123456&send=DCARGO&dest=Mobilenum&msg="
router.post('/otp', function (request, response) {
  let Mobilenum = request.body.number
  let ResMsg
  let RandomOtp = Math.floor(100000 + Math.random() * 900000)
  if (Mobilenum != null) {
    var Otpurl = 'http://manage.rkadsindia.in/SendSMS/sendmsg.php?uname=DCARGO&pass=123456&send=DCARGO&dest=' + Mobilenum + '&msg=' + RandomOtp
    ResMsg = {
      'message': RandomOtp
    }
    Request.get(Otpurl)
  } else {
    ResMsg = 'Invalid Mobile Number'
  }
  response.json(ResMsg)
})

module.exports = router
