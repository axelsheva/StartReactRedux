import React, { Component } from 'react'
import { fetchData } from '../actions'
import { connect } from 'react-redux'
import '../assets/css/Data.css'

class Data extends Component {
  componentDidMount() {
    const { fetchData } = this.props

    // Need setTimeout for delay between actions
    // otherwise all actions have equal timestamp
    fetchData(1000, 'First req')
    setTimeout(() => fetchData(3000, 'Second req'), 0) // this request will come last
    setTimeout(() => fetchData(2000, 'Last req'), 1) // this request needs to be saved
  }

  render() {
    const { data } = this.props

    return (
      <div className="Data">{data}</div>
    )
  }
}

const mapStateToProps = ({ lastReq: { data } }) => ({
  data,
})

const actions = {
  fetchData,
}

export default connect(mapStateToProps, actions)(Data)