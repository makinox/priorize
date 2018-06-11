import React, { Component } from 'react'

class Formz extends Component {
  
  constructor() {
		super()
		this.state = {
			title: '',
			responsible: '',
			description: '',
			priority: 'low'
    }
    this.handleInput = this.handleInput.bind(this);
  }
  
  handleInput(e) {
    // console.log(e.target.value, e.target.name)
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
    // console.log(this.state)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onCustomOne(this.state)
    // console.log(this)
    console.log('enviando')
  }

	render() {
		return (
			<div className="card">
				<form action="" className="card-body" onSubmit={this.handleSubmit}>
					<div className="form-group">
            <input 
            type="text"
            name="title"
            onChange={this.handleInput}
            className="form-control" 
            placeholder="Titulo"
            />
					</div>
					<div className="form-group">
            <input 
            type="text" 
            name="responsible" 
            onChange={this.handleInput}
            className="form-control" 
            placeholder="Responsable"
            />
					</div>
					<div className="form-group">
            <input 
            type="text" 
            name="description" 
            onChange={this.handleInput}
            className="form-control" 
            placeholder="Descripcion"
            />
					</div>
					<div className="form-group">
						<select name="priority" className="form-control" onChange={this.handleInput}>
							<option value="low">Baja</option>
							<option value="medium">Media</option>
							<option value="high">Alta</option>
						</select>
					</div>
					<button className="btn btn-primary" type="submit">Enviar</button>
				</form>
			</div>
		)
	}
}

export default Formz;