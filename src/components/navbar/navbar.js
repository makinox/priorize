import React, { Component } from 'react'
import NavbarLayout from './navbarLayout'

class Navbarr extends Component {
  state = {
    isOpen: false
  }

  toggle = () => this.setState({isOpen: !this.state.isOpen})

  render() {return <NavbarLayout counter={this.props.counter} toggle={this.toggle} isOpen={this.state.isOpen}/>}
}

export default Navbarr