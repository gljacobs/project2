require('dotenv').config();
const createError = require('http-errors')
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const session = require('express-session')

const indexRouter = require('./routes/index')
const dashboardRouter = require('./routes/dashboard')
const profileRouter = require('./routes/profile')
const registrationRouter = require('./routes/register')

var db = require("./models");

const app = express()
const fileUpload = require("express-fileupload");
app.use(fileUpload());

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use(session({
  secret: process.env.APP_SECRET,
  resave: true,
  saveUninitialized: false,
}))

var PORT = process.env.PORT || 8080;




app.use('/', indexRouter)
app.use('/dashboard', dashboardRouter)
app.use('/profile', profileRouter)
app.use('/register', registrationRouter)
app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/')
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    });
  });

module.exports = { app }

