import React from 'react'
import './formLayout.css'

export default (props) => (
  <div className="formLayout-body">
    <form onSubmit={props.handleSubmit}>
      <div >
        <input type="text" name="title" onChange={props.handleInput} placeholder="Title" required/>
      </div>
      <div >
        <input type="text" name="responsible" onChange={props.handleInput} placeholder="Responsable" required/>
      </div>
      <div >
        <input type="text" name="description" onChange={props.handleInput} placeholder="Description" required/>
      </div>
      <div>
        <select name="priority" onChange={props.handleInput}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
)