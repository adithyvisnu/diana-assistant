var elasticsearch=require('elasticsearch');

var client = new elasticsearch.Client( {  
  hosts: [
    'your elastic connection'
  ]
});

module.exports = client;