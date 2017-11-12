import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GoogleApiWrapper from './googlemap'

ReactDOM.render(
  <div>
    <App />
    <br></br><br></br><br></br><br></br><br></br><br></br>
    <GoogleApiWrapper />
  </div>,
  document.getElementById('root')
);

