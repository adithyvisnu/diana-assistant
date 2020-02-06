const rp = require('request-promise');

const sendQiscus = async (data) => {
  const uri = `https://api.qiscus.com/api/v2.1/rest/post_comment`;
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'QISCUS-SDK-APP-ID': 'lucinta-a-glhzm4uglkx',
      'QISCUS-SDK-SECRET': '39c265885f87b74a2c65db9a9989cc7b'
    },
    body: {
      "user_id": "guest-101",
      "room_id": "9832314",
      "type": "buttons",
      "payload": {
        "text": "silahkan pencet",
        "buttons": [
          {
            "label": "button1",
            "type": "postback",
            "payload": {
              "url": "http://somewhere.com/button1",
              "method": "get",
              "payload": null
            }
          },
          {
            "label": "button2",
            "type": "link",
            "payload": {
              "url": "http://somewhere.com/button2?id=123"
            }
          }
        ]
      }
    },
    uri,
    json: true
  };
  const res = rp(options).then(res => {
    return res;
  }).catch((err) => {
    return err;
  });
  return res;
};

module.exports = {
  sendQiscus
};