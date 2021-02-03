import React from 'react'

function Nav () {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
      <a className='navbar-brand' href='/'>
        divvy.
      </a>
      <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarSupportedContent' ari-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' style={{ justifyContent: 'flex-end' }} id='navbarSupportedContent'>
        <ul className='navbar-nav ml-auto d-flex'>
          <li className='nav-item'>
            <a className='nav-link' href='/'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#/form'>
              Enter Budget
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href=''>
              Download
            </a>
          </li>
          <li>
            <a href="" className='btn nav-btn'>
              Log in
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
