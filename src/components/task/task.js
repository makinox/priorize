import React from 'react'
import TaskLayout from './taskLayout'

export default class extends React.Component {

  addColorToTaskTag = (tag) => {
    switch (tag) {
      case 'low':
        return <span style={{backgroundColor: '#28A745', padding: '5px', fontSize: '13px', color: '#fff', borderRadius: '10px'}}>{tag}</span>
      case 'medium':
        return <span style={{backgroundColor: '#FFC107', padding: '5px', fontSize: '13px', color: '#000', borderRadius: '10px'}}>{tag}</span>
      case 'high':
        return <span style={{backgroundColor: '#DC3545', padding: '5px', fontSize: '13px', color: '#fff', borderRadius: '10px'}}>{tag}</span>
      default:
        return tag
    }
  }

  render() { return <TaskLayout tasks={this.props.task} addColorToTaskTag={this.addColorToTaskTag} deleteTask={this.props.deleteTask} />}
}