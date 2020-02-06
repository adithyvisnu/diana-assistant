const rp = require('request-promise');
const uri = `https://api.qiscus.com/api/v2.1/rest/post_comment`;

const list = async ({ message, roomId, guestId}) => {
  const body = {
    "user_id": "5e3b9b1f20f83706c9f33ae4@vutura",
    "room_id": roomId,
    "type": "buttons",
    "payload": {
      "text": "Yuk ketahui kebijakan-kebijakan yang ada di Telkom",
      "buttons": [
        {
          "label": "Strategy Shifting to The Front Sales Connectivity 2020",
          "type": "postback",
          "payload": {
            "url": "",
            "method": "get",
            "payload": null
          }
        },
        {
          "label": "AM Alignment CFUE",
          "type": "postback",
          "payload": {
            "url": "",
            "method": "get",
            "payload": null
          }
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

const SSTFSC = async (token, keywords) => {
  const body = {
    "user_id": "5e3b9b1f20f83706c9f33ae4@vutura",
    "room_id": roomId,
    "type": "buttons",
    "payload": {
      "url": "https://drive.google.com/file/d/1hL3650r8slNkjLMXEJ_UUTrtmMoZan5F/view?usp=sharing",
      "caption": "Strategy Shifting to The Front Sales Connectivity 2020",
      "file_name": "",
      "size": 0,
      "pages": 1
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

const AMALCFUE = async (token, id) => {
  const body = {
    "user_id": "5e3b9b1f20f83706c9f33ae4@vutura",
    "room_id": roomId,
    "type": "buttons",
    "payload": {
      "url": "https://drive.google.com/file/d/1ha4l9pOXYE804uhVCOVB9uuN5OsU5PY1/view?usp=sharing",
      "caption": "AM Alignment CFUE",
      "file_name": "",
      "size": 0,
      "pages": 1
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

module.exports = {
  list
}