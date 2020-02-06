var express = require('express');
var router = express.Router();
const QiscusRequest = require('../utils/helpers/helper');

/* GET home page. */
router.post('/', async function(req, res, next) {
  const message = req.body.payload.message.text;
  const content = req.body.payload.message.payload.content;
  const roomId = req.body.payload.room.id_str;
  const guestId = req.body.payload.from.email;

  
  const request = await QiscusRequest.sendQiscus();
  console.log(JSON.stringify(req.body, 0, 2))
  res.send(request)
});

module.exports = router;
