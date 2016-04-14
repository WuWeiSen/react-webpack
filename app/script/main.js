'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx'; // ES6
// var Hello = require('./component.jsx'); // CommonJS
main();

function main() {
    ReactDOM.render(<Hello />, document.getElementById('app'));
}

