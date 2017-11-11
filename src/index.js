import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GoogleApiWrapper from './googlemap'
import TypeFormComponent from './typeform'

ReactDOM.render(
  <div>
    <App />
    <TypeFormComponent />
    <GoogleApiWrapper />
  </div>,
  document.getElementById('root')
);

