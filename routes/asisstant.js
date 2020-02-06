var express = require('express');
var router = express.Router();
const helpers = require('../utils/helpers/helper');

/* GET home page. */
router.post('/', async function(req, res, next) {
  const message = req.body.payload.message.text;
  const content = req.body.payload.message.payload.content.accessToken;
  const roomId = req.body.payload.room.id_str;
  const guestId = req.body.payload.from.email;

  const data = {
      message,
      content,
      roomId,
      guestId
  }

  const request = await helpers.proccessAction(data);
//   console.log(JSON.stringify(request, 0, 2))
  console.log(JSON.stringify(req.body, 0, 2))
  res.send(request)
});

router.post('/room', async function(req, res, next) {
  const body = req.body;
  const result = await helpers.createRoom(body.userId);
  const response = {
    err: null,
    data: {
      roomId: result.results.room.room_id,
      room_type: result.results.room.room_type
    },
    code: 200,
  }
  res.send(response);
})

module.exports = router;
