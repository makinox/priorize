import React from 'react'
import './taskLayout.css'

export default (props) => (
  <section className="task-container">
    <div className="task">
      {props.tasks.map((tarea, i) => (
        <div className="task-card" key={i}>
          <div className="task-card-header">
            <h4>{tarea.title}</h4>
            {props.addColorToTaskTag(tarea.priority)}
          </div>
          <div className="task-card-body">
            <p>{tarea.reponsible}</p>
            <p>{tarea.description}</p>
          </div>
          <div className="task-card-footer">
            <button onClick={() => props.deleteTask(i)}>Borrar</button>
          </div>
        </div>
      ))}
    </div>
  </section>
)