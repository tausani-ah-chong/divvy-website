const express = require('express')

const routes = express.Router()

const db = require('../db/db')

routes.get('/', (req, res) => {
  db.getAllBudgets()
    .then(result => {
      return res.json(result)
    })
    .catch(err => console.error(err.message))
})

routes.post('/', (req, res) => {
  const newData = req.body
  db.saveBudget(newData)
    .then(result => {
      return res.json(result)
    })
    .catch(err => err.message)
})

module.exports = routes
