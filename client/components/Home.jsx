import React from 'react'

function Home () {
  return (
    <div className='row'>
      <div className='title-div'>
        <h1 className='mainTitle'>Saving Money, Made Easy</h1>
        <button className='btn btn-lg dload-btn'><i className='fab fa-apple'></i> Download</button>
      </div>
      <div className='img-div'>
        <img className='main-pic' src='/images/illus.png' alt='iphone-mockup'/>
      </div>
    </div>
  )
}

export default Home
