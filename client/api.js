import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1/budgets'

function getApi () {
  return request.get(serverURL)
    .then(result => {
      console.log(result.body)
      return result.body
    })
    .catch(err => console.error(err.message))
}

export default getApi
