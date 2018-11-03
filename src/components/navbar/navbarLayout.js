import React from 'react'
import './navbarLayout.css'

export default (props) => (
  <header>
    <nav>
      <div>
        <a href='/'>Priorize <span>{props.counter}</span></a>
      </div>
      <div>
        <a href='/login'>Home</a>
      </div>
      <div>
        <a href='/login'>GitHub</a>
      </div>
    </nav>
  </header>
)