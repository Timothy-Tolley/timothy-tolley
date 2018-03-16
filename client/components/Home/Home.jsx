import React from 'react'
import {connect} from 'react-redux'

import './home.css'

class Home extends React.Component {
  render () {
    return (
      <div className = 'homeContainer'>
        <h1> HOME </h1>
      </div>
    )
  }
}

export default connect()(Home)
