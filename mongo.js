var MongoClient = require('mongodb').MongoClient


MongoClient.connect('mongodb://127.0.0.1:27017/users', function(err, db) {
    if(err) throw err;

    var collection = db.collection('user_details');
    

    // Locate all the entries using find
        
    collection.find().toArray(function(err, items) {

            for(var i in items){
               console.log(items[i].first_name+' '+items[i].last_name); 
            }
        });
});

