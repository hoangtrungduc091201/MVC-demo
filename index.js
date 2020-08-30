//MVC modal-views-controllers
const express = require('express');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

var userRoute = require('./routes/user.route.js');
var authRoute = require('./routes/auth.route.js');
var productRoute = require('./routes/product.route.js');

var authMiddleware = require('./middlewares/auth.middleware');

var port = 3002;

const app= express();

app.set('view engine', 'pug');
app.set('views', './views');
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser('adsadaweqweqeq'));

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index',{//path: index.pug
      name:'Trung Duc'
  })
})
app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth', authRoute);
app.use('/products', productRoute);
// lưu ý url kiểu :/products/router.get('..').
// /products/
// or /users/search
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })