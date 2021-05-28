const express = require('express');
const router = express.Router();
const axios = require('axios');

router.post('/', async (req, res) => {
  const result = await axios({
    method: 'POST',
    url: 'https://khalti.com/api/v2/payment/verify/',
    data: {
      token: req.body.token,
      amount: req.body.amount,
    },
    headers: {
      Authorization: 'Key test_secret_key_efa3ca47efda4f8ab945d662c08be052',
      'Content-type': 'application/json',
    },
  });
  console.log(result);
});

router.get('/', (req, res) => {
  res.send('Hello');
});

module.exports = router;
