import React from 'react';
import ReactDOM from 'react-dom';
import PrimeraApp from './PrimeraApp';

import './styles.css';

const divRoot = document.querySelector('#root');

ReactDOM.render(<PrimeraApp saludo="Hola soy Goku!"/>, divRoot);
