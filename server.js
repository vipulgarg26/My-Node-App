const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

const app = express();

const port = 8000;
console.log(db.url);
app.use(bodyParser.urlencoded({extended : true}));

MongoClient.connect('mongodb://vipul:123456@ds213199.mlab.com:13199/note-app', (err, database) => {
    if (err) return console.log(err);
    require('./app/routes')(app, database);
    app.listen(port, () => {
        console.log(`We are listening on ${port}`);
    })
})
