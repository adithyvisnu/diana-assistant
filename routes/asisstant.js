var express = require('express');
var router = express.Router();
const helpers = require('../utils/helpers/helper');

/* GET home page. */
router.post('/', async function(req, res, next) {
  const message = req.body.payload.message.text;
  const content = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkaXRoeWF2aXNudUB0ZWxrb20uY28uaWQiLCJyb2xlVXNlciI6InVzZXJfY2MiLCJzdWIiOiI1NTg4Mzc1MjEwMzE5MDEiLCJpYXQiOjE1ODEwMTA3MjgsImV4cCI6MTU4MTAxMjUyOCwiYXVkIjoiOTdiMzMxOTMtNDNmZi00ZTU4LTkxMjQtYjNhOWI5ZjcyYzM0IiwiaXNzIjoidGVsa29tZGV2In0.qceHrHmH3UU6WmxjcQFkg0WukYNu4wH9xY_UGGYVGtVB9EG-RKtCMZX6-7XuTOZ1I7CsmdR6cXIUoYuiET3aOxTAPEo0dR0prROKstEo1Qqy06AMovsdrTdagj9XfzHWBGqj4iajr_5WqR50hfE4mnWcs1hZS7O8T_NoGVRuUOZ97Q_tEo2mMdv_PnweHvS2lGIDnugZDUwSiFqapwtZv60FAourh65oeJMqLe1ZhqvjGWW21QWXJ5mJfjkspB8nv_BW_kfWvk4UPMg0YnkU1qWpGeiHSbEbtSQDkrpqL0S9wqkAw7PZJAsOqOBJXo65tvQUYcfHRuIhtleNkDvshrVCJVjjxBQi4bP_Tra3NG621zO118_J2DL13i1Wkyk2SX6daJAVuDOva_ZUdkYRdIOkBE2bOXgJFITsPxCGei_wglvH6Va18ozXWOBa7M4GNFoX4qhldIzMkEBB_fNITXpFOgkEaI1noU1bQ1KeLwDjhmpHm7X0HQ2_vLtpTlO20e28qIAmtdy_Tj1WVXFnJhAgXy6k9tUu9WePKv4d3i40xF7aAcMa2r1Lxvla2_6AIrofnAOwQxGrP3YLVFastJopXFErg_dQqewbQXds4rR7R3o8c41q0xDaIo37wRsvhwoQ_5TtFrQ4K7cSsuvbLFPk12o8RVmnNSGTRw4TZDg';
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
