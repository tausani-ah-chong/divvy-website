const express = require('express')

const routes = express.Router()

const db = require('../db')

routes.get('/', (req, res) => {
  db.getAllBudgets()
    .then(result => {
      return res.json(result)
    })
    .catch(err => console.error(err.message))
})

module.exports = routes
