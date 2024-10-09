const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

app.use(session({
  secret: 'your secret key',
  resave: false,
  saveUninitialized: true,
}));

const db = mysql.createConnection({
  host: 'localhost',
  port: 33060,
  user: 'root',
  password: '3472525',
  database: 'oracle'
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ', err);
    return;
  }
  console.log('MySQL connected...');
});

app.post('/register', (req, res) => {
  console.log('Received POST request to /register');
  const user = { username: req.body.username, email: req.body.email, password: req.body.password };
  const sql = 'INSERT INTO users SET ?';
  db.query(sql, user, (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      return res.status(500).send('Internal Server Error');
    }
    res.redirect('/login.html');
  });
});

app.post('/login', (req, res) => {
  console.log('Received POST request to /login');
  const username = req.body.username;
  const password = req.body.password;
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Error querying user:', err);
      return res.status(500).send('Internal Server Error');
    }
    if (results.length > 0) {
      req.session.loggedin = true;
      req.session.username = username;
      res.redirect('/profile');
    } else {
      res.send('Invalid credentials');
    }
  });
});

app.get('/profile', (req, res) => {
  if (req.session.loggedin) {
    res.sendFile(path.join(__dirname, 'public', 'profile.html'));
  } else {
    res.send('Please login to view this page!');
  }
});

app.get('/get-username', (req, res) => {
  if (req.session.loggedin) {
    res.json({ username: req.session.username });
  } else {
    res.status(401).send('Not logged in');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
