import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import {BrowserRouter as Router} from 'react-router-dom'
import {createStore, applyMiddleware, compose} from 'redux'

import reducers from './reducers'
import App from './components/App'

let store = createStore(reducers, compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>,
    document.getElementById('app')
  )
})
