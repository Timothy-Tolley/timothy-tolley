import React from 'react'
import {connect} from 'react-redux'

import './banner.css'

class Banner extends React.Component {
  render () {
    return (
      <div className = 'banner-container'>
        <h1 className = 'banner-header'> TIMOTHY TOLLEY</h1>
        <h1 className = 'banner-header'> FREELANCE </h1>
      </div>
    )
  }
}

export default connect()(Banner)
