import React from 'react'
import './formLayout.css'

export default (props) => (
  <div className="formLayout-body">
    <form onSubmit={props.handleSubmit}>
      <div >
        <input type="text" name="title" onChange={props.handleInput} placeholder="Titulo" />
      </div>
      <div >
        <input type="text" name="responsible" onChange={props.handleInput} placeholder="Responsable" />
      </div>
      <div >
        <input type="text" name="description" onChange={props.handleInput} placeholder="Descripción" />
      </div>
      <div>
        <select name="priority" onChange={props.handleInput}>
          <option value="low">Baja</option>
          <option value="medium">Media</option>
          <option value="high">Alta</option>
        </select>
      </div>
      <button type="submit">Enviar</button>
    </form>
  </div>
)