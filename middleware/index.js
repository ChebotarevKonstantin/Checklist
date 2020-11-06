module.exports = function(app) {
  const cookieParser = require('cookie-parser')
  const express = require('express')
  const session = require('express-session')
  const FileStore = require('session-file-store')(session)
  const logger = require('morgan')
  const mongoose = require('mongoose')
  const path = require('path')

  mongoose.connect('mongodb://localhost:27017/NIIVS', {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })
  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, '..', 'views'))

  app.use(express.urlencoded({extended: true}))
  app.use(express.json())
  app.use(express.static(path.join(__dirname, '..', 'public')))
  app.use(logger('dev'))
  app.use(cookieParser())

  app.use(session({
    name: 'user_sid',
    resave: false,
    saveUninitialized: false,
    secret: 'wofls',
    store: new FileStore({}),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
      httpOnly: true,
    }
  }))

}
