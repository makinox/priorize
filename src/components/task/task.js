import React from 'react';
import './taskLayout.css';

export default function Task({ task, deleteTask }) {
  function addColorToTaskTag(tag) {
    switch (tag) {
      case 'low':
        return <span style={{ backgroundColor: '#28A745', padding: '5px', fontSize: '13px', color: '#fff', borderRadius: '10px' }}>{tag}</span>;
      case 'medium':
        return <span style={{ backgroundColor: '#FFC107', padding: '5px', fontSize: '13px', color: '#000', borderRadius: '10px' }}>{tag}</span>;
      case 'high':
        return <span style={{ backgroundColor: '#ff5050', padding: '5px', fontSize: '13px', color: '#fff', borderRadius: '10px' }}>{tag}</span>;
      default:
        return tag;
    }
  }

  return (
    <section className="task-container">
      <div className="task">
        {task.map((tarea, i) => (
          <div className="task-card" key={i}>
            <div className="task-card-header">
              <h4>{tarea.title}</h4>
              {addColorToTaskTag(tarea.priority)}
            </div>
            <div className="task-card-body">
              <p>{tarea.reponsible}</p>
              <p>{tarea.description}</p>
            </div>
            <div className="task-card-footer">
              <button onClick={() => deleteTask(i)}>Borrar</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
