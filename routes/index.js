// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// const passport = require('passport')
// const LocalStrategy = require('passport-local')



// 準備引入路由模組
const todos = require('./todos')
const users = require('./users')

router.use('/todos', todos)
router.use('/users', users)

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/register', (req, res) => {
  return res.render('register')
})

router.get('/login', (req, res) => {
  return res.render('login')
})

router.post('login', (req, res) => {
  return res.render('req.body')
})

router.post('logout', (req, res) => {
  return res.render('logout')
})
// 匯出路由器
module.exports = router