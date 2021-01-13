import React, { useState } from 'react';
import { task } from './db.json';
import Task from './components/task/task';
import Form from './components/form/forms';
import Navbar from './components/navbar/navbar';

export default function App() {
  const [tasq, useTasq] = useState(task);

  function AddTask(taskit) {
    useTasq((prev) => [...prev, taskit]);
  }

  function DeleteTask(taskit) {
    useTasq((prev) => {
      if (window.confirm('Estas seguro de borrar?')) {
        return prev.filter((_, indice) => {
          return indice !== taskit;
        });
      } else {
        return prev;
      }
    });
  }

  return (
    <>
      <Navbar counter={tasq.length} />
      <Form onCustomOne={AddTask} />
      <Task task={tasq} deleteTask={DeleteTask} />
    </>
  );
}
