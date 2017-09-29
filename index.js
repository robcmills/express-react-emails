'use strict'

const express = require('express')
const app = express()

const bcRouter = require('./bc-router')
const mjmlRouter = require('./mjml-router')

app.get('/', function (req, res) {
  res.redirect('/bc/reset-password')
})

bcRouter.init(app)
mjmlRouter.init(app)

console.log('Server listening on port 3333')

app.listen(3333)
