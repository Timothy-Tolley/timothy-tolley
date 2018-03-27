import React from 'react'
import {connect} from 'react-redux'

import './home.css'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import Projects from '../Projects/Projects'

class Home extends React.Component {
  render () {
    return (
      <div className = 'home-container'>
        <Banner />
        <Projects />
        <Contact />
      </div>
    )
  }
}

export default connect()(Home)
