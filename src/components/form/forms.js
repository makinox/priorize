import React from 'react'
import FormLayout from './formLayout'

class Formz extends React.Component {
  
  state = {
    title: '',
    responsible: '',
    description: '',
    priority: 'low'
  }
  
  handleInput = (e) => {
    const { value, name } = e.target
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onCustomOne(this.state)
  }

	render() {
		return <FormLayout handleSubmit={this.handleSubmit} handleInput={this.handleInput} />
	}
}

export default Formz;