//MVC modal-views-controllers
const express = require('express');
const bodyParser = require('body-parser')

var userRoute = require('./routes/user.route.js');
var port = 3002;


const app= express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.render('index',//path: index.pug
     { title: 'Hey', message: 'Hello Trung Duc!' })
  })

app.use('/users', userRoute)
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })