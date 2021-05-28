const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
//const {default: result} = require('../screens/ResultScreen');
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());

var mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'myacademy',
  multipleStatements: true,
});

mysqlConnection.connect((err) => {
  if (!err) console.log('Connection Established Successfully');
  else console.log('Connection Failed!' + JSON.stringify(err, undefined, 2));
});

app.get('/', (req, res) => {
  res.json({
    message:
      'Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes.',
  });
});

// app.get("/learners", (req, res) => {
//     mysqlConnection.query("SELECT * FROM items", (err, rows, fields) => {
//       if (!err) res.send(rows);
//       else console.log(err);
//     });
//   });
app.get('/admin', (req, res) => {
  const {username, password} = req.query;
  console.log(req.query, 'Database');
  mysqlConnection.query(
    'SELECT * FROM admin WHERE username = ? and password = ?',
    [username, password],
    (err, rows, fields) => {
      if (rows.length === 0) {
        res.send({message: 'Username not found'});
      } else {
        if (!err) res.send(rows);
        else res.send(err);
      }
    },
  );
});

app.get('/student', (req, res) => {
  const {username, password} = req.query;
  console.log(req.query, 'Database');
  mysqlConnection.query(
    'SELECT * FROM student WHERE username = ? and password = ?',
    [username, password],
    (err, rows, fields) => {
      if (rows.length === 0) {
        res.send({message: 'Username not found'});
      } else {
        if (!err) res.send(rows);
        else res.send(err);
      }
    },
  );
});

app.get('/studentDetails', (req, res) => {
  const {username} = req.query;
  console.log(req.query, 'Profile username');
  mysqlConnection.query(
    'SELECT * FROM student where username=?',
    [username],
    (err, rows, fields) => {
      if (rows.length === 0) {
        res.send({message: 'Profile Username not found'});
      } else {
        if (!err) res.send(rows);
        else res.send(err);
      }
    },
  );
});

app.get('/studentList', (req, res) => {
  console.log('req value', req);
  mysqlConnection.query('SELECT * FROM student', (err, rows, fields) => {
    if (rows.length === 0) {
      res.send({message: 'No students found'});
    } else {
      if (!err) res.send(rows);
      else res.send(err);
    }
  });
});

app.get('/result', (req, res) => {
  const {username} = req.query;
  console.log(req.query, 'result username');
  mysqlConnection.query(
    'SELECT * FROM result where username=?',
    [username],
    (err, rows, fields) => {
      if (rows.length === 0) {
        res.send({message: 'Result Username not found'});
      } else {
        if (!err) res.send(rows);
        else res.send(err);
      }
    },
  );
});

app.get('/getFeeDetails', (req, res) => {
  const {username} = req.query;
  console.log('fee username', req.query);
  // console.log(req);
  mysqlConnection.query(
    'SELECT * FROM fee where username=?',
    [username],
    (err, rows, fields) => {
      if (rows.length === 0) {
        res.send({message: 'Fee username not found'});
      } else {
        if (!err) res.send(rows);
        else res.send(err);
      }
    },
  );
});

app.post('/student', (req, res) => {
  const {
    full_name,
    address,
    phone_number,
    email,
    faculty,
    username,
    password,
    confirm_password,
  } = req.body;
  console.log(req.body, 'database');
  mysqlConnection.query(
    'SELECT * FROM student WHERE username = ?',
    [username],
    (err, rows, fields) => {
      if (err) {
        return res.send(err);
      }
      console.log(rows);
      if (rows.length > 0) {
        res.send({message: 'Username already exists', status: 422});
      } else {
        var sql = `INSERT INTO student 
    (full_name, address, phone_number, email, faculty, username, password, confirm_password) 
    VALUES 
    (?,?,?,?,?,?,?,?)`;
        mysqlConnection.query(
          sql,
          [
            full_name,
            address,
            phone_number,
            email,
            faculty,
            username,
            password,
            confirm_password,
          ],
          function (err, result) {
            if (err) {
              console.log('error', err);

              return res.send(err);
            }
            return res.send({
              status: 200,
              data: result,
            });
          },
        );
      }
    },
  );
});

app.post('/result', (req, res) => {
  const {username, sub1, sub2, sub3, sub4} = req.body;
  console.log(req.body, 'result database');
  mysqlConnection.query(
    'SELECT * FROM result where username=?',
    [username],
    (err, rows, fields) => {
      if (err) {
        return res.send(err);
      }
      console.log(rows);
      if (rows.length > 0) {
        rows.send({message: 'Result already exists!', status: 422});
      } else {
        var sql = `INSERT INTO result 
        (username, subject1, subject2, subject3, subject4)
        VALUES
        (?,?,?,?,?)`;
        mysqlConnection.query(
          sql,
          [username, sub1, sub2, sub3, sub4],
          function (err, result) {
            if (err) {
              console.log('error', err);
              return res.send(err);
            }
            return res.send({
              status: 200,
              data: result,
            });
          },
        );
      }
    },
  );
});

app.post('/fee', (req, res) => {
  const {username, month, monthlyFee, dueFee, discount, totalFee} = req.body;
  console.log(req.body, 'fee database');
  console.log('fee server username', username);
  mysqlConnection.query(
    'SELECT * FROM fee where username=?',
    [username],
    (err, rows, fields) => {
      if (err) {
        return res.send(err);
      }
      console.log('rows', rows);
      if (rows.length > 0) {
        rows.send({message: 'fee already exists!', status: 422});
      } else {
        var sql = `INSERT INTO fee 
        (username, month, monthlyfee, duefee, discount, totalfee)
        VALUES
        (?,?,?,?,?,?)`;
        mysqlConnection.query(
          sql,
          [username, month, monthlyFee, dueFee, discount, totalFee],
          function (err, result) {
            if (err) {
              console.log('error', err);
              return res.send(err);
            }
            return res.send({
              status: 200,
              data: result,
            });
          },
        );
      }
    },
  );
});

app.post('/payment', async function (req, res) {
  try {
    console.log('akjsd');
    const result = await axios({
      method: 'post',
      url: 'https://khalti.com/api/v2/payment/verify/',
      data: {
        token: await req.body.token,
        amount: await req.body.amount,
      },
      headers: {
        Authorization: 'Key test_secret_key_efa3ca47efda4f8ab945d662c08be052',
        'Content-Type': 'application/json',
      },
    });
    console.log('result', result);

    if (result.status == 200) {
      const paymentDetails = {
        full_name: result.data.user.name,
        contact_number: result.data.user.mobile,
        amount: result.data.amount / 100,
        transaction_date: result.data.created_on,
        status: result.data.state.name,
      };
      mysqlConnection.query(
        'Insert into payment set ?',
        [paymentDetails],
        (error, results) => {
          if (error) {
            return res.json({status: 'error', message: error.message});
          } else {
            console.log(results);
            return res.send({status: 'success', data: 'Payment Successful'});
          }
        },
      );
    }
  } catch (error) {
    //console.log(error);
    return res.json({status: 'error', message: error.message});
  }
});

const port = process.env.PORT || '3000';
app.listen(port);

console.log('running on port 3000');
