var client = require('./connection_elastic');

const searchTicket = async () => {
    let dateNow = new Date().toISOString();
    let dateMinus7Days = new Date(new Date().setDate(new Date().getDate()-30)).toISOString();
    let result = new Promise((resolve, reject) => {
        client.search({  
            index: 'ticket',
            type: '_doc',
            body: {
              query: {
                  range: {
                    createdAt: {
                        gte: dateMinus7Days,
                        lte: dateNow
                    }
                  }
              },
            }
          }, (error, response, status) => {
            if (error) {
                reject(error);
              }
              resolve({
                response: response,
                status: status
              });
        });
    });

    return Promise.resolve(result)
        .then((res) => {
            return res.response;
        })
        .catch((err) => {
            console.log('error');
            return null;
        });
}

module.exports = {
    searchTicket
}