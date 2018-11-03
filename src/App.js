import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import Navbar from './components/navbar/navbar';
import Formz from './components/form/forms'
//api
import {task} from './db.json'

class App extends Component {
  constructor () {
    super();
    this.state = {
      task: []
    }
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

  renderTasks = (tasks) => (
    tasks.map((tarea, i) => (
      <div className="col-md-3" key={i}>
          <div className="card ml-3 mt-3 text-center" >
            <div className="card-header">
              <h4 className="card-title">{tarea.title}</h4>
              {this.addColorToTaskTag(tarea.priority)}
            </div>
            <div className="card-body">
              <h5 className="card-title">{tarea.reponsible}</h5>
              <h6 className="card-text">{tarea.description}</h6>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={() => this.deleteTask(i) }>
                Borrar
              </button>
            </div>
          </div>
        </div>
    ))
  )

  render() {
    const { task } = this.state
    return (
      <div>
        <Navbar counter={this.state.task.length}/>
        <div className="container">
          <div className="row justify-content-center">
            <Formz onCustomOne={this.addTask} />
          </div>
          <div className="row justify-content-center">
            { this.renderTasks(task) }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
