//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); //destructuring

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    //deleteMany

    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     if(err)
    //         console.log('Unable to delete the Todo');
    // });

    //deleteOne

    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     if(err)
    //         console.log('Unable to delete the Todo');
    // });

    //findOneAndDelete

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     if(err)
    //         console.log('Unable to delete the Todo');
    // });

    // db.collection('Users').deleteMany({name: 'Darshak'}).then((result) => {
    //     console.log(result);
    // }, (err) => {
    //     if(err)
    //         console.log('Unable to delete the Todo');
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5bba01f9b58cdf035271b992")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    }, (err) => {
        if(err)
            console.log('Unable to delete the Todo');
    });

    client.close();
});