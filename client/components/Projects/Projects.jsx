import React from 'react'
import {connect} from 'react-redux'

import './projects.css'

class Projects extends React.Component {
  render () {
    return (
      <div className = 'projects-container'>
        <h1 className = 'projects-header'> PROJECTS </h1>
      </div>
    )
  }
}

export default connect()(Projects)
