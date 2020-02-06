var express = require('express');
var router = express.Router();
const helpers = require('../utils/helpers/helper');

/* GET home page. */
router.post('/', async function(req, res, next) {
  const message = req.body.payload.message.text;
  const content = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkaXRoeWF2aXNudUB0ZWxrb20uY28uaWQiLCJyb2xlVXNlciI6InVzZXJfY2MiLCJzdWIiOiI1NTg4Mzc1MjEwMzE5MDEiLCJpYXQiOjE1ODEwMDU3NzYsImV4cCI6MTU4MTAwNzU3NiwiYXVkIjoiOTdiMzMxOTMtNDNmZi00ZTU4LTkxMjQtYjNhOWI5ZjcyYzM0IiwiaXNzIjoidGVsa29tZGV2In0.AuqMlWLiF0uLiqY-ozlW_ysnfZXGgNCbFbJ_Da_RlzVtthuj3p-dRx1pa2qWG5zfC1SPk0OP8ht2Ai-tZ3uV1sov7pyZsSzlcDcqgTbMtEMGQP4we0Y610mb_J8QJC_UcVIA3k0MeyQxS2oYnkdQdOYUPRfNOFaUSOsRgU3tp5hjDRAA8EJDTcM2TfSx8ey1MrPeZXJCnyLnOT8XguvIQVWItmCDtP9BtYUF_8l5l9QRc3qs4dZL5XDPGrpYf5ylgDQ8YLcIclhGmfWyM4uXZTsQL3xI5URygzmewVkSGUSkE8FFz7ukDSALKPFwFt0TwUZrYqQayzSiUshae6Xv-Dgj5NpUpiF5UOcKlm4WogbeEyvh2gf8HStJRn3e05-xomXIneRamWkxUS--dTSJccbq84rDmZMR4d6imvauVdZpMp55XEVU-w28yY2gGMsTymSymsjsENHP5rKervfeHbPQMqfGZfCE0ema1LGB_p1DDQYKTcunQ64zIykDGF9NZ5b6qNN9Mnf95BKvwhZQ7e_J2kDdw5tuIuxxtQLqFtH925HOI28lIW7LWhs5RP8ncSSEvzyDGBrtTzcYV94S42ktkdAzXY--PFxbIC5GKJhPP6gvHRdIZqsFhCgUmZ8Lf9MnnMgWNRnqQkvWaJGLGUGLLHCZS50TpYBl0Ro6Lpg';
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
