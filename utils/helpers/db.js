var client = require('./connection_elastic');

const searchTicket = async () => {
    client.search({  
        index: 'ticket',
        type: '_doc',
        body: {
          query: {
              range: {
                createdAt: {
                    gte: '2019-01-16T04:37:13.497Z',
                    lte: '2020-01-16T04:37:13.497Z'
                }
              }
          },
        }
      },function (error, response,status) {
          if (error){
            console.log("search error: "+error)
          }
          else {
            return response.hits;
          }
      });
}

module.exports = {
    searchTicket
}