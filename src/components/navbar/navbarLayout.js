import React from 'react'
import './navbarLayout.css'

export default (props) => (
  <header>
    <nav>
      <div>
        <a href='/'>Priorize <span>{props.counter}</span></a>
      </div>
      <div>
        <a target="_blank" rel="noopener noreferrer" href='http://jesusbossa.com'>Me</a>
      </div>
      <div>
        <a target="_blank" rel="noopener noreferrer" href='https://github.com/makinox'>GitHub</a>
      </div>
    </nav>
  </header>
)