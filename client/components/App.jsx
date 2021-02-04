import React from 'react'
import { Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import Form from './Form'
import Result from './Result'

function App () {
  return (
    <div className='container-fluid'>
      <Route path='/' component={Nav} />
      <Route exact path='/' component={Home} />
      <Route path='/form' component={Form} />
      <Route path='/result' component={Result} />
    </div>
  )
}

export default App
