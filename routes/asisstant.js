var express = require('express');
var router = express.Router();
const helpers = require('../utils/helpers/helper');

/* GET home page. */
router.post('/', async function(req, res, next) {
  const message = req.body.payload.message.text;
  const content = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkaXRoeWF2aXNudUB0ZWxrb20uY28uaWQiLCJyb2xlVXNlciI6InVzZXJfY2MiLCJzdWIiOiI1NTg4Mzc1MjEwMzE5MDEiLCJpYXQiOjE1ODEwMDM5MjEsImV4cCI6MTU4MTAwNTcyMSwiYXVkIjoiOTdiMzMxOTMtNDNmZi00ZTU4LTkxMjQtYjNhOWI5ZjcyYzM0IiwiaXNzIjoidGVsa29tZGV2In0.pYIFVgi1Z2qaPFgwsZ6dhVVy7pWALdpZbTT1HHZ9jZ4uL9Jo13J2pSRCXxiqVzONU56x4biLhEroKnX-jvUxAR01282JPKMO60Gqo6kymnWeGJ7LwH2Tb8X_LsItITQFcxF1Mg0AnoJFX-qjnFIvLsR0-DQddiL1-7Ttn01FudkMMbKyiIsJUD0ARnV2cDQuNiX86myB63RUU6Whkae_cFsDTkoFzLD8TZFL3NZgp14q9UwOllbO01sMnJGzWzEsPDgw6qGqcVpOdqYOFnqf992Fss_gH1ukYxOT0T0XZewUcS6ubt1UfJ1HCzuTuhhuukFMPMslfgdP4kRil3f9CMajh5WY9YPff_dfwFkkLxaNBmQWEbvCcsNCHJOGLcvLPG572TVA_sZ81V1YaryCVUW__uiCq3360kZSpJ9apeuZedmphyohKLwUIpHr7ONWrpPL1FZQZT1PO-uEBXCrd0l1PuTSxLykhc04e7oOn-NsxKwyXJrMrNIBgVh-DGuMPvJpstB57dFs47VqiT2GB-u04Eah0vOfVKgoR5Utt69iVL1-A2qAJibHeuTn_rsU759u0x96LSuMYwGJ7L6WK8dyGwfIF_lR6_dcMZ-zmncsdgsgMrIdJTWGD8AhBEWmjvut59AffGtst4f3cR-wBqAYJMCdVSBZWjttdk56rmU';
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
