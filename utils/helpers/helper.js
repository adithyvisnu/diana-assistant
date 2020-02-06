const rp = require('request-promise');
const CONSTANTS = require('./constants');
const detail_product = require('./detail_product');
const uri = `https://api.qiscus.com/api/v2.1/rest/post_comment`;
const nlp = require('../helpers/nlp');

const sendQiscus = async (data, product) => {
    // console.log(product)
    const payload = {
            cards:[]
            
        
    }
    for (let index = 0; index < data.length; index++) {
        const bodyQiscus = data[index];
        if (bodyQiscus.type == 'product catalog') {
            payload.type = 'carousel';
            payload.text = 'Product dan Layanan Terpopuler';
            product.data.map(data => {
                payload.cards.push({
                    // label: 'button'+index,
                    data
                });
            });
      }

    }

    // console.log(JSON.stringify(payload, 0, 2))
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
        // console.log(res)
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

const proccessAction = async (data) => {
    const indexConstants = CONSTANTS.type.find(element => element == data.message.toLowerCase());
    let result;
    switch (indexConstants) {
        case 'product catalog':
            data.message = 'Product atau layanan apa yang kamu cari ?';
            result = await sendDefensiveMessage(data);
            setTimeout(async () => {
                const product = await detail_product.get(data);
                const result = await sendQiscus(CONSTANTS.bodyQiscus, product);
                // console.log(JSON.stringify(result, 0, 2))
            }, 100);
            break;
        case 1: await sendQiscus();
        case 2: await sendQiscus();
        case 3: await sendQiscus();
        default:
            const resultTest = await nlp.nlpTest(indexConstants.toString());
            if (resultTest[0].value == resultTest[1].value) {
                data.message = 'Maaf, Lucinta masih mencoba memahami maksud anda.\nSilakan kembali ke Menu untuk melihat informasi yang Lucinta sediakan';
                result = await sendDefensiveMessage(data);
            } else {
                console.log(resultTest[0]);
            }
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