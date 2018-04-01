import React from 'react'
import {connect} from 'react-redux'

import './home.css'
// import Banner from '../Banner/Banner'
// import Contact from '../Contact/Contact'
// import Projects from '../Projects/Projects'
import PlaceHolder from '../PlaceHolder/PlaceHolder'

class Home extends React.Component {
  render () {
    return (
      <div className = 'home-container'>
        <PlaceHolder />
        {/* <Banner />
        <Projects />
        <Contact /> */}
      </div>
    )
  }
}

export default connect()(Home)
