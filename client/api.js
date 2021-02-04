import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1/budgets'

function getApi () {
  request.get(serverURL)
    .then(result => {
      return result.body
    })
    .catch(err => console.error(err.message))
}

module.exports = getApi
