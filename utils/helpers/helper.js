const rp = require('request-promise');
const CONSTANTS = require('./constants');
const detail_product = require('./detail_product');
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
      "user_id": "fikri@qiscus.com",
      "room_id": "9850506",
      "type": "buttons",
      "payload": {
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
    "user_id": "5e3b9b1f20f83706c9f33ae4@vutura",
    "room_id": "9850506",
      "message": data.message
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

const proccessAction = async (data) => {
    const indexConstants = CONSTANTS.type.findIndex(element => element);
    console.log(indexConstants)
    let result;
    switch (indexConstants) {
        case 0: await detail_product.get(data);
        case 1: await sendQiscus();
        case 2: await sendQiscus();
        case 3: await sendQiscus();
        default:  
            data.message = 'Maaf, Lucinta masih mencoba memahami maksud anda.\nSilakan kembali ke Menu untuk melihat informasi yang Lucinta sediakan';
            result = await sendDefensiveMessage(data);
            break;
    }
    return result;
}

module.exports = {
  sendQiscus,
  sendDefensiveMessage,
  createRoom,
  proccessAction
};