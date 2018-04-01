import React from 'react'
import {connect} from 'react-redux'

import './placeholder.css'

class PlaceHolder extends React.Component {
  render () {
    return (
      <div className = 'placeholder-container'>
        <div className = 'placeholder-content'>
          <h1 className = 'placeholder-header'> Timothy Tolley Freelance</h1>
          <h2 className = 'placeholder-header2'> Web Development Services for Small Businesses </h2>
          <p className = 'placeholder-text'> Thanks for Stopping By!</p>
          <p className = 'placeholder-text'> My full website is coming soon but in the meantime, feel free to get in touch below! </p>
          <div className = 'placeholder-link-cont'>
            <a href="mailto:timothytolley@outlook.com" className = 'placeholder-link'>
              <img src = '/images/mail.png' alt = 'mail logo' className = 'ext-logo'/>
            </a>
            <a href="https://github.com/Timothy-Tolley" target= '_blank' rel = 'noopener noreferrer' className = 'placeholder-link'>
              <img src = '/images/github.png' className = 'ext-logo' alt = 'github logo'/>
            </a>
            <a href="https://www.linkedin.com/in/timothy-tolley/" target= '_blank' rel = 'noopener noreferrer' className = 'placeholder-link'>
              <img src = '/images/linkedin.png' className = 'ext-logo' alt = 'github logo'/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default connect()(PlaceHolder)
