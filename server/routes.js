const express = require('express')

const routes = express.Router()

const db = require('./db')

routes.get('/', (req, res) => {
  db.getBudget(id)
    .then(result => {
      return res.json
    })
})

module.exports = routes
