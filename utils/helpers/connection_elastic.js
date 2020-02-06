var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    'http://elasticsearch-tds-customer.vsan-apps.playcourt.id/'
  ]
});

module.exports = client;