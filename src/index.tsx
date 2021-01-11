// function initializeApp() {
//   const saludo = 'Hola gg';
//   const title = document.createElement('h1');
//   title.textContent = saludo;
//   console.log(saludo);
//   document.body.appendChild(title);
// }

// initializeApp();

import React from 'react';
import ReactDOM from 'react-dom';

const App = () => <h1>My React and TypeScript App!</h1>;

ReactDOM.render(<App />, document.getElementById('root'));
