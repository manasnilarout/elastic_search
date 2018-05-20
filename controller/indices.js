'use strict';
  
const elasticsearch = require('elasticsearch');
const esClient = new elasticsearch.Client({
  host: 'https://search-osmosys-demo-3qebqxmptztuvd72zmhj6kbg64.us-east-1.es.amazonaws.com/',
  log: 'error'
});
  
// only for testing purposes
// all calls should be initiated through the module
const test = async function test() {
  console.log(`elasticsearch indices information:`);
  let results = await esClient.cat.indices({v: true})
  return results;
};

module.exports = test;