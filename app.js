const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');
// const logger = require('morgan');
// const session = require('express-session')
// const cookieParser = require('cookie-parser')
// const FileStore = require('session-file-store')(session)
const middleware = require('./middleware')

const apiRouter = require('./routes/router')
const authRouter = require('./routes/auth')

const app = express();
middleware(app) 

// mongoose.connect('mongodb://localhost:27017/auction', {
//   useUnifiedTopology: true,
//   useNewUrlParser: true
// })

// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'views'));
// app.use(express.static(path.join(__dirname, 'public')))
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(logger('dev'));
// app.use(cookieParser())

app.use('/', apiRouter);
app.use('/auth', authRouter);

// app.use(session({
//   name: 'user_sid',
//   resave: false,
//   saveUninitialized: false,
//   secret: 'key',
//   store: new FileStore(),
//   cookie: {
//     maxAge: 1000 * 60 * 60 * 24,
//     // httpOnly: true,
//   }
// }))


module.exports = app;
