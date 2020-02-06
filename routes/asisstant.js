var express = require('express');
var router = express.Router();
const helpers = require('../utils/helpers/helper');

/* GET home page. */
router.post('/', async function(req, res, next) {
  const message = req.body.payload.message.text;
  const content = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkaXRoeWF2aXNudUB0ZWxrb20uY28uaWQiLCJyb2xlVXNlciI6InVzZXJfY2MiLCJzdWIiOiI1NTg4Mzc1MjEwMzE5MDEiLCJpYXQiOjE1ODEwMDQ1MDEsImV4cCI6MTU4MTAwNjMwMSwiYXVkIjoiOTdiMzMxOTMtNDNmZi00ZTU4LTkxMjQtYjNhOWI5ZjcyYzM0IiwiaXNzIjoidGVsa29tZGV2In0.pbF_UXD-6FKv1To5xTM3JqgDpP5FR0S5UBcFsoStwlLLFrcLVlq6iid95x5RnawphEyx2FRZ6UiV-T2J48uruwIChRy2ReYDe5WYbr622V7vUshLJaLd29mmLQna0jCkMXQb9S_sdHBngWzgwPhuZB932nMC2b-G3FoViayWJ8mVB-3aP18Tbti2mscZphgSXtpnQ_s-KiqLtOUnhzdPrYoTaD2zBfME0q9V3Xn8fWOYqbdvQ5QNXlgNRxlx5J3ZAS2Jz33cxfv3gRFagBU1mIgLZ2Lz4Nc3ldybvXwPhvqUunw5IIme_TAzTRbSMkWYgC5JSQo0YAY2ccucobzwTCZThLXvo_Y_rV5eVpfW_CJy60LIU1Sy_j-HTqc7WcJ_A1G6HemkbXwhbdByvghBAy06gaClfx1lDxUlw3Q9Ea30MYzYBqjaU7Y5W2Bd02NRgZpA2AAg0PTocwb5sFskmarOky483s8GSq7ScnH5yJzrTjXirB6oCJEFqzo3UYYmAenOXgoP4WmJkh-LGhqSoh5rdhIFI3Wok691xwGHo9KcP6JPjBJ3VQ-VY6vpKpyvplkcqSf4xFlHYuKojzrRsjPbHjp8bbFu8gZpZRbFet7QYbD0u7ThALy7KYG3aBRbWFBaDcZrG68NsfVZM_vGQYyCCRJbmo4_fP1-agR0N5s';
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
