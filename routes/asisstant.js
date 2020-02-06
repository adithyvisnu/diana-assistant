var express = require('express');
var router = express.Router();
const helpers = require('../utils/helpers/helper');

/* GET home page. */
router.post('/', async function(req, res, next) {
  const message = req.body.payload.message.text;
  const content = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkaXRoeWF2aXNudUB0ZWxrb20uY28uaWQiLCJyb2xlVXNlciI6InVzZXJfY2MiLCJzdWIiOiI1NTg4Mzc1MjEwMzE5MDEiLCJpYXQiOjE1ODEwMTI5NjksImV4cCI6MTU4MTAxNDc2OSwiYXVkIjoiOTdiMzMxOTMtNDNmZi00ZTU4LTkxMjQtYjNhOWI5ZjcyYzM0IiwiaXNzIjoidGVsa29tZGV2In0.SA3LkGtq6w0qBiyXfp9wL0Ocpi93pxD3AqS6SV0wnp-gu1505SDUOd_6UB2-j3zeOl_8JplWHYzDeTg2nZw4tVxVvhZb4yOtu8EsGifiRp2K_IkHx4-d03EwLXElUVNKMEw5QeD4K9yHbZiJn7-kwiCCLC9zDnoEsKyk4La4AKfRl3662mdA2kD5_D3HfIfOsWDZy0_wsEgYRz6_XSpEwTsYbKS4Jy00wYrn2FpJdPYUEeXp9uwKLqbbmTaV0sl2VM-6s3loUyy7Jm3U_vF5F15zzq44xbSIc4h06I_VKjB_75T5xfMFuIr14y8JsPa1USFLfqpEs8NWxR8_MfyAdnU87-Qn7zG4c2AyWIMsMFSpnWM80IF38zWFK6BGzCdXK805pJu6q_POEL0WJMKiBZl8pvTtUUfoo_PxPoqQBwLRvyy_usd0u6RACBmhyuiJBEpLPjcbggfLw-I3SNSEceuKwG_gDUa78ypmIcdm5TvBhohummxu8KA66_zadQO5JMeXMhL-yCFbyfj_VDwmSMr5Sl8SE_ka3FYT3SnWzdl9Puwzx97PotWHiYgnArc31E8RM64RKBXsqBvA8TYHYDzb3b7PF1oyfe4aUJWaLeWWtDJajHnqdflrLWRXTg1Z3ZcsZpyXRBpYQ3bJ7y0uHay2c2luh-Sxa_gDSZXTnvg';
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
