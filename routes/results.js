const express = require('express');
const router = express.Router();
const Pusher = require("pusher");



const pusher = new Pusher({
  appId: "1192257",
  key: "0c9be423f896addb0c91",
  secret: "11a9412c1ac68ff55838",
  cluster: "eu",
  useTLS: true
});



router.get('/',(req,res)=>{
    res.send('RESULTS');
});


module.exports = router;