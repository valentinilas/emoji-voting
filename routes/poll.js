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
    res.send('POLL');
});

router.post('/',(req, res)=>{
    pusher.trigger("os-poll", "os-vote", {
        points: 1,
        os: req.body.os
    });
    return res.json({success: true, message: 'Thank you for voting!'});
});

module.exports = router;