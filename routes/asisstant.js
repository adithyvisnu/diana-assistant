var express = require('express');
var router = express.Router();
const helpers = require('../utils/helpers/helper');

/* GET home page. */
router.post('/', async function(req, res, next) {
  const message = req.body.payload.message.text;
  const content = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkaXRoeWF2aXNudUB0ZWxrb20uY28uaWQiLCJyb2xlVXNlciI6InVzZXJfY2MiLCJzdWIiOiI1NTg4Mzc1MjEwMzE5MDEiLCJpYXQiOjE1ODEwMDYzNDAsImV4cCI6MTU4MTAwODE0MCwiYXVkIjoiOTdiMzMxOTMtNDNmZi00ZTU4LTkxMjQtYjNhOWI5ZjcyYzM0IiwiaXNzIjoidGVsa29tZGV2In0.IAxgoHRF-gtEBWuZ_ibEGfHrH58WYWuqpAOmfSGLrv73-HMXfMVu7p6lLQpoUHsgNDTW0Vs_c9yZvXAtrDn2rHedsUTEZwca_f9HxaSYU_HlMcaRqyK4L2xSuAsiC8vWm2gYQbMDcg8fK7_UR4H_HK0MeTFh4w5Oj-XLsba2cFtSEhgFCzl9xadVYZiVYF9ioE_O1N8WDfJhp9NO11ae9loFhEBk-XkCNW9T4VY12oHJGAjkE_CS1dgLVIa2ZVz8xBqD9C_UtY-xRptYjeY1kP27Mq8QmHSKppNcRJ8IhfUB641f8Wnu9c0HXcNeXXSu7FdwPKhE1-q9sQwnHyGfbNkMdv94opMLfvIm5tre7csOxKo12T9ltSdy9V2Bt1rIcjv51cuiz1qAfB3Ll-ZYEYcs0qHujye4q2BSIcgQzE3NQiX7B7h3u9hL_pdnYEoZwuHcHKGhZ0T-SfBsO9fbqG0p0QADRDA5cdOCHRUMXgyILLuM0foyAcejc-Iyc4QQJ-iiGN6TkkHOAPnBvOYhiLm83-a19m8oSNBJWwL_yTMIlmqrQw1mR7kStYnwH1agJHgaBq3m6h24pJKIebyCVhpkByV5LgWjNXMnIKSjhgMRndABA9wxGs-Nt3JstHhACD6CSQ01CeQhPBqrO1QQgGaW7FP2MB7VDQqygZtxtQo';
  const roomId = req.body.payload.room.id_str;
  const guestId = req.body.payload.from.email;

  const data = {
      message,
      content,
      roomId,
      guestId
  }

  const request = await helpers.proccessAction(data);
  console.log(JSON.stringify(request, 0, 2))
//   console.log(JSON.stringify(req.body, 0, 2))
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
