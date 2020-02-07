const rp = require('request-promise');
const CONSTANTS = require('./constants');
const detail_product = require('./detail_product');
const policies = require('./policies');
const analytics = require('./analytics');
var natural = require('natural');
var tokenizer = new natural.WordTokenizer();
const uri = `https://api.qiscus.com/api/v2.1/rest/post_comment`;
const nlp = require('../helpers/nlp');

const sendQiscus = async (datas, data, product) => {
    const payload = {
        cards: []
    }
    for (let index = 0; index < 1; index++) {
        const bodyQiscus = data[index];
        if (bodyQiscus.type == 'product catalog') {
            payload.type = 'carousel';
            payload.text = 'Product dan Layanan Terpopuler';
            product.data.map(data => {
                payload.cards.push({
                    // label: 'button'+index,
                    image: data.productIconUrl,
                    title:data.productName,
                    description: data.productId,
                    "default_action": {
                        "type": "",
                        "postback_text": "",
                        "payload": {
                            "url": "",
                            "method": "",
                            "payload": null
                        }
                    },"buttons": [{
                        "label": "button1",
                        "type": "postback",
                        "postback_text": "Load more",
                        "payload": {
                            "url": "http://somewhere.com/button1",
                            "method": "get",
                            "payload": null
                        }
                    }]
                });
            });
        }

    }
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'QISCUS-SDK-APP-ID': 'lucinta-a-glhzm4uglkx',
            'QISCUS-SDK-SECRET': '39c265885f87b74a2c65db9a9989cc7b'
        },
        body: {
            "user_id": "5e3b9b1f20f83706c9f33ae4@vutura",
            "room_id": datas.roomId,
            "type": payload.type,
            "payload": {
                cards: payload.cards
                // "user_id": "guest-101",
                // "room_id": "9832314",
                // "type": payload.type,
                // "payload": {
                //     text:payload.text,
                //     buttons:payload.buttons
                // }
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
            "room_id": data.roomId,
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

const messageAnalytic = async (data) => {
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
            "room_id": data.roomId,
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

const sendQiscusCard = async (body) => {
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
    };
    const res = rp(options).then(res => {
        return res;
    }).catch((err) => {
        return err;
    });
    return res;
};

const proccessAction = async (data) => {
    console.log(data.message)
    const indexConstants = CONSTANTS.type.findIndex(element => element === data.message.toLowerCase());
    console.log(indexConstants)
    const resultTests = await nlp.nlpTest(data.message);
    let result;
    const staticConditionProduct = ['product', 'layanan']
    if (staticConditionProduct.includes(data.message.toLowerCase())) {
        data.message = 'Product atau layanan apa yang kamu cari ?';
        result = await sendDefensiveMessage(data);
        const product = await detail_product.get(data);
        console.log(product)
        const results = await sendQiscus(data, CONSTANTS.bodyQiscus, product);
        console.log(JSON.stringify(results, 0, 2))
    }


    switch (indexConstants) {
        case 0:
            data.message = 'Product atau layanan apa yang kamu cari ?';
            result = await sendDefensiveMessage(data);
            const product = await detail_product.get(data);
            const results = await sendQiscus(data, CONSTANTS.bodyQiscus, product);
            console.log(JSON.stringify(results, 0, 2))
            break;
        case 1: result = await policies.list(data); break;
        case 2: 
            let resultListTicket = await analytics.getListFromElastic();
            let dataToMessage = {
                roomId : data.roomId,
                message : 'Menampilkan laporan status ticket aduan \n \n Format : \n Laporan pengaduan MyTds seminggu kebelakang. \n Total Tiket ' + resultListTicket.hits.total
            };
            result = await messageAnalytic(dataToMessage);
            break;
        default:
            const resultTest = await nlp.nlpTest(data.message);
            // console.log(resultTest.data);
            const newStr = tokenizer.tokenize(data.message.toLowerCase());
            let f = { condition:false};
            for (let index = 0; index < newStr.length; index++) {
                const str = newStr[index];
                // console.log(resultTest.data)
                if (resultTest.data[0].value !== resultTest.data[5].value) {
                    f.condition = 'next'
                    f.text = 'possible'
                    f.value = resultTest.data[0].label
                    break;
                }if (resultTest.data[0].value === resultTest.data[5].value) {
                    if (resultTest.data[4].label.toLowerCase().includes(str)) {
                        f.condition = true
                        break;
                    }else{
                        f.condition = false
                        f.text = 'ohno!'
                        f.value = resultTest.data[0].label
                        break;
                    }
                    
                }else{
                    f.condition = 'next'
                    f.text = 'impossible'
                    f.value = resultTest.data[0].label
                    break;
                }
            }
        

            console.log(f)

            if (f.condition === false) {
                data.message = 'Maaf, Carissa masih mencoba memahami maksud anda.\nSilakan kembali ke Menu untuk melihat informasi yang Lucinta sediakan';
                result = await sendDefensiveMessage(data);
                break;
            }else if (f.condition === 'next') {
                data.message = f.value;
                result = await sendDefensiveMessage(data);
                break;
            }

            const indexPdf = CONSTANTS.pdf.findIndex(element => element === resultTest.data[0].label);
            if(indexPdf > -1) {
                switch(indexPdf) {
                    case 0: result = await policies.SSTFSC(data); break;
                    case 1: result = await policies.AMALCFUE(data); break;
                    default: 
                        data.message = 'Maaf, Carissa masih mencoba memahami maksud anda.\nSilakan kembali ke Menu untuk melihat informasi yang Lucinta sediakan';
                        result = await sendDefensiveMessage(data);
                        break;
                }
            } else {
                data.message = 'Mungkin ini product yang kamu cari :)';
                result = await sendDefensiveMessage(data);
                const resultApi = await detail_product.search(data, resultTest.data[0].label);

                const body = {
                    "user_id": "5e3b9b1f20f83706c9f33ae4@vutura",
                    "room_id": data.roomId,
                    "type": "card",
                    "payload": {
                        "text": resultTest.data[0].label,
                        "image": "http://url.com/gambar.jpg",
                        "title": resultTest.data[0].label,
                        "description": resultTest.data[0].label,
                        "url": "http://url.com/baju?id=123&track_from_chat_room=123",
                        "buttons": [
                            {
                                "label": "button1",
                                "type": "postback",
                                "payload": {
                                    "url": "http://somewhere.com/button2?id=123",
                                    "method": "get",
                                    "payload": null
                                }
                            },
                            {
                                "label": "button2",
                                "type": "link",
                                "payload": {
                                    "url": "http://somewhere.com/button2?id=123",
                                    "method": "get",
                                    "payload": null
                                }
                            }
                        ]
                    }
                    }

                const resultCard = await sendQiscusCard(body);
                console.log(JSON.stringify(resultCard, 0, 2))
                break;
            }
            // console.log(resultTest.data[0].label, resultTest.data[0].label.includes(data.message))
            // if (resultTest.err || !resultTest.data[0].label.toLowerCase().includes(data.message.toLowerCase())) {
               
            // }

           
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