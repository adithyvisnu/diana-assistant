var express = require('express');
var router = express.Router();
const QiscusRequest = require('../utils/helpers/helper');
const detail_product = require('../utils/helpers/detail_product');
const constants = require('../utils/helpers/constants');

/* GET home page. */
router.post('/', async function(req, res, next) {
  const message = req.body.payload.message.text;
  const content = req.body.payload.message.payload.content;
  const roomId = req.body.payload.room.id_str;
  const guestId = req.body.payload.from.email;

  const indexConstants = constants.type.find(element => element === message.toLowerCase());
  switch (indexConstants) {
    case 0: await detail_product.get();
    case 1: await QiscusRequest.sendQiscus();
    case 2: await QiscusRequest.sendQiscus();
    case 3: await QiscusRequest.sendQiscus();
    default: await QiscusRequest.sendDefensiveMessage();
  }
  const request = await QiscusRequest.sendQiscus();
  console.log(JSON.stringify(req.body, 0, 2))
  res.send(request)
});

router.post('/room', async function(req, res, next) {
  const body = req.body;
  const result = await QiscusRequest.createRoom(body.userId);
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
