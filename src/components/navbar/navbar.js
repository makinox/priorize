import React from 'react';
import './navbarLayout.css';

export default function navbar({ counter }) {
  return (
    <header>
      <nav>
        <div>
          <a href="/">
            Priorize <span>{counter}</span>
          </a>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="http://jesusbossa.com">
            Me
          </a>
        </div>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/makinox">
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
