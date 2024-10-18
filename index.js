const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.get('/shout', (req, res) => {
  let name = req.query.name;
  let convertUpperCase = name.toUpperCase();
  res.send(convertUpperCase);
});

app.get('/fullname', (req, res) => {
  let firstName = req.query.firstName;
  let lastName = req.query.lastName;
  let fullName = firstName + ' ' + lastName;
  res.send(fullName);
});

app.get('/date', (req, res) => {
  let month = req.query.month;
  let year = req.query.year;
  let date = month + ', ' + year;
  res.send(date);
});

app.get('/greet', (req, res) => {
  let name = req.query.name;
  let greet = 'Namaste, ' + name + '!';
  res.send(greet);
});

app.get('/address', (req, res) => {
  let street = req.query.street;
  let city = req.query.city;
  let state = req.query.state;
  let address = street + ', ' + city + ', ' + state;
  res.send(address);
});

app.get('/total-distance', (req, res) => {
  let dist1 = parseFloat(req.query.distance1);
  let dist2 = parseFloat(req.query.distance2);
  let toalDistance = dist1 + dist2;
  res.send(toalDistance.toString());
});

app.get('/check-number', (req, res) => {
  let num = parseFloat(req.query.number);
  if (num > 0) res.send('Number is positive');
  res.send('Number is negative');
});

function getWelcomeMsg(){
  return 'Welcome to our service!'
}

app.get('/welcome', (req, res)=>{
  res.send(getWelcomeMsg());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
