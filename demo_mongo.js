var MongoClient = require('mongodb').MongoClient;
var url="mongodb://localhost:3000/mydb";

MongoCLient.connect(url,function(err,db){
if(err) throw err;
console.log("database");
db.close();
});
