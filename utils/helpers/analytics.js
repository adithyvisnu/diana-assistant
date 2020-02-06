const rp = require('request-promise');

const getListTicket = async (data) => {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${data.content}`
        },
        uri: 'https://api-dev.telkomdigitalsolution.co/tickets/ticket/v1/search?page=1&size=100',
        json: true
    }
    const res = rp(options).then(res => {
        return res;
    }).catch((err) => {
        return err;
    });
    return res;
}

module.exports = {
    getListTicket
};