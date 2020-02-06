var express = require('express');
var router = express.Router();
const helpers = require('../utils/helpers/helper');

/* GET home page. */
router.post('/', async function(req, res, next) {
  const message = req.body.payload.message.text;
  const content = req.body.payload.message.payload.content.jwt;
  const roomId = req.body.payload.room.id_str;
  const guestId = req.body.payload.from.email;

  const data = {
      message,
      content,
      roomId,
      guestId
  }

  const request = await helpers.proccessAction(data);
  
  console.log(JSON.stringify(req.body, 0, 2))
  res.send(request)
});

module.exports = router;
