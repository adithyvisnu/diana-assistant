var express = require('express');
var router = express.Router();
const QiscusRequest = require('../utils/helpers/helper');

/* GET home page. */
router.post('/', async function(req, res, next) {
  const request = await QiscusRequest.sendQiscus();
  console.log(JSON.stringify(req.body, 0, 2))
  res.send(request)
});

module.exports = router;
