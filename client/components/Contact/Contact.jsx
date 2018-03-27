import React from 'react'
import {connect} from 'react-redux'

import './contact.css'

class Contact extends React.Component {
  render () {
    return (
      <div className = 'contact-container'>
        <p> To make an inquiry fill out the form below ... </p>
        <form className = 'contact-form'>
          <label value = 'Your Name'>
            <input placeholder = 'Your Name' name = 'name'/>
          </label>
          <label value = 'Your Email'>
            <input placeholder = 'Your Email' name = 'email'/>
          </label>
          <label value = 'Subject'>
            <input placeholder = 'Subject' name = 'subject'/>
          </label>
          <label value = 'Message'>
            <textarea placeholder = 'Your Message Here' name = 'message'/>
          </label>
        </form>
      </div>
    )
  }
}

export default connect()(Contact)
