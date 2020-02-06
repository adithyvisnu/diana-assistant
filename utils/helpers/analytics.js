const rp = require('request-promise');
const dbElastic = require('./db');

const getListFromElastic = async (data) => {
    const result = await dbElastic.searchTicket(data);
    return result;
}

module.exports = {
    getListFromElastic
};