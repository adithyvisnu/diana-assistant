var express = require('express');
var router = express.Router();
const helpers = require('../utils/helpers/helper');

/* GET home page. */
router.post('/', async function(req, res, next) {
  const message = req.body.payload.message.text;
  const content = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkaXRoeWF2aXNudUB0ZWxrb20uY28uaWQiLCJyb2xlVXNlciI6InVzZXJfY2MiLCJzdWIiOiI1NTg4Mzc1MjEwMzE5MDEiLCJpYXQiOjE1ODEwMDUwNDksImV4cCI6MTU4MTAwNjg0OSwiYXVkIjoiOTdiMzMxOTMtNDNmZi00ZTU4LTkxMjQtYjNhOWI5ZjcyYzM0IiwiaXNzIjoidGVsa29tZGV2In0.lixmF7CIqwzhYqGazxJrvtvUPwwRZjEcN-VfJYJiZmtAiqYV8YZVzPHBqhwRAdiTyFRkB9ReDRgvU0jpKrgsSoatyxCUUCoEFNxdmcJo-sRNbrPceJmpzm45zp8vsAvjA5fUZEmyRJaNLfJabsAnsz-QOGKNvRR4oNFP3gg8MPEOIEG6NGK5xpP-sl1z5myu7yHwupuMLSE4hdcErYPdFtb6pqrzuYVSam2UnO8vjg7dSaZy0xFdW7f0ldDE5GqPoAePeIOmPtJMmoSMJyESkzF3Yc5LqDyj9qSlv1l2Pf10n_Ta-B3ocXWXVmEkVucYxSPeGyPMUc_DRZattWrAp1tG7iM8WVhYZUWBf-_6JP8h14MHDg6EuM7Tas6JVY-ZGNRg9W0D7ui9n_e7ItJRUy0QHhlLMaviD_atScV4RGjobrI-FLt-ozXM47coxYlcoa1Y1NDlIlHcXMl_xw4KlcmHyZ4SepC13Mkah5n6NtZHWYmvPfaAysQ5vjwEl2p-FmKtK30xlTGnfbNl7QC6oqS1CCDEC4OyMw-M_WhoRL0d-kfyg0AcUXvnujl9fTDbnXlwn_Dj84rlhvPphwGJOf_EQU7Y14_rb5u6-2uoU_wxKxgwO9Y3wfWJ39YstNKcEkLfbW7ScB_zGhMF4hT9gxEhzEy-KDx606JQEHzIPO0';
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
