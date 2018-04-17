  // import './src/style/app.css';
  // import './src/stylus/app.styl';
  
  // // import imgSrc from './src/assets/images/test1.jpg';
  // const imgSrc = require('./src/assets/images/test1.jpg');

  // var root = document.getElementById('app');

  // root.innerHTML = 'Hello World212234563';

  // const img = new Image();

  // img.onload = function() {
  //   document.body.appendChild(img);
  // }

  // img.src = imgSrc; 

  // console.log(imgSrc); // data: base64 格式的图片, 设置大小后，转化为路径

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
