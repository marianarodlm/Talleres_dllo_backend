const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


const taller01Routes = require('./routes/taller01.routes');
const taller02Routes = require('./routes/taller02.routes');
const taller03Routes = require('./routes/taller03.routes');

app.use('/api/taller01', taller01Routes);
app.use('/api/taller02', taller02Routes);
app.use('/api/taller03', taller03Routes);

app.get('/', (req, res) => res.json({ message: 'API Proyecto 01 - Backend' }));

module.exports = app;
