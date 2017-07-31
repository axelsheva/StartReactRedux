import React, { Component } from 'react'
import { connect } from 'react-redux'
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
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  welcome: state.state,
})

export default connect(mapStateToProps)(App)
