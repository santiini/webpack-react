// window.onload = function () {
//   var root = document.getElementById('app');

//   root.innerHTML = 'Hello World111111111';
// }

import React from 'react';
import { render } from 'react-dom';
import App from './src/App';


const renderFunc = Component => {
  render(
    <Component />,
    document.getElementById('app'),
  );
}

renderFunc(App);