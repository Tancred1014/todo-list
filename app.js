const express = require('express')
const flash = require('connect-flash')
const session = require('express-session')
const app = express()

const { engine } = require('express-handlebars')
const methodOverride = require('method-override')

const router = require('./routes')

const messageHandler = require('./middlewares/message-handler')
const errorHandler = require('./middlewares/error-handler')


const port = 3000

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

app.use(session({
  secret: 'ThisIsSecret',
  resave: false,
  saveUninitialized: false
}))
app.use(flash())

app.use(messageHandler)

app.use(router)

app.use(errorHandler)

app.listen(3000, () => {
  console.log('App is running on port 3000')
})