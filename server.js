const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')

const server = express()

module.exports = server

server.use(express.static(__dirname + '/public'))

server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))

server.set('view engine', 'hbs')

server.use('/', routes)
