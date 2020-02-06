var client = require('./connection_elastic');

const searchTicket = async () => {
    client.search({  
        index: 'ticket',
        type: '_doc',
        body: {
          query: {
            match: { "constituencyname": "Harwich" }
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