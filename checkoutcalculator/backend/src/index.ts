import express from 'express';
import cors from 'cors';

console.log('okay buddy');
const csv = require('csv-parser');
const fs = require('fs');
let results: string[] = [];
let data: unknown = '';
const app = express();
app.use(cors());
const port = 4000;

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
