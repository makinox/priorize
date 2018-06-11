import React, { Component } from 'react'

class Form extends Component {
	constructor() {
		super()
		this.state = {
			title: '',
			responsible: '',
			description: '',
			priority: 'low'
		}
	}
	render() {
		return (
			<div className="card">
				<form action="" className="card-body">
					<div className="form-group">
						<input type="text" name="title" className="form-control" placeholder="Titulo"/>
					</div>
					<div className="form-group">
						<input type="text" name="responsible" className="form-control" placeholder="Responsable"/>
					</div>
					<div className="form-group">
						<input type="text" name="description" className="form-control" placeholder="Descripcion"/>
					</div>
					<div className="form-group">
						<select name="priority" className="form-control">
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

export default Form;