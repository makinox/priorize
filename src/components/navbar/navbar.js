import React from 'react';
import Logo from '../../assets/logo.svg';
import './navbarLayout.css';

export default function navbar({ counter }) {
  return (
    <header>
      <nav>
        <section>
          <div>
            <img src={Logo} alt="Priorize logo" />
            <span>riorize</span>
            <span>{counter}</span>
          </div>

          <div>
            <a target="_blank" rel="noreferrer" href="https://jesusbossa.dev">
              <i className="fas fa-home"></i>
            </a>
            <a target="_blank" rel="noreferrer" href="https://twitter.com/jesMakinox">
              <i className="fab fa-twitter-square"></i>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/makinox">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </section>
      </nav>
    </header>
  );
}
