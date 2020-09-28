import express from 'express';

console.log('okay buddy');
const csv = require('csv-parser');
const fs = require('fs');
let results: string[] = [];
let data: unknown = '';
const app = express();
const port = 3000;

fs.createReadStream('./data.csv')
  .pipe(csv())
  .on('data', (data: string) => results.push(data))
  .on('end', () => {
    app.get('/', (req, res) => {
      res.send(results);
    });
    app.listen(port);
    // [
    //   { NAME: 'Daffy Duck', AGE: '24' },
    //   { NAME: 'Bugs Bunny', AGE: '22' }
    // ]
  });
