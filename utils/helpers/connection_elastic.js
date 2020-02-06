var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    'http://elasticsearch-tds-customer.vsan-apps.playcourt.id/'
    // 'https://[username]:[password]@[server]:[port]/',
    // 'https://[username]:[password]@[server]:[port]/'
  ]
});

module.exports = client;  