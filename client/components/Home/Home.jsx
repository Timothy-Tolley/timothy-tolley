import React from 'react'
import {connect} from 'react-redux'

import './home.css'

class Home extends React.Component {
  render () {
    return (
      <div className = 'home-container'>
        <h1 className = 'home-header'> TIMOTHY TOLLEY </h1>
        <h1 className = 'home-header'> FREELANCE </h1>
      </div>
    )
  }
}

export default connect()(Home)
