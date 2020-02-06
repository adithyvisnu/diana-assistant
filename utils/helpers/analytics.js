const rp = require('request-promise');
const dbElastic = require('./db');

const getListFromElastic = async () => {
    const result = await dbElastic.searchTicket();
    return result;
}

module.exports = {
    getListFromElastic
};