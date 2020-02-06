var express = require('express');
var router = express.Router();
const QiscusRequest = require('../utils/helpers/helper');

/* GET home page. */
router.post('/', async function(req, res, next) {
  const request = await QiscusRequest.sendQiscus();
  console.log(req)
  console.log(request)
  res.send(request)
});

module.exports = router;
