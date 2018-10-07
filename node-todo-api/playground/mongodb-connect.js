//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructuring

// var user = {
//     name: 'Darshak',
//     age: 24
// }
// var {name} = user;
// console.log(name); //destructuring

//Let mongodb handle _id for us

// var obj = new ObjectID();
// console.log(obj); //unique id each time

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp')
    
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Darshak',
    //     age: 24,
    //     location: 'Charlotte'
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //      console.log(result.ops[0]._id.getTimestamp());
    // })

    client.close();
}); //First parameter AWS or Heroku URL for production