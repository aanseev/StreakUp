const express = require('express');
const app = express();
const port = 1337;
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/notes', (req, res) => {
  res.send('Hello World!');
  // MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  //   if (err) throw err;
  //   const db = client.db('notes');
  //   const collection = db.collection('notes');
  //   collection.find({}).toArray((err, docs) => {
  //     if (err) throw err;
  //     res.json(docs);
  //     client.close();
  //   });
  // });
});