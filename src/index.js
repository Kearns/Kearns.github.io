import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

document.addEventListener("DOMContentLoaded", function(event) { 
  const listingState = window._physicianListings
  
  
  ReactDOM.render(
      <App initialState={{}}/>,
      document.getElementById('App')
    );
})