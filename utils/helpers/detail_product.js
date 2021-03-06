const rp = require('request-promise');
const uri = 'https://catalog-api-dev.telkomdigitalsolution.co/api/catalog/products/v1/?sort=POPULAR&size=3';
const uriSearch = 'https://catalog-api-dev.telkomdigitalsolution.co/api/catalog/products/v1/?searchProduct='

const get = async (data) => {
  const body = {
    "user_id": "fikri@qiscus.com",
    "room_id": "9850506",
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
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${data.content}`,
      // 'QISCUS-SDK-APP-ID': 'lucinta-a-glhzm4uglkx',
      // 'QISCUS-SDK-SECRET': '39c265885f87b74a2c65db9a9989cc7b'
    },
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

const search = async (data, keywords) => {
  const options = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${data.content}`,
      // 'QISCUS-SDK-APP-ID': 'lucinta-a-glhzm4uglkx',
      // 'QISCUS-SDK-SECRET': '39c265885f87b74a2c65db9a9989cc7b'
    },
    uri: uriSearch+''+keywords,
    json: true
  }

  const res = rp(options).then(res => {
    return res;
  }).catch((err) => {
    return err;
  });
  return res;
};

const detail = async (token, id) => {

};

module.exports = {
  get,
  search
}