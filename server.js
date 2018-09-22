const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

//initialising express
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

//middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));

//Home Route
app.get('/', (req,res) => {
  return res.send('home')
})

//Workshop Route
app.get('/workshops', (req,res) => {
  return res.send('workshops')
})

//Guest Lectures Route
app.get('/guestlectures', (req,res)=> {
  return res.send('guestlectures')
})
//Starting Server
app.listen(3000,()=> {
  console.log('Server started on PORT:3000');
})
