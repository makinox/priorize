import React from 'react'

export default (props) => (
  props.tasks.map((tarea, i) => (
    <div className="col-md-3" key={i}>
        <div className="card ml-3 mt-3 text-center" >
          <div className="card-header">
            <h4 className="card-title">{tarea.title}</h4>
            {props.addColorToTaskTag(tarea.priority)}
          </div>
          <div className="card-body">
            <h5 className="card-title">{tarea.reponsible}</h5>
            <h6 className="card-text">{tarea.description}</h6>
          </div>
          <div className="card-footer">
            <button className="btn btn-danger" onClick={() => props.deleteTask(i) }>
              Borrar
            </button>
          </div>
        </div>
      </div>
  ))
)