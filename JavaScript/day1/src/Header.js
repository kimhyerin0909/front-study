/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

export default function Header() {
    return (
      <header>
          <nav className='nav'>
            <img src="./logo512.png" width="40px" className='nav-logo'/>
            <ul className='nav-items'>
              <li>Pricing</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </header>
    )
  }