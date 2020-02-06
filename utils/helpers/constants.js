const type = [
  'product catalog',
  'policies & guidances',
  'analytics',
];

const pdf = [
  'Strategy Shifting to The Front Sales Connectivity 2020',
  'AM Alignment CFUE'
]

const bodyQiscus = [
  {
    type:'product catalog',
    payload:{
      "type": "carousel",
      "payload": {
        "user_id": "guest-101",
        "room_id": "9832314",
        "type": "carousel",
        "payload": {
          "text": "silahkan pencet",
          "buttons": []
        }
    }
    }
  }
]

const buttonTemplate = {
  "label": "button1",
  "type": "postback",
  "payload": {
    "url": "http://somewhere.com/button1",
    "method": "get",
    "payload": null
  }
}

module.exports = {
  type,
  pdf,
  bodyQiscus,
  buttonTemplate
}