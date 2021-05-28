const express = require('express');

const app = express();
const cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/payment', require('../server/payment'));

app.listen(3000, () => {
  console.log('listening to port 3000');
});
