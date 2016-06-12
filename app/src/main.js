import React from 'react';
import ReactDom from 'react-dom';

window.App = {
  render:  () => {
    ReactDom.render(
      <div>hi</div>,
      document.getElementById('root')
    );
  }
};