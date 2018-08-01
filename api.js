const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
var util = require("util"); 

// Connection URL
const url = 'mongodb://readonly:turner@ds043348.mongolab.com:43348/dev-challenge';

// Database Name
const dbName = 'dev-challenge';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
  db.collection("dev-challenge").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    client.close();
  });



  //console.log("This is the DB  "+ util.inspect(db));
  client.close();
});
