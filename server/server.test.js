const request = require('supertest')
const server = require('./server')

test('GET /api/v1/budgets returns name', () => {
  request(server)
    .get('/api/v1/budgets')
    .type('json')
    .end((err, res) => {
      expect(res.text).toMatch('name')
      expect(err).toBeNull()
    })
})
