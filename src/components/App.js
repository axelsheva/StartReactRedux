import React, { Component } from 'react'
import { connect } from 'react-redux'
import Data from './Data'
import logo from '../assets/images/logo.svg'
import '../assets/css/App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.welcome}</h2>
        </div>
        <Data />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  welcome: state.state,
})

export default connect(mapStateToProps)(App)
