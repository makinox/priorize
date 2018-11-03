import React from 'react'
import TaskLayout from './taskLayout'

export default class extends React.Component {

  addColorToTaskTag = (tag) => {
    switch (tag) {
      case 'low':
        return <span className="badge badge-pill badge-success p-2">{tag}</span>
      case 'medium':
        return <span className="badge badge-pill badge-warning p-2">{tag}</span>
      case 'high':
        return <span className="badge badge-pill badge-danger p-2">{tag}</span>
      default:
        return tag
    }
  }

  render() {
    return (
      <div className="container">
          <div className="row justify-content-center">
            <TaskLayout tasks={this.props.task} addColorToTaskTag={this.addColorToTaskTag} deleteTask={this.props.deleteTask} />
          </div>
        </div>
    )
  }
}