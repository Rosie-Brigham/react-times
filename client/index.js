import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'
import SongForm from './components/Form'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <SongForm />,
    document.getElementById('app')
  )
})
