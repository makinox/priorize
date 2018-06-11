import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

//components
import Navbar from './components/navbar/navbar';
import Form from './components/form/forms'
//api
import {task} from './db.json'
console.log(task)

class App extends Component {
  constructor () {
    super();
    this.state = {
      task: task
    }
  }

  render() {
    const tareas = this.state.task.map((tarea, i) => {
      return (
        <div className="card ml-3 mt-3 text-center">
          <h4 className="card-header">{tarea.title}</h4>
          <div className="card-body">
            <h5 className="card-title">{tarea.reponsible}</h5>
            <h6 className="card-text">{tarea.description}</h6>
            <span className="badge badge-pill badge-danger p-1">{tarea.priority}</span>
          </div>
        </div>
      )
    })
    return (
      <div>
        <header>
          <Navbar/>
        </header>
        <div className="container">
          <div className="row justify-content-center">
            <Form/>
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
