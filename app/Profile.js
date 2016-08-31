import React, { Component } from 'react'
import Router from 'react-router'

class Profile extends Component {
  render(){
    return (
      <div className="row">
        <div className="col-md-4">
          first Component
        </div>
        <div className="col-md-4">
          second Component
        </div>
        <div className="col-md-4">
          third Component
        </div>
      </div>
    )
  }
}

module.exports = Profile