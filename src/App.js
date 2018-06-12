import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import Navbar from './components/navbar/navbar';
import Formz from './components/form/forms'
//api
import {task} from './db.json'
console.log(task)

class App extends Component {
  constructor () {
    super();
    this.state = {
      task: task
    }
    this.addTask = this.addTask.bind(this)
  }

  addTask(taskit) {
    this.setState({
      task: [...this.state.task, taskit]
    })
  }

  deleteTask(taskit) {
    if (window.confirm('Estas seguro de borrar?')) {
      this.setState({
        task: this.state.task.filter((elemento, indice) => {
          return indice !== taskit
        })
      })
    }
  }

  render() {
    const tareas = this.state.task.map((tarea, i) => {
      return (
        <div className="col-md-3" key={i}>
          <div className="card ml-3 mt-3 text-center" >
            <div className="card-header">
              <h4 className="card-title">{tarea.title}</h4>
              <span className="badge badge-pill badge-danger p-1">{tarea.priority}</span>
            </div>
            <div className="card-body">
              <h5 className="card-title">{tarea.reponsible}</h5>
              <h6 className="card-text">{tarea.description}</h6>
            </div>
            <div className="card-footer">
              <button className="btn btn-danger" onClick={this.deleteTask.bind(this, i)}>
                Borrar
              </button>
            </div>
          </div>
        </div>
      )
    })
    return (
      <div>
        <header>
          <Navbar counter={this.state.task.length}/>
        </header>
        <div className="container">
          <div className="row justify-content-center">
            <Formz onCustomOne={this.addTask} />
          </div>
          <div className="row justify-content-center">
            {tareas}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
