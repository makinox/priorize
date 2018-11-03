import React from 'react'

import Navbar from './components/navbar/navbar'
import Form from './components/form/forms'
import Task from './components/task/task'
import {task} from './db.json'

export default class extends React.Component {
  
  state = {
    task: []
  }

  componentDidMount(){
    this.setState({ task })
  }

  addTask = (taskit) => {
    this.setState({
      task: [...this.state.task, taskit]
    })
  }

  deleteTask = (taskit) => {
    if (window.confirm('Estas seguro de borrar?')) {
      this.setState({
        task: this.state.task.filter((_, indice) => {
          return indice !== taskit
        })
      })
    }
  }

  render() {
    return (
      <>
        <Navbar counter={this.state.task.length}/>
        <Form onCustomOne={this.addTask} />
        <Task task={this.state.task} deleteTask={this.deleteTask} />
      </>
    )
  }
}