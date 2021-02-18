exports.seed = function (knex) {
  return knex('budgets').insert([
    { id: 1, name: 'Waiora', income: '750', expenses: '500' },
    { id: 2, name: 'Isoa', income: '1000', expenses: '600' },
    { id: 3, name: 'Ben', income: '500', expenses: '300' }
  ])
}
