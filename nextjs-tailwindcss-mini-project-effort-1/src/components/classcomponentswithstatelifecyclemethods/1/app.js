"use client"
import React, { Component } from 'react'

export default class ClassCompWithStates extends Component {
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }

    componentDidMount(){
        //code to run after component mounts
    }

    componentDidUpdate(){
        // code to run after updating occurs
    }

    componentWillUnmount(){
        // cleanup before component mounts
    }
  render() {
    return (
      <div>
        <p>clicked {this.state.count}</p>
        <button onClick={() => this.setState({count:this.state.count + 1})}>Click me</button>
      </div>
    )
  }
}
