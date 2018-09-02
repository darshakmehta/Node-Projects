const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found.',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.send([{
        name: 'Darshak',
        age: 12
    }, {
        name: 'Akshay',
        age: 14
    }, {
        name: 'Vikram',
        age: 24
    }, {
        name: 'Suresh',
        age: 25
    }]);
});

app.listen(3000);
module.exports.app = app;