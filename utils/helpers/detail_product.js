const rp = require('request-promise');
const uri = 'api/catalog/solutions/v1/solution-data';

export const get = async (token, keywords, payload) => {
  const body = {
    "user_id": "guest-101",
    "room_id": "9832314",
    "type": "carousel",
    "payload": {
      "cards": [
        {
          "image": "https://storage.googleapis.com/vutura/assets/images/eb6d0e30-7e80-40c9-9966-f95409ddd240.jpg",
          "title": "Atasan Blouse Tunik Wanita Baju Muslim Worie Longtop",
          "description": "Oleh sippnshop\n96% (666 feedback)\nRp 49.000.00,-\nBUY 2 GET 1 FREE!!!",
          "default_action": {
            "type": "postback",
            "postback_text": "Load more",
            "payload": {
              "url": "http://url.com/baju?id=123&track_from_chat_room=123",
              "method": "get",
              "payload": null
            }
          },
          "buttons": [
            {
              "label": "button1",
              "type": "postback",
              "postback_text": "Load more",
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
                "method": "get",
                "url": "http://somewhere.com/button2?id=123"
              }
            }
          ]
        },
        {
          "image": "https://storage.googleapis.com/vutura/assets/images/eb6d0e30-7e80-40c9-9966-f95409ddd240.jpg",
          "title": "Atasan Blouse Tunik Wanita Baju Muslim Worie Longtop",
          "description": "Oleh sippnshop\n96% (666 feedback)\nRp 49.000.00,-\nBUY 2 GET 1 FREE!!!",
          "default_action": {
            "type": "postback",
            "postback_text": "Load more",
            "payload": {
              "url": "http://url.com/baju?id=123&track_from_chat_room=123",
              "method": "get",
              "payload": null
            }
          },
          "buttons": [
            {
              "label": "button1",
              "type": "postback",
              "postback_text": "Load more",
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
                "method": "get",
                "url": "http://somewhere.com/button2?id=123"
              }
            }
          ]
        },
        {
          "image": "https://storage.googleapis.com/vutura/assets/images/eb6d0e30-7e80-40c9-9966-f95409ddd240.jpg",
          "title": "Atasan Blouse Tunik Wanita Baju Muslim Worie Longtop",
          "description": "Oleh sippnshop\n96% (666 feedback)\nRp 49.000.00,-\nBUY 2 GET 1 FREE!!!",
          "default_action": {
            "type": "postback",
            "postback_text": "Load more",
            "payload": {
              "url": "http://url.com/baju?id=123&track_from_chat_room=123",
              "method": "get",
              "payload": null
            }
          },
          "buttons": [
            {
              "label": "button1",
              "type": "postback",
              "postback_text": "Load more",
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
                "method": "get",
                "url": "http://somewhere.com/button2?id=123"
              }
            }
          ]
        }
      ]
    }
  }

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'QISCUS-SDK-APP-ID': 'lucinta-a-glhzm4uglkx',
      'QISCUS-SDK-SECRET': '39c265885f87b74a2c65db9a9989cc7b'
    },
    body: body,
    uri,
    json: true
  }

  const res = rp(options).then(res => {
    return res;
  }).catch((err) => {
    return err;
  });
  return res;
};

const search = async (token, keywords) => {

};

const detail = async (token, id) => {

};