import React from 'react'
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div className='row'>
      <div className='title-div'>
        <h1 className='mainTitle'>
          Saving Money, Made Easy
        </h1>
        <Link to={'/form'}>
          <button className='btn btn-lg dload-btn'>
            Get Started
          </button>
        </Link>
      </div>
      <div className='img-div'>
        <img className='main-pic' src='/images/illus.png' alt='iphone-mockup'/>
      </div>
    </div>
  )
}

export default Home
