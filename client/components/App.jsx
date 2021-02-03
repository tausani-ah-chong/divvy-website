import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Form from './Form'

function App () {
  return (
    <div className='container-fluid'>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Home} />
      <Route path='/form' component={Form} />
    </div>
  )
}

export default App
