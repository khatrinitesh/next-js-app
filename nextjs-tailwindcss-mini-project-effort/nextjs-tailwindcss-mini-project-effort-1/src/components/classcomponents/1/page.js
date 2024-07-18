"use client"
import React, { Component } from 'react'

export default class ClassComp extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
      </div>
    )
  }
}
