"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
console.log('okay buddy');
const csv = require('csv-parser');
const fs = require('fs');
let results = [];
let data = '';
const app = express_1.default();
const port = 3000;
fs.createReadStream('./data.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
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
//# sourceMappingURL=index.js.map