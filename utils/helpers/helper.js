const rp = require('request-promise');
const uri = `https://api.qiscus.com/api/v2.1/rest/post_comment`;

const sendQiscus = async (data) => {
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

const sendDefensiveMessage = async (data) => {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'QISCUS-SDK-APP-ID': 'lucinta-a-glhzm4uglkx',
      'QISCUS-SDK-SECRET': '39c265885f87b74a2c65db9a9989cc7b'
    },
    body: 
    {
      "user_id": "guest-101",
      "room_id": "9832314",
      "message": "this is new message"
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


const createRoom = async (userId) => {
  const payload = {
    "user_ids": [userId, 'guest-101'],
  }
  const options = {
    method: 'POST',
    uri: 'https://api.qiscus.com/api/v2.1/rest/get_or_create_room_with_target',
    body: payload,
    headers: {
      'Content-Type': 'application/json',
      'QISCUS-SDK-APP-ID': 'lucinta-a-glhzm4uglkx',
      'QISCUS-SDK-SECRET': '39c265885f87b74a2c65db9a9989cc7b'
    },
    json: true,
  };
  const res = rp(options).then(res => {
    return res;
  }).catch((err) => {
    return err;
  });
  return res;
}
module.exports = {
  sendQiscus,
  sendDefensiveMessage,
  createRoom
};